// ==========================================
// Estate-Ease Admin Dashboard
// ==========================================


// ==========================================
// LOAD DASHBOARD
// ==========================================

async function loadDashboard() {

    try {

        // Check admin session
        const meResponse = await fetch("/api/admin/me", {
            credentials: "include"
        });

        if (!meResponse.ok) {

            window.location.href = "../login.html";

            return;
        }

        const meData = await meResponse.json();

        document.getElementById("adminName").textContent =
            meData.user.name;


        // Load statistics
        const statsResponse = await fetch("/api/admin/stats", {
            credentials: "include"
        });

        if (!statsResponse.ok) {

            showStatus(
                "Unable to load dashboard statistics.",
                "error"
            );

            return;
        }

        const stats = await statsResponse.json();


        document.getElementById("totalUsers").textContent =
            stats.totalUsers;

        document.getElementById("totalProperties").textContent =
            stats.totalProperties;

        document.getElementById("pendingProperties").textContent =
            stats.pendingProperties;

        document.getElementById("approvedProperties").textContent =
            stats.approvedProperties;


        // Load users
        await loadUsers();

    } catch (error) {

        console.error("Dashboard error:", error);

        showStatus(
            "Unable to connect to Estate-Ease server.",
            "error"
        );
    }
}


// ==========================================
// LOAD USERS
// ==========================================

async function loadUsers() {

    const table = document.getElementById("usersTable");

    table.innerHTML = `
        <tr>
            <td colspan="5">
                Loading users...
            </td>
        </tr>
    `;


    try {

        const response = await fetch("/api/admin/users", {
            credentials: "include"
        });


        if (!response.ok) {

            if (response.status === 401 ||
                response.status === 403) {

                window.location.href = "../login.html";

                return;
            }

            throw new Error("Unable to load users");
        }


        const data = await response.json();


        if (!data.users || data.users.length === 0) {

            table.innerHTML = `
                <tr>
                    <td colspan="5">
                        No users found.
                    </td>
                </tr>
            `;

            return;
        }


        table.innerHTML = "";


        data.users.forEach(user => {

            const row = document.createElement("tr");

            const roleClass =
                user.role === "admin"
                    ? "admin"
                    : "user";


            row.innerHTML = `

                <td>${escapeHTML(String(user.id))}</td>

                <td>${escapeHTML(user.name)}</td>

                <td>${escapeHTML(user.email)}</td>

                <td>
                    <span class="role ${roleClass}">
                        ${escapeHTML(user.role)}
                    </span>
                </td>

                <td>
                    ${formatDate(user.created_at)}
                </td>

            `;


            table.appendChild(row);

        });


    } catch (error) {

        console.error("Users error:", error);

        table.innerHTML = `
            <tr>
                <td colspan="5">
                    Unable to load users.
                </td>
            </tr>
        `;
    }
}


// ==========================================
// LOGOUT
// ==========================================

async function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (!confirmLogout) {
        return;
    }


    try {

        const response = await fetch("/api/logout", {

            method: "POST",

            credentials: "include"

        });


        if (response.ok) {

            window.location.href = "../login.html";

        } else {

            alert("Logout failed.");

        }

    } catch (error) {

        console.error("Logout error:", error);

        alert("Unable to logout.");
    }
}


// ==========================================
// STATUS MESSAGE
// ==========================================

function showStatus(message, type) {

    const box = document.getElementById("statusBox");

    box.textContent = message;

    box.className = "status-box " + type;

}


// ==========================================
// DATE FORMAT
// ==========================================

function formatDate(dateString) {

    if (!dateString) {
        return "-";
    }


    const date = new Date(dateString);


    if (isNaN(date.getTime())) {
        return "-";
    }


    return date.toLocaleDateString("en-IN", {

        day: "2-digit",

        month: "short",

        year: "numeric"

    });
}


// ==========================================
// SECURITY
// Escape HTML before displaying database data
// ==========================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// START DASHBOARD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    loadDashboard
);