async function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const loginType = document.getElementById("loginType").value;


    if (!email || !password) {

        alert("Please enter email and password.");

        return;
    }


    try {

        const response = await fetch("/api/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            credentials: "include",

            body: JSON.stringify({

                email: email,

                password: password

            })

        });


        const data = await response.json();


        if (!response.ok) {

            alert(data.message || "Login failed.");

            return;
        }


        /*
        =====================================
        CHECK USER ROLE
        =====================================
        */

        if (loginType === "admin") {

            if (data.user.role !== "admin") {

                alert("You do not have admin access.");

                // Logout the normal user session
                await fetch("/api/logout", {
                    method: "POST",
                    credentials: "include"
                });

                return;
            }


            alert("Admin login successful!");

            window.location.href = "/admin/dashboard.html";

        }


        else {

            if (data.user.role !== "user") {

                alert("Please use the Admin login option.");

                await fetch("/api/logout", {
                    method: "POST",
                    credentials: "include"
                });

                return;
            }


            alert("Login successful!");

            window.location.href = "/index.html";

        }


    } catch (error) {

        console.error("Login error:", error);

        alert(
            "Unable to connect to Estate-Ease server."
        );

    }

}