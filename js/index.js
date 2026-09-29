 let selectedMode = "Buy";


    function changeTab(button, mode) {

        selectedMode = mode;

        document
            .querySelectorAll(".property-tab")
            .forEach(tab => {
                tab.classList.remove("active");
            });

        button.classList.add("active");

        console.log("Selected:", mode);
    }


function searchProperty() {

    const location =
        document.getElementById("location").value.trim();

    const propertyType =
        document.getElementById("propertyType").value;

    if (location === "" && propertyType === "") {

        alert("Please enter a location or select a property type.");

        return;
    }


    /* VILLA SEARCH */

    if (
        propertyType.toLowerCase() === "villa" ||
        location.toLowerCase().includes("villa")
    ) {

        let searchText = location
            .replace(/villa/gi, "")
            .trim();

        window.location.href =
            "villas.html?search=" +
            encodeURIComponent(searchText);

        return;
    }


    /* OTHER PROPERTY TYPES */

    alert(
        "Searching for " +
        selectedMode +
        " properties in " +
        location +
        " - " +
        propertyType
    );

}


    function selectCategory(category) {

        document.getElementById("propertyType").value =
            category === "House"
            ? "Independent House"
            : category;

        window.scrollTo({
            top: 300,
            behavior: "smooth"
        });

    }


    function favorite(element) {

        if (element.innerHTML === "♡") {

            element.innerHTML = "♥";
            element.style.color = "red";

        } else {

            element.innerHTML = "♡";
            element.style.color = "black";

        }

    }
 


let propertyImages = [];
let currentImage = 0;


function openProperty(
    title,
    location,
    beds,
    baths,
    area,
    price,
    images
) {

    // Property title
    document.getElementById("popupTitle").innerText =
        title;


    // Location
    document.getElementById("popupLocation").innerText =
        "📍 " + location;


    // Details
    document.getElementById("popupDetails").innerHTML = `
        <span>🛏 ${beds} Beds</span>
        <span>🚿 ${baths} Baths</span>
        <span>📐 ${area} sqft</span>
    `;


    // Price
    document.getElementById("popupPrice").innerText =
        price;


    // Images
    propertyImages =
        Array.isArray(images)
        ? images
        : [images];


    currentImage = 0;


    // First image
    document.getElementById("propertyImage").src =
        propertyImages[0];


    // Open popup
    document.getElementById("propertyModal").style.display =
        "block";


    // Stop background scrolling
    document.body.style.overflow = "hidden";
}


function changeImage(direction) {

    currentImage += direction;


    if (currentImage >= propertyImages.length) {

        currentImage = 0;

    }


    if (currentImage < 0) {

        currentImage =
            propertyImages.length - 1;

    }


    document.getElementById("propertyImage").src =
        propertyImages[currentImage];

}


function closeProperty() {

    document.getElementById("propertyModal").style.display =
        "none";


    document.body.style.overflow = "auto";

}


function bookProperty() {

    const date =
        document.getElementById("bookingDate").value;


    if (date === "") {

        alert("Please select a booking date.");

        return;

    }


    alert(
        "Property viewing/booking requested for " +
        date
    );

}


function makePayment() {

    alert(
        "Payment page will be connected here."
    );

}


function globalSearch() {

    const location =
        document.getElementById("searchLocation").value.trim();

    if (location === "") {

        alert("Please enter a city or locality.");

        return;
    }

    // Open the common search results page
    window.location.href =
        "search-results.html?location=" +
        encodeURIComponent(location);
}

/* =====================================
   ESTATE-EASE PROPERTY SLIDER
===================================== */

let estateSlideIndex = 0;

const estateSlides =
    document.querySelectorAll(".estate-slide");

const estateDots =
    document.querySelectorAll(".estate-dot");


function showEstateSlide(index) {

    estateSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    estateDots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    estateSlideIndex = index;


    estateSlides[estateSlideIndex]
        .classList.add("active");

    estateDots[estateSlideIndex]
        .classList.add("active");
}


function changeEstateSlide(direction) {

    estateSlideIndex += direction;


    if (estateSlideIndex >= estateSlides.length) {
        estateSlideIndex = 0;
    }


    if (estateSlideIndex < 0) {
        estateSlideIndex =
            estateSlides.length - 1;
    }


    showEstateSlide(estateSlideIndex);
}


/* AUTO SLIDE EVERY 5 SECONDS */

setInterval(function() {

    changeEstateSlide(1);

}, 5000) 