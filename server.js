const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const mysql = require("mysql2/promise");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const app = express();

const PORT = 3000;


// ======================================================
// MIDDLEWARE
// ======================================================

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


// ======================================================
// SESSION
// ======================================================

app.use(
    session({

        secret: "estate-ease-secret-key",

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60
        }

    })
);


// ======================================================
// MYSQL CONNECTION
// ======================================================

const db = mysql.createPool({

    host: "localhost",

    user: "root",

    password: "",

    database: "estate_ease"

});


// ======================================================
// TEST MYSQL CONNECTION
// ======================================================

async function testDatabase() {

    try {

        const connection =
            await db.getConnection();

        console.log(
            "MySQL connected successfully!"
        );

        connection.release();

    } catch (error) {

        console.error(
            "MySQL connection failed:",
            error.message
        );

    }

}

testDatabase();


// ======================================================
// LOGIN API
// ======================================================

app.post(
    "/api/login",
    async (req, res) => {

        const {
            email,
            password
        } = req.body;


        // Required fields

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message:
                    "Email and password are required"

            });

        }


        try {

            // Find user

            const [rows] =
                await db.execute(

                    "SELECT * FROM users WHERE email = ?",

                    [email]

                );


            // User not found

            if (rows.length === 0) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password"

                });

            }


            const user = rows[0];


            // Check password

            const validPassword =
                await bcrypt.compare(
                    password,
                    user.password
                );


            if (!validPassword) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password"

                });

            }


            // Create session

            req.session.user = {

                id: user.id,

                name: user.name,

                email: user.email,

                role: user.role

            };


            // Send response

            res.json({

                success: true,

                message: "Login successful",

                user: {

                    id: user.id,

                    name: user.name,

                    email: user.email,

                    role: user.role

                }

            });

        }

        catch (error) {

            console.error(
                "Login error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Server error"

            });

        }

    }
);


// ======================================================
// CHECK LOGIN
// ======================================================

app.get(
    "/api/me",
    (req, res) => {

        if (!req.session.user) {

            return res.status(401).json({

                loggedIn: false

            });

        }


        res.json({

            loggedIn: true,

            user: req.session.user

        });

    }
);


// ======================================================
// LOGOUT
// ======================================================

app.post(
    "/api/logout",
    (req, res) => {

        req.session.destroy(
            (error) => {

                if (error) {

                    return res.status(500).json({

                        success: false,

                        message:
                            "Logout failed"

                    });

                }


                res.json({

                    success: true,

                    message:
                        "Logged out successfully"

                });

            }
        );

    }
);


// ======================================================
// NORMAL USER LOGIN PROTECTION
// ======================================================

function requireLogin(
    req,
    res,
    next
) {

    if (!req.session.user) {

        return res.status(401).json({

            success: false,

            message:
                "Please login first."

        });

    }


    next();

}


// ======================================================
// ADMIN PROTECTION
// ======================================================

function requireAdmin(
    req,
    res,
    next
) {

    // Not logged in

    if (!req.session.user) {

        return res.status(401).json({

            success: false,

            message:
                "Login required"

        });

    }


    // Logged in but not admin

    if (
        req.session.user.role !== "admin"
    ) {

        return res.status(403).json({

            success: false,

            message:
                "Admin access required"

        });

    }


    next();

}


// ======================================================
// ADMIN SESSION CHECK
// ======================================================

app.get(
    "/api/admin/me",
    requireAdmin,
    (req, res) => {

        res.json({

            success: true,

            user: req.session.user

        });

    }
);


// ======================================================
// ADMIN STATISTICS
// ======================================================

app.get(
    "/api/admin/stats",
    requireAdmin,
    async (req, res) => {

        try {

            // -----------------------------
            // TOTAL USERS
            // -----------------------------

            const [userRows] =
                await db.execute(

                    "SELECT COUNT(*) AS total FROM users"

                );


            const totalUsers =
                userRows[0].total;


            // -----------------------------
            // PROPERTY COUNTS
            // -----------------------------

            let totalProperties = 0;

            let pendingProperties = 0;

            let approvedProperties = 0;

            let rejectedProperties = 0;


            try {

                // Total properties

                const [propertyRows] =
                    await db.execute(

                        "SELECT COUNT(*) AS total FROM properties"

                    );


                totalProperties =
                    propertyRows[0].total;


                // Pending

                const [pendingRows] =
                    await db.execute(

                        `SELECT COUNT(*) AS total
                         FROM properties
                         WHERE status = 'pending'`

                    );


                pendingProperties =
                    pendingRows[0].total;


                // Approved

                const [approvedRows] =
                    await db.execute(

                        `SELECT COUNT(*) AS total
                         FROM properties
                         WHERE status = 'approved'`

                    );


                approvedProperties =
                    approvedRows[0].total;


                // Rejected

                const [rejectedRows] =
                    await db.execute(

                        `SELECT COUNT(*) AS total
                         FROM properties
                         WHERE status = 'rejected'`

                    );


                rejectedProperties =
                    rejectedRows[0].total;

            }

            catch (propertyError) {

                console.log(
                    "Properties table error:",
                    propertyError.message
                );

            }


            res.json({

                success: true,

                totalUsers,

                totalProperties,

                pendingProperties,

                approvedProperties,

                rejectedProperties

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
                    "Unable to load statistics"

            });

        }

    }
);


// ======================================================
// ADMIN USERS
// ======================================================

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

                users: rows

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
                    "Unable to load users"

            });

        }

    }
);


// ======================================================
// ADMIN GET ALL PROPERTIES
// ======================================================

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

                properties: rows

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
                    "Unable to load properties"

            });

        }

    }
);


// ======================================================
// ADMIN APPROVE PROPERTY
// ======================================================

app.put(
    "/api/admin/properties/:id/approve",
    requireAdmin,
    async (req, res) => {

        try {

            const propertyId =
                req.params.id;


            const [result] =
                await db.execute(

                    `UPDATE properties
                     SET status = 'approved'
                     WHERE id = ?`,

                    [propertyId]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found"

                });

            }


            res.json({

                success: true,

                message:
                    "Property approved successfully"

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
                    "Unable to approve property"

            });

        }

    }
);


// ======================================================
// ADMIN REJECT PROPERTY
// ======================================================

app.put(
    "/api/admin/properties/:id/reject",
    requireAdmin,
    async (req, res) => {

        try {

            const propertyId =
                req.params.id;


            const [result] =
                await db.execute(

                    `UPDATE properties
                     SET status = 'rejected'
                     WHERE id = ?`,

                    [propertyId]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found"

                });

            }


            res.json({

                success: true,

                message:
                    "Property rejected successfully"

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
                    "Unable to reject property"

            });

        }

    }
);


// ======================================================
// ADMIN DELETE PROPERTY
// ======================================================

app.delete(
    "/api/admin/properties/:id",
    requireAdmin,
    async (req, res) => {

        try {

            const propertyId =
                req.params.id;


            const [result] =
                await db.execute(

                    "DELETE FROM properties WHERE id = ?",

                    [propertyId]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Property not found"

                });

            }


            res.json({

                success: true,

                message:
                    "Property deleted successfully"

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
                    "Unable to delete property"

            });

        }

    }
);


// ======================================================
// UPLOAD FOLDER
// ======================================================

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

    console.log(
        "Uploads folder created."
    );

}


// ======================================================
// MULTER IMAGE UPLOAD CONFIGURATION
// ======================================================

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

        storage: storage,

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


// ======================================================
// POST PROPERTY
// ======================================================

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


            // ------------------------------------------
            // REQUIRED FIELDS
            // ------------------------------------------

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


            // ------------------------------------------
            // IMAGE REQUIRED
            // ------------------------------------------

            if (!req.file) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Please upload a property photo."

                });

            }


            // ------------------------------------------
            // IMAGE PATH
            // ------------------------------------------

            const imagePath =
                "/uploads/" +
                req.file.filename;


            // ------------------------------------------
            // INSERT PROPERTY
            // ------------------------------------------

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


            // ------------------------------------------
            // SUCCESS
            // ------------------------------------------

            res.status(201).json({

                success: true,

                message:
                    "Property submitted successfully.",

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


// ======================================================
// USER'S OWN PROPERTIES
// ======================================================

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

                properties: rows

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
                    "Unable to load your properties"

            });

        }

    }
);


// ======================================================
// APPROVED PROPERTIES FOR WEBSITE
// ======================================================

app.get(
    "/api/properties",
    async (req, res) => {

        try {

            const [rows] =
                await db.execute(

                    `SELECT
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
                        created_at

                     FROM properties

                     WHERE status = 'approved'

                     ORDER BY id DESC`

                );


            res.json({

                success: true,

                properties: rows

            });

        }

        catch (error) {

            console.error(
                "Properties error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Unable to load properties"

            });

        }

    }
);


// ======================================================
// PROTECTED HOME
// ======================================================

app.get(
    "/home",
    (req, res) => {

        if (!req.session.user) {

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


// ======================================================
// ADMIN FOLDER PROTECTION
// ======================================================
// IMPORTANT:
// This must come BEFORE general static files.

app.use(
    "/admin",

    (req, res, next) => {

        // Not logged in

        if (!req.session.user) {

            return res.redirect(
                "/login.html"
            );

        }


        // Normal user

        if (
            req.session.user.role !== "admin"
        ) {

            return res.redirect(
                "/index.html"
            );

        }


        // Admin

        next();

    },


    express.static(

        path.join(
            __dirname,
            "admin"
        )

    )

);


// ======================================================
// SERVE UPLOADED IMAGES
// ======================================================

app.use(
    "/uploads",
    express.static(uploadFolder)
);


// ======================================================
// SERVE OTHER PROJECT FILES
// ======================================================

app.use(
    express.static(__dirname)
);


// ======================================================
// ERROR HANDLER FOR MULTER
// ======================================================

app.use(
    (error, req, res, next) => {

        if (
            error instanceof multer.MulterError
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


        next(error);

    }
);


// ======================================================
// START SERVER
// ======================================================

app.listen(
    PORT,
    () => {

        console.log(
            `Estate-Ease server running at http://localhost:${PORT}`
        );

    }
);