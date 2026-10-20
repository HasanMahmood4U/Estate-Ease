// ============================================================
// ESTATE-EASE LOGIN
// ============================================================


// ============================================================
// CHECK IF ALREADY LOGGED IN
// ============================================================

async function checkExistingLogin() {

    try {

        const response =
            await fetch(
                "/api/me",
                {
                    method: "GET",
                    credentials: "include"
                }
            );


        const data =
            await response.json();


        // ====================================================
        // ALREADY LOGGED IN
        // ====================================================

        if (
            response.ok &&
            data.loggedIn &&
            data.user
        ) {


            // ------------------------------------------------
            // ADMIN
            // ------------------------------------------------

            if (
                data.user.role === "admin"
            ) {

                window.location.href =
                    "/admin/dashboard.html";

                return;

            }


            // ------------------------------------------------
            // NORMAL USER
            // ------------------------------------------------

            window.location.href =
                "index.html";

        }

    }

    catch (error) {

        console.log(
            "No active login session."
        );

    }

}


// ============================================================
// RUN LOGIN CHECK
// ============================================================

checkExistingLogin();


// ============================================================
// LOGIN FUNCTION
// ============================================================

async function login(event) {

    event.preventDefault();


    // ========================================================
    // GET ELEMENTS
    // ========================================================

    const emailInput =
        document.getElementById(
            "email"
        );

    const passwordInput =
        document.getElementById(
            "password"
        );

    const rememberInput =
        document.getElementById(
            "remember"
        );

    const loginButton =
        document.getElementById(
            "loginButton"
        );

    const loginMessage =
        document.getElementById(
            "loginMessage"
        );


    // ========================================================
    // GET VALUES
    // ========================================================

    const email =
        emailInput.value
            .trim()
            .toLowerCase();


    const password =
        passwordInput.value;


    const remember =
        rememberInput
            ? rememberInput.checked
            : false;


    // ========================================================
    // BASIC VALIDATION
    // ========================================================

    if (!email) {

        showMessage(
            "Please enter your email.",
            "error"
        );

        emailInput.focus();

        return;

    }


    if (!password) {

        showMessage(
            "Please enter your password.",
            "error"
        );

        passwordInput.focus();

        return;

    }


    if (
        password.length < 6
    ) {

        showMessage(
            "Password must be at least 6 characters.",
            "error"
        );

        passwordInput.focus();

        return;

    }


    // ========================================================
    // LOADING STATE
    // ========================================================

    loginButton.disabled = true;

    loginButton.textContent =
        "Please wait...";


    if (loginMessage) {

        loginMessage.textContent = "";

        loginMessage.className =
            "login-message";

    }


    // ========================================================
    // SEND LOGIN REQUEST
    // ========================================================

    try {

        const response =
            await fetch(
                "/api/login",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    credentials:
                        "include",

                    body:
                        JSON.stringify({

                            email:
                                email,

                            password:
                                password,

                            remember:
                                remember

                        })

                }
            );


        // ====================================================
        // READ SERVER RESPONSE
        // ====================================================

        const data =
            await response.json();


        // ====================================================
        // LOGIN SUCCESS
        // ====================================================

        if (
            response.ok &&
            data.success
        ) {


            // =================================================
            // NEW ACCOUNT
            // =================================================

            if (
                data.created
            ) {

                showMessage(

                    "Account created successfully. Logging you in...",

                    "success"

                );

            }

            else {

                showMessage(

                    "Login successful. Redirecting...",

                    "success"

                );

            }


            // =================================================
            // REDIRECT
            // =================================================

            setTimeout(
                () => {


                    // =========================================
                    // CHECK USER DATA
                    // =========================================

                    if (
                        !data.user
                    ) {

                        console.error(
                            "User information missing from login response."
                        );

                        window.location.href =
                            "index.html";

                        return;

                    }


                    // =========================================
                    // ADMIN USER
                    // =========================================

                    if (
                        data.user.role === "admin"
                    ) {

                        window.location.href =
                            "/admin/dashboard.html";

                        return;

                    }


                    // =========================================
                    // NORMAL USER
                    // =========================================

                    const returnPage =
                        sessionStorage.getItem(
                            "returnAfterLogin"
                        );


                    if (
                        returnPage
                    ) {

                        sessionStorage.removeItem(
                            "returnAfterLogin"
                        );


                        window.location.href =
                            returnPage;

                        return;

                    }


                    // =========================================
                    // NORMAL HOME PAGE
                    // =========================================

                    window.location.href =
                        "index.html";

                },

                500

            );


            return;

        }


        // ====================================================
        // LOGIN FAILED
        // ====================================================

        showMessage(

            data.message ||
            "Invalid email or password.",

            "error"

        );

    }

    catch (error) {

        console.error(
            "Login error:",
            error
        );


        showMessage(

            "Unable to connect to server. Please try again.",

            "error"

        );

    }


    // ========================================================
    // RESTORE BUTTON
    // ========================================================

    loginButton.disabled = false;

    loginButton.textContent =
        "Login";

}


// ============================================================
// SHOW MESSAGE
// ============================================================

function showMessage(
    message,
    type
) {

    const loginMessage =
        document.getElementById(
            "loginMessage"
        );


    if (!loginMessage) {

        return;

    }


    loginMessage.textContent =
        message;


    loginMessage.className =
        "login-message " +
        type;

}