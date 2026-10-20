// ============================================================
// ESTATE-EASE SERVER
// ============================================================

const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const mysql = require("mysql2/promise");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;


// ============================================================
// MIDDLEWARE
// ============================================================

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


// ============================================================
// SESSION
// ============================================================

app.use(
    session({

        secret:
            process.env.SESSION_SECRET ||
            "estate-ease-secret-key",

        resave: false,

        saveUninitialized: false,

        cookie: {

            httpOnly: true,

            // Default session duration = 1 day
            maxAge: 1000 * 60 * 60 * 24

        }

    })
);


// ============================================================
// MYSQL DATABASE
// ============================================================

const db = mysql.createPool({

    host:
        process.env.DB_HOST ||
        "localhost",

    user:
        process.env.DB_USER ||
        "root",

    password:
        process.env.DB_PASSWORD ||
        "",

    database:
        process.env.DB_NAME ||
        "estate_ease",

    waitForConnections: true,

    connectionLimit: 10,

    queueLimit: 0

});


// ============================================================
// TEST DATABASE CONNECTION
// ============================================================

async function testDatabase() {

    try {

        const connection =
            await db.getConnection();

        console.log(
            "MySQL connected successfully!"
        );

        connection.release();

    }

    catch (error) {

        console.error(
            "MySQL connection failed:",
            error.message
        );

    }

}

testDatabase();


// ============================================================
// HELPER - CREATE USER SESSION
// ============================================================

function createLoginSession(
    req,
    user,
    remember
) {

    return new Promise(
        (resolve, reject) => {

            req.session.regenerate(
                error => {

                    if (error) {

                        return reject(error);

                    }


                    req.session.user = {

                        id:
                            user.id,

                        name:
                            user.name,

                        email:
                            user.email,

                        role:
                            user.role

                    };


                    // ------------------------------------------------
                    // REMEMBER ME
                    // ------------------------------------------------

                    if (remember) {

                        // 30 days
                        req.session.cookie.maxAge =
                            1000 *
                            60 *
                            60 *
                            24 *
                            30;

                    }

                    else {

                        // 1 day
                        req.session.cookie.maxAge =
                            1000 *
                            60 *
                            60 *
                            24;

                    }


                    req.session.save(
                        saveError => {

                            if (saveError) {

                                return reject(
                                    saveError
                                );

                            }

                            resolve();

                        }
                    );

                }
            );

        }
    );

}


// ============================================================
// LOGIN / AUTO ACCOUNT CREATION
// ============================================================
//
// NEW USER:
// Email not found -> automatically create account.
//
// EXISTING USER:
// Email found -> password is checked.
//
// No separate signup page is required.
// ============================================================

app.post(
    "/api/login",

    async (req, res) => {

        const email =
            String(
                req.body.email || ""
            )
            .trim()
            .toLowerCase();

        const password =
            String(
                req.body.password || ""
            );

        const remember =
            req.body.remember === true ||
            req.body.remember === "true";


        // ------------------------------------------------
        // BASIC VALIDATION
        // ------------------------------------------------

        if (
            !email ||
            !password
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Email and password are required."

            });

        }


        // ------------------------------------------------
        // EMAIL VALIDATION
        // ------------------------------------------------

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(email)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Please enter a valid email address."

            });

        }


        try {

            // ------------------------------------------------
            // FIND USER
            // ------------------------------------------------

            const [rows] =
                await db.execute(

                    `SELECT *
                     FROM users
                     WHERE email = ?
                     LIMIT 1`,

                    [
                        email
                    ]

                );


            // =================================================
            // NEW USER
            // =================================================

            if (
                rows.length === 0
            ) {

                // New account requires minimum 6 characters
                if (
                    password.length < 6
                ) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "For a new account, password must be at least 6 characters."

                    });

                }


                // ------------------------------------------------
                // CREATE PASSWORD HASH
                // ------------------------------------------------

                const hashedPassword =
                    await bcrypt.hash(
                        password,
                        10
                    );


                // ------------------------------------------------
                // CREATE USER NAME FROM EMAIL
                // ------------------------------------------------

                const emailName =
                    email
                        .split("@")[0]
                        .replace(
                            /[._-]+/g,
                            " "
                        )
                        .trim();


                const generatedName =
                    emailName
                        ? emailName
                            .split(" ")
                            .map(
                                word =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1)
                            )
                            .join(" ")
                        : "Estate-Ease User";


                // ------------------------------------------------
                // INSERT NEW USER
                // ------------------------------------------------

                const [result] =
                    await db.execute(

                        `INSERT INTO users
                        (
                            name,
                            email,
                            password,
                            role
                        )
                        VALUES
                        (
                            ?,
                            ?,
                            ?,
                            'user'
                        )`,

                        [

                            generatedName,

                            email,

                            hashedPassword

                        ]

                    );


                // ------------------------------------------------
                // CREATE SESSION
                // ------------------------------------------------

                const newUser = {

                    id:
                        result.insertId,

                    name:
                        generatedName,

                    email:
                        email,

                    role:
                        "user"

                };


                await createLoginSession(
                    req,
                    newUser,
                    remember
                );


                return res.status(201).json({

                    success: true,

                    created: true,

                    message:
                        "Account created and login successful.",

                    user:
                        req.session.user

                });

            }


            // =================================================
            // EXISTING USER
            // =================================================

            const user =
                rows[0];


            // ------------------------------------------------
            // CHECK PASSWORD
            // ------------------------------------------------

            const validPassword =
                await bcrypt.compare(
                    password,
                    user.password
                );


            if (!validPassword) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password."

                });

            }


            // ------------------------------------------------
            // LOGIN EXISTING USER
            // ------------------------------------------------

            await createLoginSession(
                req,
                user,
                remember
            );


            return res.json({

                success: true,

                created: false,

                message:
                    "Login successful.",

                user:
                    req.session.user

            });

        }

        catch (error) {

            console.error(
                "Login error:",
                error
            );


            // Duplicate email protection
            if (
                error.code === "ER_DUP_ENTRY"
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "This email is already registered. Please login again."

                });

            }


            res.status(500).json({

                success: false,

                message:
                    "Server error."

            });

        }

    }
);


// ============================================================
// CHECK LOGIN
// ============================================================

app.get(
    "/api/me",

    (req, res) => {

        if (
            !req.session.user
        ) {

            return res.status(401).json({

                loggedIn: false

            });

        }


        res.json({

            loggedIn: true,

            user:
                req.session.user

        });

    }
);


// ============================================================
// LOGOUT
// ============================================================

app.post(
    "/api/logout",

    (req, res) => {

        req.session.destroy(
            error => {

                if (error) {

                    console.error(
                        "Logout error:",
                        error
                    );

                    return res.status(500).json({

                        success: false,

                        message:
                            "Logout failed."

                    });

                }


                res.clearCookie(
                    "connect.sid"
                );


                res.json({

                    success: true,

                    message:
                        "Logged out successfully."

                });

            }
        );

    }
);


// ============================================================
// LOGIN PROTECTION
// ============================================================

function requireLogin(
    req,
    res,
    next
) {

    if (
        !req.session.user
    ) {

        return res.status(401).json({

            success: false,

            message:
                "Please login first."

        });

    }


    next();

}


// ============================================================
// ADMIN PROTECTION
// ============================================================

function requireAdmin(
    req,
    res,
    next
) {

    if (
        !req.session.user
    ) {

        return res.status(401).json({

            success: false,

            message:
                "Login required."

        });

    }


    if (
        req.session.user.role !== "admin"
    ) {

        return res.status(403).json({

            success: false,

            message:
                "Admin access required."

        });

    }


    next();

}


// ============================================================
// ADMIN LOGIN CHECK
// ============================================================

app.get(
    "/api/admin/me",

    requireAdmin,

    (req, res) => {

        res.json({

            success: true,

            user:
                req.session.user

        });

    }
);


// ============================================================
// ADMIN DASHBOARD STATS
// ============================================================

app.get(
    "/api/admin/stats",

    requireAdmin,

    async (req, res) => {

        try {

            const [userRows] =
                await db.execute(
                    `SELECT COUNT(*) AS total
                     FROM users`
                );


            const [propertyRows] =
                await db.execute(
                    `SELECT
                        COUNT(*) AS totalProperties,
                        SUM(status = 'pending') AS pendingProperties,
                        SUM(status = 'approved') AS approvedProperties,
                        SUM(status = 'rejected') AS rejectedProperties
                     FROM properties`
                );


            const [bookingRows] =
                await db.execute(
                    `SELECT
                        COUNT(*) AS totalBookings,
                        SUM(status = 'pending') AS pendingBookings
                     FROM bookings`
                );


            const propertyStats =
                propertyRows[0];

            const bookingStats =
                bookingRows[0];


            res.json({

                success: true,

                totalUsers:
                    Number(
                        userRows[0].total || 0
                    ),

                totalProperties:
                    Number(
                        propertyStats.totalProperties || 0
                    ),

                pendingProperties:
                    Number(
                        propertyStats.pendingProperties || 0
                    ),

                approvedProperties:
                    Number(
                        propertyStats.approvedProperties || 0
                    ),

                rejectedProperties:
                    Number(
                        propertyStats.rejectedProperties || 0
                    ),

                totalBookings:
                    Number(
                        bookingStats.totalBookings || 0
                    ),

                pendingBookings:
                    Number(
                        bookingStats.pendingBookings || 0
                    )

            });

        }

        catch (error) {

            console.error(
                "Admin stats error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load statistics."

            });

        }

    }
);


// ============================================================
// ADMIN USERS
// ============================================================

app.get(
    "/api/admin/users",

    requireAdmin,

    async (req, res) => {

        try {

            const [rows] =
                await db.execute(`

                    SELECT
                        id,
                        name,
                        email,
                        role,
                        created_at

                    FROM users

                    ORDER BY id DESC

                `);


            res.json({

                success: true,

                users:
                    rows

            });

        }

        catch (error) {

            console.error(
                "Admin users error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load users."

            });

        }

    }
);


// ============================================================
// ADMIN - GET ALL PROPERTIES
// ============================================================

app.get(
    "/api/admin/properties",

    requireAdmin,

    async (req, res) => {

        try {

            const [rows] =
                await db.execute(`

                    SELECT

                        p.id,
                        p.title,
                        p.type,
                        p.purpose,
                        p.location,
                        p.price,
                        p.bedrooms,
                        p.bathrooms,
                        p.area,
                        p.description,
                        p.owner_name,
                        p.owner_phone,
                        p.image,
                        p.status,
                        p.user_id,
                        p.created_at,

                        u.name AS posted_by,
                        u.email AS posted_email

                    FROM properties p

                    LEFT JOIN users u
                    ON p.user_id = u.id

                    ORDER BY p.id DESC

                `);


            res.json({

                success: true,

                properties:
                    rows

            });

        }

        catch (error) {

            console.error(
                "Admin properties error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load properties."

            });

        }

    }
);


// ============================================================
// ADMIN - APPROVE PROPERTY
// ============================================================

app.put(
    "/api/admin/properties/:id/approve",

    requireAdmin,

    async (req, res) => {

        try {

            const propertyId =
                Number(
                    req.params.id
                );


            if (
                !propertyId
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid property ID."

                });

            }


            const [result] =
                await db.execute(

                    `UPDATE properties
                     SET status = 'approved'
                     WHERE id = ?`,

                    [
                        propertyId
                    ]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Property approved successfully."

            });

        }

        catch (error) {

            console.error(
                "Approve property error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to approve property."

            });

        }

    }
);


// ============================================================
// ADMIN - REJECT PROPERTY
// ============================================================

app.put(
    "/api/admin/properties/:id/reject",

    requireAdmin,

    async (req, res) => {

        try {

            const propertyId =
                Number(
                    req.params.id
                );


            if (
                !propertyId
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid property ID."

                });

            }


            const [result] =
                await db.execute(

                    `UPDATE properties
                     SET status = 'rejected'
                     WHERE id = ?`,

                    [
                        propertyId
                    ]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Property rejected successfully."

            });

        }

        catch (error) {

            console.error(
                "Reject property error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to reject property."

            });

        }

    }
);


// ============================================================
// ADMIN - DELETE PROPERTY
// ============================================================

app.delete(
    "/api/admin/properties/:id",

    requireAdmin,

    async (req, res) => {

        try {

            const propertyId =
                Number(
                    req.params.id
                );


            if (
                !propertyId
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid property ID."

                });

            }


            const [bookingRows] =
                await db.execute(

                    `SELECT id
                     FROM bookings
                     WHERE property_id = ?
                     LIMIT 1`,

                    [
                        propertyId
                    ]

                );


            if (
                bookingRows.length > 0
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "This property cannot be deleted because it has bookings."

                });

            }


            const [result] =
                await db.execute(

                    `DELETE FROM properties
                     WHERE id = ?`,

                    [
                        propertyId
                    ]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Property deleted successfully."

            });

        }

        catch (error) {

            console.error(
                "Delete property error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to delete property."

            });

        }

    }
);


// ============================================================
// UPLOAD FOLDER
// ============================================================

const uploadFolder =
    path.join(
        __dirname,
        "uploads"
    );


if (
    !fs.existsSync(uploadFolder)
) {

    fs.mkdirSync(
        uploadFolder,
        {
            recursive: true
        }
    );

}


// ============================================================
// MULTER STORAGE
// ============================================================

const storage =
    multer.diskStorage({

        destination:
            function (
                req,
                file,
                cb
            ) {

                cb(
                    null,
                    uploadFolder
                );

            },


        filename:
            function (
                req,
                file,
                cb
            ) {

                const extension =
                    path.extname(
                        file.originalname
                    );


                const uniqueName =
                    "property-" +
                    Date.now() +
                    "-" +
                    Math.round(
                        Math.random() * 1E9
                    ) +
                    extension;


                cb(
                    null,
                    uniqueName
                );

            }

    });


const upload =
    multer({

        storage,

        limits: {

            fileSize:
                5 * 1024 * 1024

        },


        fileFilter:
            function (
                req,
                file,
                cb
            ) {

                if (
                    file.mimetype &&
                    file.mimetype.startsWith(
                        "image/"
                    )
                ) {

                    cb(
                        null,
                        true
                    );

                }

                else {

                    cb(
                        new Error(
                            "Only image files are allowed."
                        )
                    );

                }

            }

    });


// ============================================================
// POST PROPERTY
// ============================================================

app.post(
    "/api/properties",

    requireLogin,

    upload.single("image"),

    async (req, res) => {

        try {

            const {

                title,
                type,
                purpose,
                location,
                price,
                bedrooms,
                area,
                description,
                owner_name,
                owner_phone

            } = req.body;


            if (

                !title ||
                !type ||
                !purpose ||
                !location ||
                !price ||
                !area ||
                !owner_name ||
                !owner_phone

            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Please fill all required fields."

                });

            }


            if (
                !req.file
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Please upload a property photo."

                });

            }


            const imagePath =
                "/uploads/" +
                req.file.filename;


            const [result] =
                await db.execute(

                    `INSERT INTO properties

                    (
                        title,
                        type,
                        purpose,
                        location,
                        price,
                        bedrooms,
                        bathrooms,
                        area,
                        description,
                        owner_name,
                        owner_phone,
                        image,
                        status,
                        user_id
                    )

                    VALUES

                    (
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        'pending',
                        ?
                    )`,

                    [

                        title,

                        type,

                        purpose,

                        location,

                        price,

                        bedrooms || 0,

                        0,

                        area,

                        description || "",

                        owner_name,

                        owner_phone,

                        imagePath,

                        req.session.user.id

                    ]

                );


            res.status(201).json({

                success: true,

                message:
                    "Property submitted successfully. Waiting for admin approval.",

                propertyId:
                    result.insertId,

                status:
                    "pending"

            });

        }

        catch (error) {

            console.error(
                "Property upload error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Failed to save property."

            });

        }

    }
);


// ============================================================
// USER'S OWN PROPERTIES
// ============================================================

app.get(
    "/api/my-properties",

    requireLogin,

    async (req, res) => {

        try {

            const [rows] =
                await db.execute(

                    `SELECT *
                     FROM properties
                     WHERE user_id = ?
                     ORDER BY id DESC`,

                    [
                        req.session.user.id
                    ]

                );


            res.json({

                success: true,

                properties:
                    rows

            });

        }

        catch (error) {

            console.error(
                "My properties error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load your properties."

            });

        }

    }
);


// ============================================================
// PUBLIC APPROVED PROPERTIES
// ============================================================

app.get(
    "/api/properties",

    async (req, res) => {

        try {

            const [rows] =
                await db.execute(`

                    SELECT

                        id,
                        title,
                        type,
                        purpose,
                        location,
                        price,
                        bedrooms,
                        bathrooms,
                        area,
                        description,
                        owner_name,
                        owner_phone,
                        image,
                        status,
                        user_id,
                        created_at

                    FROM properties

                    WHERE status = 'approved'

                    ORDER BY id DESC

                `);


            res.json({

                success: true,

                properties:
                    rows

            });

        }

        catch (error) {

            console.error(
                "Public properties error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load properties."

            });

        }

    }
);


// ============================================================
// CREATE PROPERTY VISIT BOOKING
// ============================================================

app.post(
    "/api/bookings",

    requireLogin,

    async (req, res) => {

        try {

            const {
                property_id,
                booking_date
            } = req.body;


            if (
                !property_id ||
                !booking_date
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Property and visit date are required."

                });

            }


            const propertyId =
                Number(
                    property_id
                );


            if (
                !propertyId
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid property ID."

                });

            }


            // ------------------------------------------------
            // DATE VALIDATION
            // ------------------------------------------------

            const selectedDate =
                new Date(
                    booking_date +
                    "T00:00:00"
                );


            if (
                Number.isNaN(
                    selectedDate.getTime()
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid booking date."

                });

            }


            const today =
                new Date();


            today.setHours(
                0,
                0,
                0,
                0
            );


            if (
                selectedDate < today
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Booking date cannot be in the past."

                });

            }


            // ------------------------------------------------
            // CHECK PROPERTY
            // ------------------------------------------------

            const [propertyRows] =
                await db.execute(

                    `SELECT

                        id,
                        title,
                        type,
                        purpose,
                        location,
                        price,
                        status

                     FROM properties

                     WHERE id = ?

                     AND status = 'approved'

                     LIMIT 1`,

                    [
                        propertyId
                    ]

                );


            if (
                propertyRows.length === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found or not approved."

                });

            }


            const property =
                propertyRows[0];


            // ------------------------------------------------
            // SAME-DAY BOOKING CHECK
            // ------------------------------------------------

            const [existingBookings] =
                await db.execute(

                    `SELECT id
                     FROM bookings
                     WHERE property_id = ?
                     AND start_date = ?
                     AND status IN
                     ('pending', 'confirmed')
                     LIMIT 1`,

                    [

                        property.id,

                        booking_date

                    ]

                );


            if (
                existingBookings.length > 0
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "This property is already booked for this date."

                });

            }


            // ------------------------------------------------
            // INSERT BOOKING
            // ------------------------------------------------

            const [result] =
                await db.execute(

                    `INSERT INTO bookings

                    (
                        property_id,
                        user_id,
                        start_date,
                        end_date,
                        duration,
                        total_amount,
                        status,
                        payment_status
                    )

                    VALUES

                    (
                        ?,
                        ?,
                        ?,
                        ?,
                        1,
                        0,
                        'pending',
                        'unpaid'
                    )`,

                    [

                        property.id,

                        req.session.user.id,

                        booking_date,

                        booking_date

                    ]

                );


            res.status(201).json({

                success: true,

                message:
                    "Property visit booked successfully.",

                booking: {

                    id:
                        result.insertId,

                    property_id:
                        property.id,

                    property_title:
                        property.title,

                    booking_date:
                        booking_date,

                    status:
                        "pending",

                    payment_status:
                        "unpaid"

                }

            });

        }

        catch (error) {

            console.error(
                "Booking error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Failed to create booking."

            });

        }

    }
);


// ============================================================
// USER BOOKINGS
// ============================================================

app.get(
    "/api/my-bookings",

    requireLogin,

    async (req, res) => {

        try {

            const [rows] =
                await db.execute(

                    `SELECT

                        b.id,
                        b.property_id,
                        b.start_date,
                        b.end_date,
                        b.duration,
                        b.total_amount,
                        b.status,
                        b.payment_status,
                        b.created_at,

                        p.title AS property_title,
                        p.location,
                        p.type,
                        p.purpose,
                        p.price,
                        p.image

                    FROM bookings b

                    JOIN properties p
                    ON b.property_id = p.id

                    WHERE b.user_id = ?

                    ORDER BY b.id DESC`,

                    [
                        req.session.user.id
                    ]

                );


            res.json({

                success: true,

                bookings:
                    rows

            });

        }

        catch (error) {

            console.error(
                "My bookings error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load your bookings."

            });

        }

    }
);


// ============================================================
// ADMIN BOOKINGS
// ============================================================

app.get(
    "/api/admin/bookings",

    requireAdmin,

    async (req, res) => {

        try {

            const [rows] =
                await db.execute(`

                    SELECT

                        b.id,
                        b.property_id,
                        b.user_id,
                        b.start_date,
                        b.end_date,
                        b.duration,
                        b.total_amount,
                        b.status,
                        b.payment_status,
                        b.created_at,

                        p.title AS property_title,
                        p.location,
                        p.type,
                        p.purpose,

                        u.name AS user_name,
                        u.email AS user_email

                    FROM bookings b

                    JOIN properties p
                    ON b.property_id = p.id

                    JOIN users u
                    ON b.user_id = u.id

                    ORDER BY b.id DESC

                `);


            res.json({

                success: true,

                bookings:
                    rows

            });

        }

        catch (error) {

            console.error(
                "Admin bookings error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to load bookings."

            });

        }

    }
);


// ============================================================
// ADMIN UPDATE BOOKING STATUS
// ============================================================

app.put(
    "/api/admin/bookings/:id/status",

    requireAdmin,

    async (req, res) => {

        try {

            const {
                status
            } = req.body;


            const allowedStatuses = [

                "pending",
                "confirmed",
                "cancelled"

            ];


            if (
                !allowedStatuses.includes(
                    status
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid booking status."

                });

            }


            const [result] =
                await db.execute(

                    `UPDATE bookings
                     SET status = ?
                     WHERE id = ?`,

                    [

                        status,

                        req.params.id

                    ]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Booking not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Booking status updated."

            });

        }

        catch (error) {

            console.error(
                "Booking status error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to update booking status."

            });

        }

    }
);


// ============================================================
// PROTECTED HOME
// ============================================================

app.get(
    "/home",

    (req, res) => {

        if (
            !req.session.user
        ) {

            return res.redirect(
                "/login.html"
            );

        }


        res.sendFile(

            path.join(
                __dirname,
                "index.html"
            )

        );

    }
);


// ============================================================
// ADMIN FOLDER PROTECTION
// ============================================================

app.use(
    "/admin",

    (req, res, next) => {

        if (
            !req.session.user
        ) {

            return res.redirect(
                "/login.html"
            );

        }


        if (
            req.session.user.role !== "admin"
        ) {

            return res.redirect(
                "/index.html"
            );

        }


        next();

    },

    express.static(
        path.join(
            __dirname,
            "admin"
        )
    )

);


// ============================================================
// UPLOADS
// ============================================================

app.use(
    "/uploads",

    express.static(
        uploadFolder
    )
);


// ============================================================
// STATIC PROJECT FILES
// ============================================================

app.use(
    express.static(
        __dirname
    )
);


// ============================================================
// MULTER / SERVER ERROR HANDLER
// ============================================================

app.use(
    (
        error,
        req,
        res,
        next
    ) => {

        if (
            error instanceof
            multer.MulterError
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Image upload error: " +
                    error.message

            });

        }


        if (
            error &&
            error.message ===
            "Only image files are allowed."
        ) {

            return res.status(400).json({

                success: false,

                message:
                    error.message

            });

        }


        console.error(
            "Server error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Internal server error."

        });

    }
);


// ============================================================
// START SERVER
// ============================================================

app.listen(
    PORT,

    () => {

        console.log(
            `Estate-Ease server running at http://localhost:${PORT}`
        );

    }
);