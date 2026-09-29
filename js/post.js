 /* =========================================
           IMAGE PREVIEW
 ========================================= */

 function previewImage(input, previewId) {


            const preview =
                document.getElementById(previewId);


            if (
                input.files &&
                input.files[0]
            ) {


                const reader =
                    new FileReader();


                reader.onload =
                    function(event) {

                        preview.src =
                            event.target.result;

                        preview.style.display =
                            "block";

                    };


                reader.readAsDataURL(
                    input.files[0]
                );

            }

        }



        /* =========================================
           PHONE NUMBER VALIDATION
        ========================================= */

        document
            .getElementById("owner_phone")
            .addEventListener(
                "input",
                function() {

                    this.value =
                        this.value.replace(
                            /[^0-9]/g,
                            ""
                        );

                }
            );