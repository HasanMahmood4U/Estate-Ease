 /* ================= VILLA DATA ================= */

const villas = [

    {
        title: "Green Valley Villa",
        location: "Chandapura, Bangalore",
        beds: 3,
        baths: 3,
        area: "2,040",
        price: "₹97 Lakhs",

        ownerName: "Rahul Sharma",
        ownerPhone: "9876543210",

        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Royal Garden Villa",
        location: "Whitefield, Bangalore",
        beds: 4,
        baths: 3,
        area: "2,500",
        price: "₹1.35 Crore",

        ownerName: "Arjun Kumar",
        ownerPhone: "9845012345",

        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Skyline Luxury Villa",
        location: "Indiranagar, Bangalore",
        beds: 4,
        baths: 4,
        area: "3,000",
        price: "₹2.10 Crore",

        ownerName: "Vikram Reddy",
        ownerPhone: "9987654321",

        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Modern Lakeview Villa",
        location: "Sarjapur Road, Bangalore",
        beds: 3,
        baths: 3,
        area: "1,850",
        price: "₹1.05 Crore",

        ownerName: "Suresh Kumar",
        ownerPhone: "9900123456",

        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Royal Palm Villa",
        location: "Electronic City, Bangalore",
        beds: 3,
        baths: 3,
        area: "2,100",
        price: "₹1.25 Crore",

        ownerName: "Karan Mehta",
        ownerPhone: "9876123456",

        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Greenwood Villa",
        location: "Devanahalli, Bangalore",
        beds: 3,
        baths: 2,
        area: "1,700",
        price: "₹88 Lakhs",

        ownerName: "Priya Nair",
        ownerPhone: "9887654321",

        images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Premium Garden Villa",
        location: "Hosur Road, Bangalore",
        beds: 4,
        baths: 3,
        area: "2,300",
        price: "₹1.15 Crore",

        ownerName: "Amit Verma",
        ownerPhone: "9812345678",

        images: [
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
        ]
    },


    {
        title: "Urban Luxury Villa",
        location: "Koramangala, Bangalore",
        beds: 4,
        baths: 4,
        area: "2,800",
        price: "₹1.75 Crore",

        ownerName: "Mohammed Sameer",
        ownerPhone: "9966332211",

        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
        ]
    }

];



/* ================= CARD SLIDERS ================= */

const cardImages = villas.map(villa => villa.images);

const cardIndex = [
    0,0,0,0,0,0,0,0
];


function changeCardImage(cardNumber, direction) {

    const index = cardNumber - 1;

    cardIndex[index] += direction;

    if (cardIndex[index] >= cardImages[index].length) {
        cardIndex[index] = 0;
    }

    if (cardIndex[index] < 0) {
        cardIndex[index] = cardImages[index].length - 1;
    }

    document.getElementById("img-" + cardNumber).src =
        cardImages[index][cardIndex[index]];

}



/* ================= POPUP ================= */

let currentPopupVilla = 0;

let currentPopupImage = 0;


function openVilla(index) {

    currentPopupVilla = index;

    currentPopupImage = 0;

    const villa = villas[index];


    /* TITLE */

    document.getElementById("popupTitle").innerText =
        villa.title;


    /* LOCATION */

    document.getElementById("popupLocation").innerText =
        "📍 " + villa.location;


    /* DETAILS */

    document.getElementById("popupDetails").innerHTML = `

        <span>
            🛏 ${villa.beds} Beds
        </span>

        <span>
            🚿 ${villa.baths} Baths
        </span>

        <span>
            📐 ${villa.area} sqft
        </span>

    `;


    /* PRICE */

    document.getElementById("popupPrice").innerText =
        villa.price;


    /* IMAGE */

    document.getElementById("popupImage").src =
        villa.images[0];


    /* ================= OWNER INFORMATION ================= */

    document.getElementById("popupOwnerName").innerText =
        villa.ownerName;


    document.getElementById("popupOwnerPhone").innerText =
        villa.ownerPhone;


    /* ================= CALL BUTTON ================= */

    document.getElementById("callOwnerBtn").href =
        "tel:" + villa.ownerPhone;


    /* SHOW POPUP */

    document.getElementById("propertyModal").style.display =
        "block";

    document.body.style.overflow = "hidden";

}



/* ================= POPUP IMAGE SLIDER ================= */

function changePopupImage(direction) {

    const villa = villas[currentPopupVilla];

    currentPopupImage += direction;

    if (currentPopupImage >= villa.images.length) {
        currentPopupImage = 0;
    }

    if (currentPopupImage < 0) {
        currentPopupImage = villa.images.length - 1;
    }

    document.getElementById("popupImage").src =
        villa.images[currentPopupImage];

}



/* ================= CLOSE POPUP ================= */

function closeVilla() {

    document.getElementById("propertyModal").style.display =
        "none";

    document.body.style.overflow = "auto";

}



/* ================= SEARCH ================= */

function searchVillas() {

    const searchValue =
        document
        .getElementById("villaSearch")
        .value
        .toLowerCase()
        .trim();

    const cards =
        document.querySelectorAll(".property-card");

    let found = 0;

    cards.forEach(card => {

        const text =
            card.dataset.search.toLowerCase();

        if (
            searchValue === "" ||
            text.includes(searchValue)
        ) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("noResult").style.display =
        found === 0 ? "block" : "none";

}



/* ================= URL SEARCH ================= */

const params =
    new URLSearchParams(window.location.search);

const searchFromHome =
    params.get("search");


if (searchFromHome) {

    document.getElementById("villaSearch").value =
        searchFromHome;

    searchVillas();

}



/* ================= BOOKING ================= */

function bookVilla() {

    const date =
        document.getElementById("bookingDate").value;

    if (date === "") {

        alert("Please select a booking date.");

        return;

    }

    alert(
        "Booking request submitted for " +
        date
    );

}



/* ================= CLOSE POPUP OUTSIDE ================= */

document
    .getElementById("propertyModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeVilla();

        }

    }); 