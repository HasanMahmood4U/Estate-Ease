 /* =========================
       IMAGE SLIDER
  ========================= */
 let galleryIndex = 0;

    const galleryImages =
        document.querySelectorAll(".gallery-image");

    const galleryDots =
        document.querySelectorAll(".gallery-dot");


    function showGallery(index) {

        galleryImages.forEach(function(image) {
            image.classList.remove("active");
        });

        galleryDots.forEach(function(dot) {
            dot.classList.remove("active");
        });


        galleryIndex = index;


        galleryImages[galleryIndex]
            .classList.add("active");

        galleryDots[galleryIndex]
            .classList.add("active");

    }


    function changeGallery(direction) {

        galleryIndex += direction;


        if (galleryIndex >= galleryImages.length) {
            galleryIndex = 0;
        }


        if (galleryIndex < 0) {
            galleryIndex =
                galleryImages.length - 1;
        }


        showGallery(galleryIndex);

    }



    /* AUTO IMAGE SLIDE */

    setInterval(function() {

        changeGallery(1);

    }, 5000);



    /* =========================
       BUY MODAL
    ========================= */

    function openBuyModal() {

        document.getElementById("buyModal")
            .style.display = "flex";

    }


    function closeBuyModal() {

        document.getElementById("buyModal")
            .style.display = "none";

    }



    /* =========================
       PAYMENT
    ========================= */

    function proceedPayment() {

        const name =
            document.getElementById("buyerName").value;

        const phone =
            document.getElementById("buyerPhone").value;

        const date =
            document.getElementById("bookingDate").value;

        const payment =
            document.getElementById("paymentMethod").value;


        if (!name || !phone || !date || !payment) {

            alert("Please fill all details.");

            return;

        }


        alert(
            "Booking request submitted successfully!"
        );

        closeBuyModal();

    }