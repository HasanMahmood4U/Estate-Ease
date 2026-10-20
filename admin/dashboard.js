// =====================================================
// ESTATE-EASE ADMIN DASHBOARD
// =====================================================


// =====================================================
// SHOW STATUS
// =====================================================

function showStatus(
    message,
    type = "success"
) {

    const box =
        document.getElementById(
            "statusBox"
        );


    if (!box) return;


    box.textContent =
        message;


    box.className =
        "status-box " + type;


    // Automatically hide success message
    if (type === "success") {

        setTimeout(
            () => {

                box.className =
                    "status-box";

                box.textContent =
                    "";

            },
            4000
        );

    }

}


// =====================================================
// API REQUEST HELPER
// =====================================================

async function apiRequest(
    url,
    options = {}
) {

    try {

        const response =
            await fetch(
                url,
                {
                    credentials: "include",

                    ...options,

                    headers: {

                        ...(options.body
                            ? {
                                "Content-Type":
                                    "application/json"
                            }
                            : {}),

                        ...(options.headers || {})

                    }
                }
            );


        let data = {};


        try {

            data =
                await response.json();

        }

        catch (error) {

            data = {};

        }


        if (!response.ok) {

            throw new Error(
                data.message ||
                `Server error: ${response.status}`
            );

        }


        return data;

    }

    catch (error) {

        console.error(
            "API ERROR:",
            url,
            error
        );


        throw error;

    }

}


// =====================================================
// CHECK ADMIN LOGIN
// =====================================================

async function checkAdminLogin() {

    try {

        const data =
            await apiRequest(
                "/api/admin/me"
            );


        console.log(
            "Admin login:",
            data
        );


        if (
            !data.loggedIn &&
            !data.success
        ) {

            window.location.href =
                "../login.html";

            return false;

        }


        if (
            data.user &&
            data.user.role &&
            data.user.role !== "admin"
        ) {

            alert(
                "Admin access required."
            );


            window.location.href =
                "../index.html";


            return false;

        }


        return true;

    }

    catch (error) {

        console.error(
            "Admin login error:",
            error
        );


        showStatus(
            "Unable to connect to Estate-Ease server. Make sure node server.js is running.",
            "error"
        );


        return false;

    }

}


// =====================================================
// LOAD ADMIN NAME
// =====================================================

async function loadAdminName() {

    try {

        const data =
            await apiRequest(
                "/api/admin/me"
            );


        const adminName =
            document.getElementById(
                "adminName"
            );


        if (
            adminName &&
            data.user
        ) {

            adminName.textContent =
                data.user.name ||
                "Estate-Ease Admin";

        }

    }

    catch (error) {

        console.error(
            "Admin name error:",
            error
        );

    }

}


// =====================================================
// LOAD STATISTICS
// =====================================================

async function loadStats() {

    try {

        const data =
            await apiRequest(
                "/api/admin/stats"
            );


        const stats =
            data.stats ||
            data;


        document.getElementById(
            "totalUsers"
        ).textContent =
            Number(
                stats.totalUsers || 0
            );


        document.getElementById(
            "totalProperties"
        ).textContent =
            Number(
                stats.totalProperties || 0
            );


        document.getElementById(
            "pendingProperties"
        ).textContent =
            Number(
                stats.pendingProperties || 0
            );


        document.getElementById(
            "approvedProperties"
        ).textContent =
            Number(
                stats.approvedProperties || 0
            );

    }

    catch (error) {

        console.error(
            "Stats error:",
            error
        );


        showStatus(
            error.message ||
            "Unable to load statistics.",
            "error"
        );

    }

}


// =====================================================
// LOAD USERS
// =====================================================

async function loadUsers() {

    const table =
        document.getElementById(
            "usersTable"
        );


    if (!table) return;


    table.innerHTML = `

        <tr>

            <td colspan="5">
                Loading users...
            </td>

        </tr>

    `;


    try {

        const data =
            await apiRequest(
                "/api/admin/users"
            );


        const users =
            data.users || [];


        if (!users.length) {

            table.innerHTML = `

                <tr>

                    <td colspan="5">
                        No users found.
                    </td>

                </tr>

            `;


            return;

        }


        table.innerHTML =
            users.map(
                user => {

                    const role =
                        user.role === "admin"
                            ? "admin"
                            : "user";


                    return `

                        <tr>

                            <td>
                                ${escapeHTML(
                                    user.id
                                )}
                            </td>


                            <td>
                                ${escapeHTML(
                                    user.name ||
                                    "N/A"
                                )}
                            </td>


                            <td>
                                ${escapeHTML(
                                    user.email ||
                                    "N/A"
                                )}
                            </td>


                            <td>

                                <span
                                    class="role ${role}"
                                >
                                    ${escapeHTML(
                                        user.role ||
                                        "user"
                                    )}
                                </span>

                            </td>


                            <td>

                                ${
                                    user.created_at
                                        ? new Date(
                                            user.created_at
                                          ).toLocaleDateString(
                                            "en-IN"
                                          )
                                        : "N/A"
                                }

                            </td>

                        </tr>

                    `;

                }
            )
            .join("");

    }

    catch (error) {

        console.error(
            "Users error:",
            error
        );


        table.innerHTML = `

            <tr>

                <td colspan="5">

                    Unable to load users.

                </td>

            </tr>

        `;

    }

}


// =====================================================
// LOAD PROPERTIES
// =====================================================

async function loadProperties() {

    const container =
        document.getElementById(
            "adminProperties"
        );


    if (!container) {

        console.error(
            "adminProperties element not found."
        );


        return;

    }


    container.innerHTML = `

        <div class="empty-box">

            Loading properties...

        </div>

    `;


    try {

        const data =
            await apiRequest(
                "/api/admin/properties"
            );


        console.log(
            "Admin properties:",
            data
        );


        const allProperties =
            data.properties || [];


        // =========================================
        // ONLY SHOW PENDING PROPERTIES
        // =========================================

        const pendingProperties =
            allProperties.filter(
                property =>
                    String(
                        property.status ||
                        "pending"
                    ).toLowerCase() ===
                    "pending"
            );


        // =========================================
        // NO PENDING PROPERTY
        // =========================================

        if (
            pendingProperties.length === 0
        ) {

            container.innerHTML = `

                <div class="empty-box">

                    <h3>
                        🎉 No Pending Properties
                    </h3>

                    <p>
                        All submitted properties have been reviewed.
                    </p>

                </div>

            `;


            return;

        }


        // =========================================
        // SHOW PENDING PROPERTIES
        // =========================================

        container.innerHTML =
            pendingProperties
                .map(
                    property => {

                        const image =
                            property.image ||
                            "";


                        return `

                            <div
                                class="admin-property-card"
                                id="property-${property.id}"
                            >

                                <div
                                    class="property-info"
                                >

                                    <h3>
                                        ${escapeHTML(
                                            property.title ||
                                            "Property"
                                        )}
                                    </h3>


                                    <p>

                                        <strong>
                                            Property ID:
                                        </strong>

                                        ${escapeHTML(
                                            property.id
                                        )}

                                    </p>


                                    <p>

                                        <strong>
                                            Type:
                                        </strong>

                                        ${escapeHTML(
                                            property.type ||
                                            "N/A"
                                        )}

                                    </p>


                                    <p>

                                        <strong>
                                            Purpose:
                                        </strong>

                                        ${escapeHTML(
                                            property.purpose ||
                                            "N/A"
                                        )}

                                    </p>


                                    <p>

                                        <strong>
                                            Location:
                                        </strong>

                                        ${escapeHTML(
                                            property.location ||
                                            "N/A"
                                        )}

                                    </p>


                                    <p>

                                        <strong>
                                            Price:
                                        </strong>

                                        ₹${Number(
                                            property.price || 0
                                        ).toLocaleString(
                                            "en-IN"
                                        )}

                                    </p>


                                    <p>

                                        <strong>
                                            Owner:
                                        </strong>

                                        ${escapeHTML(
                                            property.owner_name ||
                                            "N/A"
                                        )}

                                    </p>


                                    <p>

                                        <strong>
                                            Phone:
                                        </strong>

                                        ${escapeHTML(
                                            property.owner_phone ||
                                            "N/A"
                                        )}

                                    </p>


                                    ${
                                        image
                                            ? `

                                                <p>

                                                    <strong>
                                                        Image:
                                                    </strong>

                                                    Available

                                                </p>

                                            `
                                            : ""
                                    }


                                    <span
                                        class="status pending"
                                    >
                                        PENDING
                                    </span>

                                </div>


                                <div
                                    class="property-actions"
                                >

                                    <button
                                        type="button"
                                        class="approve-btn"
                                        onclick="approveProperty(${Number(
                                            property.id
                                        )})"
                                    >
                                        ✓ Approve
                                    </button>


                                    <button
                                        type="button"
                                        class="reject-btn"
                                        onclick="rejectProperty(${Number(
                                            property.id
                                        )})"
                                    >
                                        ✕ Reject
                                    </button>


                                    <button
                                        type="button"
                                        class="delete-btn"
                                        onclick="deleteProperty(${Number(
                                            property.id
                                        )})"
                                    >
                                        🗑 Delete
                                    </button>

                                </div>

                            </div>

                        `;

                    }
                )
                .join("");

    }

    catch (error) {

        console.error(
            "Properties error:",
            error
        );


        container.innerHTML = `

            <div class="empty-box">

                <h3>
                    Unable to load properties
                </h3>

                <p>
                    ${escapeHTML(
                        error.message ||
                        "Server connection failed."
                    )}
                </p>

            </div>

        `;

    }

}


// =====================================================
// APPROVE PROPERTY
// =====================================================

async function approveProperty(
    propertyId
) {

    console.log(
        "Approve clicked:",
        propertyId
    );


    if (!propertyId) {

        alert(
            "Invalid property ID."
        );

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to approve this property?"
        );


    if (!confirmed) {

        return;

    }


    try {

        showStatus(
            "Approving property...",
            "success"
        );


        const data =
            await apiRequest(
                `/api/admin/properties/${propertyId}/approve`,
                {
                    method: "PUT"
                }
            );


        console.log(
            "Approve response:",
            data
        );


        alert(
            data.message ||
            "Property approved successfully."
        );


        // =========================================
        // REFRESH EVERYTHING
        // =========================================

        await loadStats();

        await loadProperties();


        showStatus(
            "Property approved successfully. It is now live on the website.",
            "success"
        );

    }

    catch (error) {

        console.error(
            "Approve property error:",
            error
        );


        alert(
            error.message ||
            "Unable to approve property."
        );


        showStatus(
            error.message ||
            "Unable to approve property.",
            "error"
        );

    }

}


// =====================================================
// REJECT PROPERTY
// =====================================================

async function rejectProperty(
    propertyId
) {

    if (!propertyId) {

        alert(
            "Invalid property ID."
        );

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to reject this property?"
        );


    if (!confirmed) {

        return;

    }


    try {

        showStatus(
            "Rejecting property...",
            "success"
        );


        const data =
            await apiRequest(
                `/api/admin/properties/${propertyId}/reject`,
                {
                    method: "PUT"
                }
            );


        alert(
            data.message ||
            "Property rejected successfully."
        );


        await loadStats();

        await loadProperties();


        showStatus(
            "Property rejected successfully.",
            "success"
        );

    }

    catch (error) {

        console.error(
            "Reject error:",
            error
        );


        alert(
            error.message ||
            "Unable to reject property."
        );


        showStatus(
            error.message ||
            "Unable to reject property.",
            "error"
        );

    }

}


// =====================================================
// DELETE PROPERTY
// =====================================================

async function deleteProperty(
    propertyId
) {

    if (!propertyId) {

        alert(
            "Invalid property ID."
        );

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to delete this property?"
        );


    if (!confirmed) {

        return;

    }


    try {

        const data =
            await apiRequest(
                `/api/admin/properties/${propertyId}`,
                {
                    method: "DELETE"
                }
            );


        alert(
            data.message ||
            "Property deleted successfully."
        );


        await loadStats();

        await loadProperties();


        showStatus(
            "Property deleted successfully.",
            "success"
        );

    }

    catch (error) {

        console.error(
            "Delete error:",
            error
        );


        alert(
            error.message ||
            "Unable to delete property."
        );

    }

}


// =====================================================
// LOGOUT
// =====================================================

async function logout() {

    try {

        await fetch(
            "/api/logout",
            {
                method: "POST",
                credentials: "include"
            }
        );

    }

    catch (error) {

        console.error(
            "Logout error:",
            error
        );

    }


    window.location.href =
        "../login.html";

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(
    value
) {

    return String(
        value ?? ""
    )

    .replace(
        /&/g,
        "&amp;"
    )

    .replace(
        /</g,
        "&lt;"
    )

    .replace(
        />/g,
        "&gt;"
    )

    .replace(
        /"/g,
        "&quot;"
    )

    .replace(
        /'/g,
        "&#039;"
    );

}


// =====================================================
// LOAD DASHBOARD
// =====================================================

async function loadDashboard() {

    console.log(
        "Loading Estate-Ease admin dashboard..."
    );


    const loggedIn =
        await checkAdminLogin();


    if (!loggedIn) {

        return;

    }


    await loadAdminName();

    await loadStats();

    await loadUsers();

    await loadProperties();

}


// =====================================================
// START DASHBOARD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadDashboard();

    }
);