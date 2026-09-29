// ==========================================
// IMAGE PREVIEW
// ==========================================

function previewImage(input, previewId) {

    const preview = document.getElementById(previewId);

    if (!input.files || !input.files[0]) {
        preview.src = "";
        preview.style.display = "none";
        return;
    }

    const file = input.files[0];

    // Check image type
    if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        input.value = "";
        return;
    }

    // Check size - maximum 5 MB
    if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5 MB.");
        input.value = "";
        preview.src = "";
        preview.style.display = "none";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        preview.src = event.target.result;
        preview.style.display = "block";

    };

    reader.readAsDataURL(file);
}


// ==========================================
// PROPERTY FORM SUBMIT
// ==========================================

document
    .getElementById("propertyForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const form = this;

        const submitButton =
            form.querySelector(".submit-btn");

        // Check login first
        try {

            const meResponse = await fetch("/api/me", {
                credentials: "include"
            });

            if (!meResponse.ok) {

                alert("Please login before posting a property.");

                window.location.href = "/login.html";

                return;
            }

            const meData = await meResponse.json();

            if (!meData.loggedIn) {

                alert("Please login before posting a property.");

                window.location.href = "/login.html";

                return;
            }


            // ==================================
            // CREATE FORM DATA
            // ==================================

            const formData = new FormData(form);


            // ==================================
            // SEND TO SERVER
            // ==================================

            submitButton.disabled = true;

            submitButton.textContent =
                "Posting Property...";


            const response = await fetch(
                "/api/properties",
                {
                    method: "POST",
                    credentials: "include",
                    body: formData
                }
            );


            const data = await response.json();


            // ==================================
            // SERVER ERROR
            // ==================================

            if (!response.ok) {

                alert(
                    data.message ||
                    "Failed to post property."
                );

                submitButton.disabled = false;

                submitButton.textContent =
                    "🏠 Post Property";

                return;
            }


            // ==================================
            // SUCCESS
            // ==================================

            alert(
                "Property submitted successfully!\n\n" +
                "Your property is now waiting for admin approval."
            );


            form.reset();


            const preview =
                document.getElementById("preview");

            if (preview) {

                preview.src = "";

                preview.style.display = "none";

            }


            submitButton.disabled = false;

            submitButton.textContent =
                "🏠 Post Property";


        } catch (error) {

            console.error(
                "Property submission error:",
                error
            );

            alert(
                "Unable to connect to Estate-Ease server."
            );

            submitButton.disabled = false;

            submitButton.textContent =
                "🏠 Post Property";

        }

    });