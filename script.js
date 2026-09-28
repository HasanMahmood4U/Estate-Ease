function selectCategory(category) {
    if (category === "Apartment") {
        window.location.href = "apartments.html";
    }
}

// PROPERTY IMAGES
let propertyImages = [];
let currentImage = 0;


// OPEN POPUP
function openProperty(
    title,
    location,
    bhk,
    bath,
    area,
    price,
    images
) {

    document.querySelector(".property-info h2").innerText = title;

    document.querySelector(".location").innerText =
        "📍 " + location;

    document.querySelector(".property-details").innerHTML = `
        <span>🛏 ${bhk}</span>
        <span>🚿 ${bath}</span>
        <span>📐 ${area}</span>
    `;

    document.querySelector(".modal-price").innerText = price;

    propertyImages = images;

    currentImage = 0;

    document.getElementById("propertyImage").src =
        propertyImages[0];

    document.getElementById("propertyModal").style.display =
        "block";
}


// CLOSE POPUP

function closeProperty() {

    document.getElementById("propertyModal").style.display = "none";

}


// CHANGE IMAGE

function changeImage(direction) {

    currentImage =
        currentImage + direction;

    if (currentImage >= propertyImages.length) {
        currentImage = 0;
    }

    if (currentImage < 0) {
        currentImage = propertyImages.length - 1;
    }

    document.getElementById("propertyImage").src =
        propertyImages[currentImage];

}


// BOOK PROPERTY

function bookProperty() {

    const date =
        document.getElementById("bookingDate").value;

    const payment =
        document.getElementById("paymentMethod").value;


    if (date === "") {

        alert("Please select booking date.");
        return;

    }


    if (payment === "") {

        alert("Please select payment method.");
        return;

    }


    alert(
        "Booking request submitted successfully!"
    );

}