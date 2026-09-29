/* =====================================================
   ESTATE-EASE INDEX PAGE
===================================================== */


/* =====================================================
   FEATURED PROPERTY DATA
===================================================== */

const featuredProperties = [

    /* ================= PROPERTY 1 ================= */

    {
        name: "Premium 2 BHK Home",
        brand: "Estate-Ease Premium",
        type: "Apartment",
        purpose: "FOR RENT",
        location: "HSR Layout, Bangalore",
        beds: 2,
        baths: 2,
        area: "1,200 sqft",
        price: "₹35,000/month",

        owner: "Rahul Sharma",
        phone: "9876543210",

        description:
            "A modern 2 BHK home located in HSR Layout with excellent connectivity, modern interiors and convenient access to shops, restaurants and public transport.",

        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 2 ================= */

    {
        name: "Royal Heights",
        brand: "Royal Heights",
        type: "Apartment",
        purpose: "FOR SALE",
        location: "Kochi, Kerala",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        price: "₹65 Lakhs",

        owner: "Arjun Kumar",
        phone: "9845012345",

        description:
            "Spacious 3 BHK apartment in Kochi with modern interiors, comfortable bedrooms and excellent city connectivity.",

        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 3 ================= */

    {
        name: "Green Valley Villa",
        brand: "Green Valley",
        type: "Villa",
        purpose: "FOR SALE",
        location: "Chandapura, Bangalore",
        beds: 3,
        baths: 3,
        area: "2,040 sqft",
        price: "₹97 Lakhs",

        owner: "Suresh Kumar",
        phone: "9900123456",

        description:
            "Beautiful independent villa surrounded by greenery with spacious rooms, private outdoor space and a peaceful neighbourhood.",

        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 4 ================= */

    {
        name: "Royal Garden Residence",
        brand: "Royal Garden",
        type: "House",
        purpose: "FOR SALE",
        location: "Whitefield, Bangalore",
        beds: 4,
        baths: 3,
        area: "2,500 sqft",
        price: "₹1.35 Crore",

        owner: "Vikram Reddy",
        phone: "9987654321",

        description:
            "Premium family residence in Whitefield featuring large bedrooms, modern bathrooms and spacious living areas.",

        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 5 ================= */

    {
        name: "Skyline Penthouse",
        brand: "Skyline Residences",
        type: "Apartment",
        purpose: "FOR SALE",
        location: "Indiranagar, Bangalore",
        beds: 3,
        baths: 3,
        area: "2,200 sqft",
        price: "₹2.10 Crore",

        owner: "Priya Nair",
        phone: "9887654321",

        description:
            "Luxury penthouse designed for premium urban living with spacious interiors and excellent access to central Bangalore.",

        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 6 ================= */

    {
        name: "Modern Lakeview House",
        brand: "Lakeview Homes",
        type: "House",
        purpose: "FOR SALE",
        location: "Sarjapur Road, Bangalore",
        beds: 3,
        baths: 2,
        area: "1,850 sqft",
        price: "₹1.05 Crore",

        owner: "Karan Mehta",
        phone: "9876123456",

        description:
            "Modern independent home near Sarjapur Road with comfortable rooms, peaceful surroundings and convenient city access.",

        images: [
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 7 ================= */

    {
        name: "Urban Luxury Apartment",
        brand: "Urban Nest",
        type: "Apartment",
        purpose: "FOR RENT",
        location: "Koramangala, Bangalore",
        beds: 2,
        baths: 2,
        area: "1,450 sqft",
        price: "₹55,000/month",

        owner: "Amit Verma",
        phone: "9812345678",

        description:
            "Stylish 2 BHK apartment in Koramangala suitable for professionals and families looking for premium urban living.",

        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 8 ================= */

    {
        name: "City View Apartments",
        brand: "City View",
        type: "Apartment",
        purpose: "FOR SALE",
        location: "Bangalore, Karnataka",
        beds: 2,
        baths: 2,
        area: "1,100 sqft",
        price: "₹50 Lakhs",

        owner: "Mohammed Sameer",
        phone: "9966332211",

        description:
            "Well-designed 2 BHK apartment with city views, modern amenities and easy access to major Bangalore locations.",

        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 9 ================= */

    {
        name: "Palm Grove Villa",
        brand: "Palm Grove Estates",
        type: "Villa",
        purpose: "FOR SALE",
        location: "Kakkanad, Kochi",
        beds: 4,
        baths: 4,
        area: "2,800 sqft",
        price: "₹1.65 Crore",

        owner: "Nikhil Menon",
        phone: "9847123456",

        description:
            "Elegant family villa in Kakkanad featuring spacious interiors, landscaped surroundings and premium finishing.",

        images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 10 ================= */

    {
        name: "Green Horizon Plot",
        brand: "Green Horizon",
        type: "Plot",
        purpose: "FOR SALE",
        location: "Devanahalli, Bangalore",
        beds: 0,
        baths: 0,
        area: "2,400 sqft",
        price: "₹42 Lakhs",

        owner: "Rohit Shetty",
        phone: "9876541230",

        description:
            "Residential plot in a developing locality near Devanahalli, suitable for building a future family home.",

        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 11 ================= */

    {
        name: "Marina Business Hub",
        brand: "Marina Business Hub",
        type: "Commercial",
        purpose: "FOR RENT",
        location: "Marine Drive, Kochi",
        beds: 0,
        baths: 2,
        area: "2,100 sqft",
        price: "₹1.20 Lakh/month",

        owner: "Joseph Mathew",
        phone: "9847012345",

        description:
            "Prime commercial office space near Marine Drive suitable for startups, companies and professional offices.",

        images: [
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 12 ================= */

    {
        name: "Orchid Residency",
        brand: "Orchid Homes",
        type: "Apartment",
        purpose: "FOR SALE",
        location: "Electronic City, Bangalore",
        beds: 3,
        baths: 2,
        area: "1,650 sqft",
        price: "₹78 Lakhs",

        owner: "Sneha Rao",
        phone: "9988776655",

        description:
            "Contemporary apartment in Electronic City with spacious bedrooms, modern interiors and convenient connectivity.",

        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 13 ================= */

    {
        name: "Royal Palm Residence",
        brand: "Royal Palm",
        type: "House",
        purpose: "FOR SALE",
        location: "Kottayam, Kerala",
        beds: 4,
        baths: 3,
        area: "2,600 sqft",
        price: "₹92 Lakhs",

        owner: "Faisal Rahman",
        phone: "9895123456",

        description:
            "Large independent residence in a peaceful Kerala neighbourhood with spacious rooms and a private outdoor area.",

        images: [
            "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 14 ================= */

    {
        name: "Metro Square Office",
        brand: "Metro Square",
        type: "Commercial",
        purpose: "FOR SALE",
        location: "MG Road, Bangalore",
        beds: 0,
        baths: 2,
        area: "1,800 sqft",
        price: "₹2.25 Crore",

        owner: "Aditya Kapoor",
        phone: "9823456789",

        description:
            "Premium commercial office space located in a high-demand business district with excellent road connectivity.",

        images: [
            "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 15 ================= */

    {
        name: "Bluewater Beach Villa",
        brand: "Bluewater Estates",
        type: "Villa",
        purpose: "FOR SALE",
        location: "Alappuzha, Kerala",
        beds: 4,
        baths: 4,
        area: "3,100 sqft",
        price: "₹1.90 Crore",

        owner: "Anand Krishnan",
        phone: "9846012345",

        description:
            "Premium villa inspired by Kerala coastal architecture with spacious living areas and peaceful surroundings.",

        images: [
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
        ]
    },


    /* ================= PROPERTY 16 ================= */

    {
        name: "Sunrise Garden Plot",
        brand: "Sunrise Properties",
        type: "Plot",
        purpose: "FOR SALE",
        location: "Mysore Road, Bangalore",
        beds: 0,
        baths: 0,
        area: "1,800 sqft",
        price: "₹32 Lakhs",

        owner: "Manoj Kumar",
        phone: "9912345678",

        description:
            "Residential plot located in a growing Bangalore corridor, suitable for an independent house or investment.",

        images: [
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
        ]
    }

];


/* =====================================================
   CURRENT PROPERTY SLIDER
===================================================== */

let currentPropertyImages = [];

let currentImageIndex = 0;


/* =====================================================
   RENDER FEATURED PROPERTIES
===================================================== */

function renderFeaturedProperties(
    list = featuredProperties
) {

    const grid =
        document.getElementById(
            "featuredPropertyGrid"
        );

    if (!grid) return;


    grid.innerHTML = "";


    if (!list.length) {

        grid.innerHTML = `

            <div class="no-featured-result">

                <h3>
                    No properties found
                </h3>

                <p>
                    Try another property name,
                    brand or location.
                </p>

            </div>

        `;

        return;
    }


    list.forEach(
        (property) => {

            const originalIndex =
                featuredProperties.indexOf(
                    property
                );


            const card =
                document.createElement("div");


            card.className =
                "featured-property-card";


            card.onclick =
                function () {

                    openFeaturedProperty(
                        originalIndex
                    );

                };


            card.innerHTML = `

                <div class="featured-image">

                    <img
                        src="${property.images[0]}"
                        alt="${property.name}"
                    >


                    <span class="featured-tag">
                        ${property.purpose}
                    </span>


                    <div
                        class="featured-heart"
                        onclick="
                            event.stopPropagation();
                            toggleFavorite(this)
                        "
                    >
                        ♡
                    </div>

                </div>


                <div class="featured-info">


                    <h3>
                        ${property.name}
                    </h3>


                    <div class="featured-location">

                        📍 ${property.location}

                    </div>


                    <div class="featured-details">


                        ${
                            property.beds > 0
                            ?
                            `<span>
                                🛏 ${property.beds} Beds
                            </span>`
                            :
                            ""
                        }


                        ${
                            property.baths > 0
                            ?
                            `<span>
                                🚿 ${property.baths} Baths
                            </span>`
                            :
                            ""
                        }


                        <span>
                            📐 ${property.area}
                        </span>

                    </div>


                    <div class="featured-owner">

                        👤

                        <span>
                            Owner: ${property.owner}
                        </span>

                    </div>


                    <div class="featured-bottom">


                        <div class="featured-price">

                            ${property.price}

                        </div>


                        <button
                            type="button"
                            class="featured-view"
                            onclick="
                                event.stopPropagation();
                                openFeaturedProperty(${originalIndex})
                            "
                        >

                            View Details →

                        </button>

                    </div>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


/* =====================================================
   OPEN FEATURED PROPERTY
===================================================== */

function openFeaturedProperty(index) {

    const property =
        featuredProperties[index];

    if (!property) return;


    currentPropertyImages =
        property.images;

    currentImageIndex = 0;


    const image =
        document.getElementById(
            "propertyImage"
        );

    const title =
        document.getElementById(
            "popupTitle"
        );

    const location =
        document.getElementById(
            "popupLocation"
        );

    const price =
        document.getElementById(
            "popupPrice"
        );

    const owner =
        document.getElementById(
            "popupOwner"
        );

    const phone =
        document.getElementById(
            "popupPhone"
        );

    const description =
        document.getElementById(
            "popupDescription"
        );

    const tag =
        document.getElementById(
            "popupTag"
        );

    const details =
        document.getElementById(
            "popupDetails"
        );

    const contact =
        document.getElementById(
            "contactOwnerBtn"
        );

    const modal =
        document.getElementById(
            "propertyModal"
        );


    if (image)
        image.src =
            property.images[0];


    if (title)
        title.innerText =
            property.name;


    if (location)
        location.innerText =
            "📍 " + property.location;


    if (price)
        price.innerText =
            property.price;


    if (owner)
        owner.innerText =
            property.owner;


    if (phone)
        phone.innerText =
            "+91 " + property.phone;


    if (description)
        description.innerText =
            property.description;


    if (tag)
        tag.innerText =
            property.purpose;


    let detailsHTML = "";


    if (property.beds > 0) {

        detailsHTML += `

            <span>
                🛏 ${property.beds} Beds
            </span>

        `;

    }


    if (property.baths > 0) {

        detailsHTML += `

            <span>
                🚿 ${property.baths} Baths
            </span>

        `;

    }


    detailsHTML += `

        <span>
            📐 ${property.area}
        </span>

        <span>
            🏷 ${property.brand}
        </span>

    `;


    if (details)
        details.innerHTML =
            detailsHTML;


    if (contact) {

        contact.href =
            "tel:+91" +
            property.phone;

    }


    if (modal) {

        modal.style.display =
            "block";

        document.body.style.overflow =
            "hidden";

    }

}


/* =====================================================
   CLOSE PROPERTY
===================================================== */

function closeProperty() {

    const modal =
        document.getElementById(
            "propertyModal"
        );


    if (!modal) return;


    modal.style.display =
        "none";


    document.body.style.overflow =
        "";

}


/* =====================================================
   PROPERTY IMAGE SLIDER
===================================================== */

function changeImage(direction) {

    if (
        !currentPropertyImages.length
    ) {

        return;

    }


    currentImageIndex +=
        direction;


    if (
        currentImageIndex >=
        currentPropertyImages.length
    ) {

        currentImageIndex = 0;

    }


    if (
        currentImageIndex < 0
    ) {

        currentImageIndex =
            currentPropertyImages.length - 1;

    }


    const image =
        document.getElementById(
            "propertyImage"
        );


    if (image) {

        image.src =
            currentPropertyImages[
                currentImageIndex
            ];

    }

}


/* =====================================================
   FEATURED SEARCH
===================================================== */

function filterFeaturedProperties() {

    const searchInput =
        document.getElementById(
            "featuredSearch"
        );


    const typeInput =
        document.getElementById(
            "featuredType"
        );


    if (
        !searchInput ||
        !typeInput
    ) {

        return;

    }


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const type =
        typeInput.value;


    const filtered =
        featuredProperties.filter(
            property => {

                const searchableText = `

                    ${property.name}

                    ${property.brand}

                    ${property.location}

                    ${property.type}

                    ${property.purpose}

                    ${property.owner}

                    ${property.description}

                `.toLowerCase();


                const searchMatch =
                    searchableText.includes(
                        search
                    );


                const typeMatch =
                    type === "all" ||
                    property.type === type;


                return (
                    searchMatch &&
                    typeMatch
                );

            }
        );


    renderFeaturedProperties(
        filtered
    );

}


/* =====================================================
   FAVOURITE
===================================================== */

function toggleFavorite(element) {

    if (!element) return;


    if (
        element.innerText === "♡"
    ) {

        element.innerText =
            "♥";

        element.style.color =
            "#e53935";

    }

    else {

        element.innerText =
            "♡";

        element.style.color =
            "#555";

    }

}


/* =====================================================
   BOOK PROPERTY
===================================================== */

function bookProperty() {

    const dateInput =
        document.getElementById(
            "bookingDate"
        );


    if (!dateInput) return;


    const date =
        dateInput.value;


    if (!date) {

        alert(
            "Please select a visit date."
        );

        return;

    }


    alert(
        "Property visit booked successfully for " +
        date
    );

}


/* =====================================================
   PAYMENT
===================================================== */

function makePayment() {

    alert(
        "Payment gateway will be connected with PHP/MySQL backend."
    );

}


/* =====================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
===================================================== */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "propertyModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeProperty();

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeProperty();

        }

    }
);


/* =====================================================
   LUXURY PROPERTY DATA
===================================================== */

const luxuryProperties = [

    {
        name: "Lakeview Signature Villa",

        type: "Villa",

        purpose: "FOR SALE",

        location: "Whitefield, Bangalore",

        price: "₹2.40 Crore",

        owner: "Rahul Mehta",

        phone: "9876501234",

        area: "3,200 sqft",

        beds: 4,

        baths: 4,

        brand: "Estate-Ease Luxury",

        description:
            "A premium signature villa in Whitefield offering spacious interiors, luxury amenities and a sophisticated lifestyle.",

        images: [

            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"

        ]

    },


    {
        name: "Greenwood Estate",

        type: "Villa",

        purpose: "FOR SALE",

        location: "Sarjapur Road, Bangalore",

        price: "₹1.85 Crore",

        owner: "Vivek Nair",

        phone: "9845012233",

        area: "2,900 sqft",

        beds: 4,

        baths: 3,

        brand: "Greenwood Estates",

        description:
            "A modern luxury villa in Sarjapur Road with spacious living areas, premium interiors and a peaceful environment.",

        images: [

            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"

        ]

    },


    {
        name: "Skyline Premium Apartment",

        type: "Apartment",

        purpose: "FOR SALE",

        location: "Koramangala, Bangalore",

        price: "₹1.20 Crore",

        owner: "Anjali Rao",

        phone: "9887654321",

        area: "1,900 sqft",

        beds: 3,

        baths: 2,

        brand: "Skyline Residences",

        description:
            "Premium apartment in Koramangala designed for modern urban living with excellent connectivity and luxury amenities.",

        images: [

            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"

        ]

    }

];


/* =====================================================
   OPEN LUXURY PROPERTY
===================================================== */

function openLuxuryProperty(index) {

    const property =
        luxuryProperties[index];

    if (!property) return;


    currentPropertyImages =
        property.images;

    currentImageIndex = 0;


    const image =
        document.getElementById(
            "propertyImage"
        );

    const title =
        document.getElementById(
            "popupTitle"
        );

    const location =
        document.getElementById(
            "popupLocation"
        );

    const price =
        document.getElementById(
            "popupPrice"
        );

    const owner =
        document.getElementById(
            "popupOwner"
        );

    const phone =
        document.getElementById(
            "popupPhone"
        );

    const tag =
        document.getElementById(
            "popupTag"
        );

    const description =
        document.getElementById(
            "popupDescription"
        );

    const details =
        document.getElementById(
            "popupDetails"
        );

    const contact =
        document.getElementById(
            "contactOwnerBtn"
        );

    const modal =
        document.getElementById(
            "propertyModal"
        );


    if (image)
        image.src =
            property.images[0];


    if (title)
        title.innerText =
            property.name;


    if (location)
        location.innerText =
            "📍 " +
            property.location;


    if (price)
        price.innerText =
            property.price;


    if (owner)
        owner.innerText =
            property.owner;


    if (phone)
        phone.innerText =
            "+91 " +
            property.phone;


    if (tag)
        tag.innerText =
            property.purpose;


    if (description)
        description.innerText =
            property.description;


    if (details) {

        details.innerHTML = `

            <span>
                🛏 ${property.beds} Beds
            </span>

            <span>
                🚿 ${property.baths} Baths
            </span>

            <span>
                📐 ${property.area}
            </span>

            <span>
                🏷 ${property.brand}
            </span>

        `;

    }


    if (contact) {

        contact.href =
            "tel:+91" +
            property.phone;

    }


    if (modal) {

        modal.style.display =
            "block";

        document.body.style.overflow =
            "hidden";

    }

}


/* =====================================================
   HERO SEARCH
===================================================== */

let selectedMode = "Buy";


/* =====================================================
   CHANGE BUY / RENT / COMMERCIAL TAB
===================================================== */

function changeTab(
    button,
    mode
) {

    selectedMode =
        mode;


    document
        .querySelectorAll(
            ".property-tab"
        )
        .forEach(
            tab => {

                tab.classList.remove(
                    "active"
                );

            }
        );


    if (button) {

        button.classList.add(
            "active"
        );

    }

}


/* =====================================================
   NORMALIZE PROPERTY TYPE
===================================================== */

function normalizePropertyType(type) {

    if (!type) {

        return "all";

    }


    const value =
        type
            .toString()
            .trim()
            .toLowerCase();


    if (
        value === "all" ||
        value === "all types"
    ) {

        return "all";

    }


    if (
        value === "independent house" ||
        value === "independent houses" ||
        value === "house"
    ) {

        return "House";

    }


    if (
        value === "apartment" ||
        value === "apartments"
    ) {

        return "Apartment";

    }


    if (
        value === "villa" ||
        value === "villas"
    ) {

        return "Villa";

    }


    if (
        value === "plot" ||
        value === "plots"
    ) {

        return "Plot";

    }


    if (
        value === "commercial" ||
        value === "office" ||
        value === "shop"
    ) {

        return "Commercial";

    }


    return type;

}


/* =====================================================
   CREATE COMPLETE SEARCH PROPERTY LIST
===================================================== */

function getAllSearchProperties() {

    const featured =
        featuredProperties.map(
            property => ({
                ...property
            })
        );


    const luxury =
        luxuryProperties.map(
            property => ({

                ...property,

                searchableSource:
                    "luxury"

            })
        );


    return [
        ...featured,
        ...luxury
    ];

}


/* =====================================================
   CHECK BEDROOM FILTER
===================================================== */

function matchesBedroomFilter(
    property,
    bedroomFilter
) {

    if (
        !bedroomFilter ||
        bedroomFilter === "Any"
    ) {

        return true;

    }


    const beds =
        Number(property.beds || 0);


    if (
        bedroomFilter === "5+ BHK"
    ) {

        return beds >= 5;

    }


    const requiredBeds =
        parseInt(
            bedroomFilter
        );


    if (
        Number.isNaN(requiredBeds)
    ) {

        return true;

    }


    return beds === requiredBeds;

}


/* =====================================================
   BUDGET FILTER
===================================================== */

function matchesBudgetFilter(
    property,
    budgetFilter
) {

    if (
        !budgetFilter ||
        budgetFilter === "Any Budget"
    ) {

        return true;

    }


    const priceText =
        property.price
            .toLowerCase();


    /*
       Convert common Indian property
       prices into approximate rupees.
    */

    let price =
        0;


    const croreMatch =
        priceText.match(
            /([\d.]+)\s*crore/
        );


    const lakhMatch =
        priceText.match(
            /([\d.]+)\s*lakhs?/
        );


    const thousandMatch =
        priceText.match(
            /([\d.]+)\s*(?:thousand|k)/
        );


    if (croreMatch) {

        price =
            parseFloat(
                croreMatch[1]
            ) * 10000000;

    }

    else if (lakhMatch) {

        price =
            parseFloat(
                lakhMatch[1]
            ) * 100000;

    }

    else if (thousandMatch) {

        price =
            parseFloat(
                thousandMatch[1]
            ) * 1000;

    }

    else {

        const numbers =
            priceText.match(
                /[\d,.]+/
            );


        if (numbers) {

            price =
                parseFloat(
                    numbers[0]
                        .replace(/,/g, "")
                );

            /*
               Rental prices are monthly,
               but the budget dropdown
               is mainly designed for
               property sale values.
            */

        }

    }


    if (!price) {

        return true;

    }


    if (
        budgetFilter ===
        "Under ₹25 Lakh"
    ) {

        return price < 2500000;

    }


    if (
        budgetFilter ===
        "₹25 - ₹50 Lakh"
    ) {

        return (
            price >= 2500000 &&
            price <= 5000000
        );

    }


    if (
        budgetFilter ===
        "₹50 Lakh - ₹1 Cr"
    ) {

        return (
            price > 5000000 &&
            price <= 10000000
        );

    }


    if (
        budgetFilter ===
        "₹1 Cr - ₹2 Cr"
    ) {

        return (
            price > 10000000 &&
            price <= 20000000
        );

    }


    if (
        budgetFilter ===
        "Above ₹2 Cr"
    ) {

        return price > 20000000;

    }


    return true;

}


/* =====================================================
   GLOBAL SEARCH
===================================================== */

function globalSearch() {

    const locationInput =
        document.getElementById(
            "searchLocation"
        );


    const propertyTypeInput =
        document.getElementById(
            "propertyType"
        );


    const bedroomInput =
        document.getElementById(
            "bedrooms"
        );


    const budgetInput =
        document.getElementById(
            "budget"
        );


    if (!locationInput) {

        console.error(
            "searchLocation input not found."
        );

        return;

    }


    /*
       LOCATION

       Empty location is allowed.

       Example:

       Bangalore
       Kochi
       Whitefield
       HSR
       Koramangala

       If empty, all matching
       properties are searched.
    */

    const location =
        locationInput.value
            .trim();


    /*
       PROPERTY TYPE
    */

    const propertyType =
        normalizePropertyType(
            propertyTypeInput
                ? propertyTypeInput.value
                : "all"
        );


    /*
       BEDROOMS
    */

    const bedroomFilter =
        bedroomInput
            ? bedroomInput.value
            : "Any";


    /*
       BUDGET
    */

    const budgetFilter =
        budgetInput
            ? budgetInput.value
            : "Any Budget";


    /*
       SEARCH MODE
    */

    let mode =
        selectedMode || "Buy";


    if (
        mode !== "Buy" &&
        mode !== "Rent" &&
        mode !== "Commercial"
    ) {

        mode = "Buy";

    }


    /*
       GET ALL PROPERTIES
    */

    const allProperties =
        getAllSearchProperties();


    /*
       NORMALIZE LOCATION
    */

    const searchLocation =
        location.toLowerCase();


    /*
       FILTER PROPERTIES
    */

    const filteredProperties =
        allProperties.filter(
            property => {


                /* ---------------------------------
                   LOCATION MATCH
                --------------------------------- */

                const propertyLocation =
                    (
                        property.location ||
                        ""
                    ).toLowerCase();


                const propertyName =
                    (
                        property.name ||
                        ""
                    ).toLowerCase();


                const propertyBrand =
                    (
                        property.brand ||
                        ""
                    ).toLowerCase();


                const propertyOwner =
                    (
                        property.owner ||
                        ""
                    ).toLowerCase();


                const propertyDescription =
                    (
                        property.description ||
                        ""
                    ).toLowerCase();


                const locationMatch =
                    searchLocation === "" ||
                    propertyLocation.includes(
                        searchLocation
                    ) ||
                    propertyName.includes(
                        searchLocation
                    ) ||
                    propertyBrand.includes(
                        searchLocation
                    ) ||
                    propertyOwner.includes(
                        searchLocation
                    ) ||
                    propertyDescription.includes(
                        searchLocation
                    );


                if (!locationMatch) {

                    return false;

                }


                /* ---------------------------------
                   BUY / RENT / COMMERCIAL
                --------------------------------- */

                let modeMatch = true;


                if (mode === "Buy") {

                    modeMatch =
                        property.purpose ===
                        "FOR SALE";

                }


                else if (mode === "Rent") {

                    modeMatch =
                        property.purpose ===
                        "FOR RENT";

                }


                else if (
                    mode === "Commercial"
                ) {

                    modeMatch =
                        normalizePropertyType(
                            property.type
                        ) ===
                        "Commercial";

                }


                if (!modeMatch) {

                    return false;

                }


                /* ---------------------------------
                   PROPERTY TYPE
                --------------------------------- */

                let typeMatch = true;


                if (
                    propertyType !== "all"
                ) {

                    typeMatch =
                        normalizePropertyType(
                            property.type
                        ) ===
                        propertyType;

                }


                /*
                   Commercial tab should
                   automatically search
                   commercial properties.

                   Therefore if Commercial
                   tab is selected and user
                   selected All Types,
                   commercial properties
                   are returned.
                */

                if (
                    mode === "Commercial" &&
                    propertyType === "all"
                ) {

                    typeMatch =
                        normalizePropertyType(
                            property.type
                        ) ===
                        "Commercial";

                }


                if (!typeMatch) {

                    return false;

                }


                /* ---------------------------------
                   BEDROOMS
                --------------------------------- */

                if (
                    !matchesBedroomFilter(
                        property,
                        bedroomFilter
                    )
                ) {

                    return false;

                }


                /* ---------------------------------
                   BUDGET
                --------------------------------- */

                if (
                    !matchesBudgetFilter(
                        property,
                        budgetFilter
                    )
                ) {

                    return false;

                }


                return true;

            }
        );


    /* =================================================
       SAVE SEARCH RESULTS
    ================================================= */

    sessionStorage.setItem(
        "estateEaseSearchResults",
        JSON.stringify(
            filteredProperties
        )
    );


    /* =================================================
       SAVE SEARCH CRITERIA
    ================================================= */

    const searchCriteria = {

        location:
            location,

        type:
            propertyType,

        mode:
            mode,

        bedrooms:
            bedroomFilter,

        budget:
            budgetFilter,

        resultCount:
            filteredProperties.length

    };


    sessionStorage.setItem(
        "estateEaseSearchCriteria",
        JSON.stringify(
            searchCriteria
        )
    );


    /* =================================================
       SEARCH URL
    ================================================= */

    const params =
        new URLSearchParams();


    params.set(
        "location",
        location
    );


    params.set(
        "type",
        propertyType
    );


    params.set(
        "mode",
        mode
    );


    params.set(
        "bedrooms",
        bedroomFilter
    );


    params.set(
        "budget",
        budgetFilter
    );


    /* =================================================
       OPEN SEARCH RESULTS
    ================================================= */

    window.location.href =
        "search-results.html?" +
        params.toString();

}


/* =====================================================
   ESTATE SLIDER
===================================================== */

let currentEstateSlide = 0;


/* =====================================================
   SHOW ESTATE SLIDE
===================================================== */

function showEstateSlide(index) {

    const slides =
        document.querySelectorAll(
            ".estate-slide"
        );


    const dots =
        document.querySelectorAll(
            ".estate-dot"
        );


    if (!slides.length) {

        return;

    }


    if (
        index >= slides.length
    ) {

        index = 0;

    }


    if (
        index < 0
    ) {

        index =
            slides.length - 1;

    }


    currentEstateSlide =
        index;


    slides.forEach(
        slide => {

            slide.classList.remove(
                "active"
            );

        }
    );


    dots.forEach(
        dot => {

            dot.classList.remove(
                "active"
            );

        }
    );


    slides[index].classList.add(
        "active"
    );


    if (dots[index]) {

        dots[index].classList.add(
            "active"
        );

    }

}


/* =====================================================
   ESTATE SLIDER ARROWS
===================================================== */

function changeEstateSlide(
    direction
) {

    showEstateSlide(
        currentEstateSlide +
        direction
    );

}


/* =====================================================
   AUTO SLIDE
===================================================== */

setInterval(
    function() {

        changeEstateSlide(1);

    },
    5000
);


/* =====================================================
   INITIAL PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderFeaturedProperties();

        showEstateSlide(0);

    }
);