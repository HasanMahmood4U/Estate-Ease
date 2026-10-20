// ============================================================
// ESTATE-EASE SEARCH RESULTS
// ============================================================


// ============================================================
// ALL FEATURED PROPERTY DATA
// These properties are already part of the website
// ============================================================

const allProperties = [

    // ========================================================
    // APARTMENTS
    // ========================================================

    {
        title: "Green Valley Apartment",
        brand: "Green Valley Developers",
        type: "Apartment",
        purpose: "Buy",
        location: "Whitefield, Bangalore",
        area: "1250 sqft",
        details: "2 Beds • 2 Baths",
        price: "₹85 Lakhs",

        image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",

        ownerName: "Rahul Sharma",
        ownerPhone: "9876543210",

        description:
            "A comfortable apartment located in Whitefield, Bangalore with modern facilities and a convenient location."
    },


    {
        title: "Lakeview Heights",
        brand: "Lakeview Builders",
        type: "Apartment",
        purpose: "Rent",
        location: "Koramangala, Bangalore",
        area: "1100 sqft",
        details: "2 Beds • 2 Baths",
        price: "₹35,000/month",

        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",

        ownerName: "Priya Nair",
        ownerPhone: "9887654321",

        description:
            "Well-maintained apartment in Koramangala suitable for comfortable city living."
    },


    // ========================================================
    // VILLAS
    // ========================================================

    {
        title: "Palm Garden Villa",
        brand: "Palm Garden Developers",
        type: "Villa",
        purpose: "Buy",
        location: "Sarjapur Road, Bangalore",
        area: "2400 sqft",
        details: "3 Beds • 3 Baths",
        price: "₹2.10 Crore",

        image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",

        ownerName: "Amit Verma",
        ownerPhone: "9812345678",

        description:
            "Spacious villa with modern architecture and a peaceful residential environment."
    },


    {
        title: "Royal Green Villa",
        brand: "Royal Homes",
        type: "Villa",
        purpose: "Rent",
        location: "Electronic City, Bangalore",
        area: "2100 sqft",
        details: "3 Beds • 3 Baths",
        price: "₹65,000/month",

        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",

        ownerName: "Karan Mehta",
        ownerPhone: "9876123456",

        description:
            "Premium villa available for rent in Electronic City with spacious rooms and modern amenities."
    },


    // ========================================================
    // INDEPENDENT HOUSES
    // ========================================================

    {
        title: "Sunrise Independent House",
        brand: "Sunrise Properties",
        type: "Independent House",
        purpose: "Buy",
        location: "JP Nagar, Bangalore",
        area: "1800 sqft",
        details: "3 Beds • 3 Baths",
        price: "₹1.45 Crore",

        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",

        ownerName: "Suresh Kumar",
        ownerPhone: "9900123456",

        description:
            "Independent family house in JP Nagar with spacious rooms and a convenient location."
    },


    {
        title: "Family Home",
        brand: "Family Homes",
        type: "Independent House",
        purpose: "Rent",
        location: "Mysore Road, Bangalore",
        area: "1500 sqft",
        details: "3 Beds • 2 Baths",
        price: "₹30,000/month",

        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",

        ownerName: "Mohammed Sameer",
        ownerPhone: "9966332211",

        description:
            "Family-friendly independent house available for rent near Mysore Road."
    },


    // ========================================================
    // PLOTS
    // ========================================================

    {
        title: "Sumukha Enclave Plot",
        brand: "Sumukha Enclave",
        type: "Plot",
        purpose: "Buy",
        location: "Attibele, Bangalore",
        area: "1200 sqft",
        details: "30 × 40 • North Facing",
        price: "₹45 Lakhs",

        image:
            "https://www.nanubhaiproperty.com/images/thumbs/property/626822_1200-sq-ft-residential-plot-land-for-sale-attibele-in-bangalore_800.jpeg",

        ownerName: "Vikram Reddy",
        ownerPhone: "9987654321",

        description:
            "Residential plot in Attibele, Bangalore suitable for building a family home."
    },


    {
        title: "Palm Grove Residential Plot",
        brand: "Palm Grove Developers",
        type: "Plot",
        purpose: "Buy",
        location: "Tripunithura, Kochi",
        area: "2613 sqft",
        details: "Road Facing",
        price: "₹48 Lakhs",

        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",

        ownerName: "Arjun Kumar",
        ownerPhone: "9845012345",

        description:
            "Road-facing residential plot in Tripunithura, Kochi."
    },


    // ========================================================
    // COMMERCIAL
    // ========================================================

    {
        title: "Skyline Business Tower",
        brand: "Skyline Developers",
        type: "Commercial",
        purpose: "Buy",
        location: "Whitefield, Bangalore",
        area: "1850 sqft",
        details: "Office • 2 Parking",
        price: "₹2.85 Crore",

        image:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",

        ownerName: "Rahul Sharma",
        ownerPhone: "9876543210",

        description:
            "Modern commercial office space in Whitefield, Bangalore suitable for business operations."
    },


    {
        title: "Urban Square Showroom",
        brand: "Urban Square Group",
        type: "Commercial",
        purpose: "Rent",
        location: "Koramangala, Bangalore",
        area: "2400 sqft",
        details: "Showroom • Ground Floor",
        price: "₹1.20 Lakh/month",

        image:
            "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=80",

        ownerName: "Priya Nair",
        ownerPhone: "9887654321",

        description:
            "Ground-floor commercial showroom space in Koramangala."
    },


    {
        title: "Metro Business Hub",
        brand: "MetroSpace Properties",
        type: "Commercial",
        purpose: "Buy",
        location: "HITEC City, Hyderabad",
        area: "3200 sqft",
        details: "Office • 5 Parking",
        price: "₹3.75 Crore",

        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",

        ownerName: "Amit Verma",
        ownerPhone: "9812345678",

        description:
            "Large commercial office space located in HITEC City, Hyderabad."
    },


    {
        title: "Prime Retail Avenue",
        brand: "PrimeLand Realty",
        type: "Commercial",
        purpose: "Rent",
        location: "Andheri West, Mumbai",
        area: "1100 sqft",
        details: "Retail Shop • Ground Floor",
        price: "₹90,000/month",

        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",

        ownerName: "Karan Mehta",
        ownerPhone: "9876123456",

        description:
            "Ground-floor retail shop in Andheri West, Mumbai suitable for commercial use."
    }

];


// ============================================================
// DATABASE PROPERTIES
// ============================================================

let uploadedProperties = [];


// ============================================================
// CURRENT SEARCH RESULTS
// ============================================================

let currentResults = [];

let selectedProperty = null;


// ============================================================
// GET SEARCH FROM URL
// ============================================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


let currentSearch =
    urlParams.get("location") || "";


// ============================================================
// ESCAPE HTML
// ============================================================

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ============================================================
// GET SAFE IMAGE
// ============================================================

function getSafeImage(image) {

    if (!image) {

        return "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80";

    }


    const imageString =
        String(image);


    if (
        imageString.startsWith("/uploads/") ||
        imageString.startsWith("http://") ||
        imageString.startsWith("https://")
    ) {

        return imageString;

    }


    return "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80";

}


// ============================================================
// NORMALIZE DATABASE PROPERTY
// Converts MySQL format to frontend format
// ============================================================

function normalizeDatabaseProperty(property) {

    const bedrooms =
        Number(
            property.bedrooms || 0
        );


    const bathrooms =
        Number(
            property.bathrooms || 0
        );


    let details = "";


    if (
        bedrooms > 0 &&
        bathrooms > 0
    ) {

        details =
            bedrooms +
            " Beds • " +
            bathrooms +
            " Baths";

    }

    else if (
        bedrooms > 0
    ) {

        details =
            bedrooms +
            " Beds";

    }

    else if (
        bathrooms > 0
    ) {

        details =
            bathrooms +
            " Baths";

    }

    else {

        details =
            "Property";

    }


    // --------------------------------------------------------
    // PRICE
    // --------------------------------------------------------

    let formattedPrice =
        "Price on request";


    if (
        property.price !== null &&
        property.price !== undefined &&
        property.price !== ""
    ) {

        const numericPrice =
            Number(
                property.price
            );


        if (
            !Number.isNaN(
                numericPrice
            )
        ) {

            formattedPrice =
                "₹" +
                numericPrice.toLocaleString(
                    "en-IN"
                );

        }

        else {

            formattedPrice =
                "₹" +
                property.price;

        }

    }


    return {

        id:
            "database-" +
            property.id,

        databaseId:
            property.id,

        source:
            "database",

        title:
            property.title ||
            "Property",

        brand:
            "Estate-Ease Property",

        type:
            property.type ||
            "Property",

        purpose:
            property.purpose ||
            "Available",

        location:
            property.location ||
            "Location not specified",

        area:
            property.area
                ? String(property.area)
                : "Area not specified",

        details:
            details,

        price:
            formattedPrice,

        image:
            getSafeImage(
                property.image
            ),

        ownerName:
            property.owner_name ||
            "Property Owner",

        ownerPhone:
            property.owner_phone ||
            "",

        description:
            property.description ||
            "Property details are available on request."

    };

}


// ============================================================
// LOAD APPROVED DATABASE PROPERTIES
// ============================================================

async function loadUploadedProperties() {

    try {

        console.log(
            "Loading approved properties from MySQL..."
        );


        const response =
            await fetch(
                "/api/properties",
                {
                    method: "GET",
                    credentials: "include"
                }
            );


        if (!response.ok) {

            console.error(
                "Could not load database properties."
            );

            uploadedProperties = [];

            return;

        }


        const data =
            await response.json();


        if (
            data.success &&
            Array.isArray(
                data.properties
            )
        ) {

            uploadedProperties =
                data.properties.map(
                    normalizeDatabaseProperty
                );

        }

        else {

            uploadedProperties = [];

        }


        console.log(
            "Approved database properties:",
            uploadedProperties
        );

    }

    catch (error) {

        console.error(
            "Database property loading error:",
            error
        );

        uploadedProperties = [];

    }

}


// ============================================================
// GET ALL PROPERTIES
// Featured + Database
// ============================================================

function getAllProperties() {

    return [

        ...allProperties,

        ...uploadedProperties

    ];

}


// ============================================================
// DISPLAY SEARCH RESULTS
// ============================================================

function showResults(searchValue) {

    const query =
        String(
            searchValue || ""
        )
        .toLowerCase()
        .trim();


    const searchText =
        document.getElementById(
            "searchText"
        );


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (searchText) {

        searchText.innerText =
            searchValue ||
            "All Properties";

    }


    if (searchInput) {

        searchInput.value =
            searchValue || "";

    }


    // --------------------------------------------------------
    // GET ALL PROPERTIES
    // --------------------------------------------------------

    const allAvailableProperties =
        getAllProperties();


    // --------------------------------------------------------
    // SEARCH
    // --------------------------------------------------------

    const results =
        allAvailableProperties.filter(
            property => {

                // Empty search = show everything

                if (!query) {

                    return true;

                }


                const searchableText = (

                    property.title || ""

                ) + " " + (

                    property.brand || ""

                ) + " " + (

                    property.type || ""

                ) + " " + (

                    property.purpose || ""

                ) + " " + (

                    property.location || ""

                ) + " " + (

                    property.area || ""

                ) + " " + (

                    property.details || ""

                ) + " " + (

                    property.ownerName || ""

                ) + " " + (

                    property.description || ""

                );


                return searchableText
                    .toLowerCase()
                    .includes(query);

            }
        );


    // --------------------------------------------------------
    // SAVE RESULTS
    // --------------------------------------------------------

    currentResults =
        results;


    // --------------------------------------------------------
    // RESULT COUNT
    // --------------------------------------------------------

    const resultInfo =
        document.getElementById(
            "resultInfo"
        );


    if (resultInfo) {

        resultInfo.innerText =
            results.length +
            (
                results.length === 1
                    ? " property found"
                    : " properties found"
            );

    }


    // --------------------------------------------------------
    // RENDER
    // --------------------------------------------------------

    renderResults(
        results
    );

}


// ============================================================
// RENDER PROPERTY CARDS
// ============================================================

function renderResults(results) {

    const container =
        document.getElementById(
            "propertyContainer"
        );


    if (!container) {

        console.error(
            "propertyContainer element not found."
        );

        return;

    }


    container.innerHTML = "";


    // --------------------------------------------------------
    // NO RESULT
    // --------------------------------------------------------

    if (
        !results ||
        results.length === 0
    ) {

        container.innerHTML = `

            <div class="no-result">

                <h2>
                    No Property Found
                </h2>

                <p>
                    Try another city,
                    locality or property name.
                </p>

            </div>

        `;

        return;

    }


    // --------------------------------------------------------
    // PROPERTY CARDS
    // --------------------------------------------------------

    results.forEach(
        (property, index) => {

            const badgeText =
                property.source === "database"
                    ? "NEW • APPROVED"
                    : "FEATURED";


            container.innerHTML += `

                <div
                    class="property-card"
                    onclick="openPropertyPopup(${index})"
                >

                    <div
                        class="property-image-wrapper"
                    >

                        <img
                            class="property-image"
                            src="${escapeHTML(
                                getSafeImage(
                                    property.image
                                )
                            )}"
                            alt="${escapeHTML(
                                property.title
                            )}"
                        >

                        <span class="property-badge">

                            ${badgeText}

                        </span>

                    </div>


                    <div class="card-content">


                        <span class="type">

                            ${escapeHTML(
                                property.purpose
                            )}

                            •
                            
                            ${escapeHTML(
                                property.type
                            )}

                        </span>


                        <h2>

                            ${escapeHTML(
                                property.title
                            )}

                        </h2>


                        <div class="brand">

                            ${escapeHTML(
                                property.brand
                            )}

                        </div>


                        <div class="location">

                            📍
                            ${escapeHTML(
                                property.location
                            )}

                        </div>


                        <div class="details">

                            <span>

                                📐
                                ${escapeHTML(
                                    property.area
                                )}

                            </span>


                            <span>

                                ${escapeHTML(
                                    property.details
                                )}

                            </span>

                        </div>


                        <div class="price">

                            ${escapeHTML(
                                property.price
                            )}

                        </div>


                        <button
                            class="view-btn"
                            onclick="
                                event.stopPropagation();
                                openPropertyPopup(${index});
                            "
                        >

                            View Details

                        </button>


                    </div>

                </div>

            `;

        }
    );

}


// ============================================================
// OPEN PROPERTY POPUP
// ============================================================

function openPropertyPopup(index) {

    selectedProperty =
        currentResults[index];


    if (!selectedProperty) {

        return;

    }


    // --------------------------------------------------------
    // IMAGE
    // --------------------------------------------------------

    const modalImage =
        document.getElementById(
            "modalImage"
        );


    if (modalImage) {

        modalImage.src =
            getSafeImage(
                selectedProperty.image
            );

        modalImage.alt =
            selectedProperty.title;

    }


    // --------------------------------------------------------
    // TITLE
    // --------------------------------------------------------

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    if (modalTitle) {

        modalTitle.innerText =
            selectedProperty.title;

    }


    // --------------------------------------------------------
    // BRAND
    // --------------------------------------------------------

    const modalBrand =
        document.getElementById(
            "modalBrand"
        );


    if (modalBrand) {

        modalBrand.innerText =
            selectedProperty.brand;

    }


    // --------------------------------------------------------
    // LOCATION
    // --------------------------------------------------------

    const modalLocation =
        document.getElementById(
            "modalLocation"
        );


    if (modalLocation) {

        modalLocation.innerText =
            "📍 " +
            selectedProperty.location;

    }


    // --------------------------------------------------------
    // DETAILS
    // --------------------------------------------------------

    const modalDetails =
        document.getElementById(
            "modalDetails"
        );


    if (modalDetails) {

        modalDetails.innerHTML = `

            <span>
                ${escapeHTML(
                    selectedProperty.purpose
                )}
            </span>

            <span>
                ${escapeHTML(
                    selectedProperty.type
                )}
            </span>

            <span>
                📐
                ${escapeHTML(
                    selectedProperty.area
                )}
            </span>

            <span>
                ${escapeHTML(
                    selectedProperty.details
                )}
            </span>

        `;

    }


    // --------------------------------------------------------
    // PRICE
    // --------------------------------------------------------

    const modalPrice =
        document.getElementById(
            "modalPrice"
        );


    if (modalPrice) {

        modalPrice.innerText =
            selectedProperty.price;

    }


    // --------------------------------------------------------
    // DESCRIPTION
    // --------------------------------------------------------

    const modalDescription =
        document.getElementById(
            "modalDescription"
        );


    if (modalDescription) {

        modalDescription.innerText =
            selectedProperty.description;

    }


    // --------------------------------------------------------
    // OWNER NAME
    // --------------------------------------------------------

    const modalOwnerName =
        document.getElementById(
            "modalOwnerName"
        );


    if (modalOwnerName) {

        modalOwnerName.innerText =
            selectedProperty.ownerName;

    }


    // --------------------------------------------------------
    // OWNER PHONE
    // --------------------------------------------------------

    const modalOwnerPhone =
        document.getElementById(
            "modalOwnerPhone"
        );


    if (modalOwnerPhone) {

        modalOwnerPhone.innerText =
            selectedProperty.ownerPhone ||
            "Not available";

    }


    // --------------------------------------------------------
    // CALL OWNER
    // --------------------------------------------------------

    const callOwnerBtn =
        document.getElementById(
            "callOwnerBtn"
        );


    if (callOwnerBtn) {

        if (
            selectedProperty.ownerPhone
        ) {

            callOwnerBtn.href =
                "tel:" +
                selectedProperty.ownerPhone;

            callOwnerBtn.style.display =
                "inline-block";

        }

        else {

            callOwnerBtn.removeAttribute(
                "href"
            );

            callOwnerBtn.style.display =
                "none";

        }

    }


    // --------------------------------------------------------
    // BOOKING DATE
    // --------------------------------------------------------

    const bookingDate =
        document.getElementById(
            "bookingDate"
        );


    if (bookingDate) {

        bookingDate.value = "";


        const today =
            new Date();


        const year =
            today.getFullYear();


        const month =
            String(
                today.getMonth() + 1
            ).padStart(
                2,
                "0"
            );


        const day =
            String(
                today.getDate()
            ).padStart(
                2,
                "0"
            );


        bookingDate.min =
            year +
            "-" +
            month +
            "-" +
            day;

    }


    // --------------------------------------------------------
    // BOOK BUTTON
    // --------------------------------------------------------

    const bookingButton =
        document.querySelector(
            ".booking-btn"
        );


    if (bookingButton) {

        if (
            selectedProperty.databaseId
        ) {

            bookingButton.disabled =
                false;

            bookingButton.style.opacity =
                "1";

            bookingButton.title =
                "Book property visit";

        }

        else {

            bookingButton.disabled =
                false;

            bookingButton.style.opacity =
                "1";

            bookingButton.title =
                "Featured property";

        }

    }


    // --------------------------------------------------------
    // SHOW MODAL
    // --------------------------------------------------------

    const propertyModal =
        document.getElementById(
            "propertyModal"
        );


    if (propertyModal) {

        propertyModal.style.display =
            "flex";

    }


    document.body.style.overflow =
        "hidden";

}


// ============================================================
// CLOSE PROPERTY MODAL
// ============================================================

function closePropertyModal() {

    const propertyModal =
        document.getElementById(
            "propertyModal"
        );


    if (propertyModal) {

        propertyModal.style.display =
            "none";

    }


    document.body.style.overflow =
        "auto";

}


// ============================================================
// CLICK OUTSIDE MODAL
// ============================================================

document.addEventListener(
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

            closePropertyModal();

        }

    }
);


// ============================================================
// ESC KEY
// ============================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePropertyModal();

        }

    }
);


// ============================================================
// BOOK PROPERTY
// ============================================================

async function bookProperty() {

    if (!selectedProperty) {

        alert(
            "Please select a property first."
        );

        return;

    }


    const bookingDate =
        document.getElementById(
            "bookingDate"
        );


    if (!bookingDate) {

        alert(
            "Booking date field not found."
        );

        return;

    }


    const date =
        bookingDate.value;


    if (!date) {

        alert(
            "Please select a booking date."
        );

        return;

    }


    // ========================================================
    // OLD FEATURED PROPERTY
    // ========================================================

    if (
        !selectedProperty.databaseId
    ) {

        alert(
            "This is a featured property. Booking is available for newly uploaded properties."
        );

        return;

    }


    try {

        const response =
            await fetch(
                "/api/bookings",
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

                            property_id:
                                selectedProperty.databaseId,

                            booking_date:
                                date

                        })

                }
            );


        const data =
            await response.json();


        // ====================================================
        // LOGIN REQUIRED
        // ====================================================

        if (
            response.status === 401
        ) {

            sessionStorage.setItem(
                "returnAfterLogin",
                window.location.href
            );


            window.location.href =
                "login.html";


            return;

        }


        // ====================================================
        // BOOKING SUCCESS
        // ====================================================

        if (
            response.ok &&
            data.success
        ) {

            alert(

                "Booking request submitted successfully!\n\n" +

                "Property: " +
                selectedProperty.title +
                "\n" +

                "Date: " +
                date

            );


            closePropertyModal();


            return;

        }


        // ====================================================
        // BOOKING ERROR
        // ====================================================

        alert(

            data.message ||
            "Unable to create booking."

        );

    }

    catch (error) {

        console.error(
            "Booking error:",
            error
        );


        alert(
            "Unable to connect to server."
        );

    }

}


// ============================================================
// PAYMENT
// ============================================================

function makePayment() {

    if (!selectedProperty) {

        return;

    }


    alert(

        "Payment option selected for " +
        selectedProperty.title +
        "."

    );

}


// ============================================================
// SEARCH AGAIN
// ============================================================

function performSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (!searchInput) {

        return;

    }


    const value =
        searchInput.value.trim();


    // Empty search is allowed
    // It will show all properties

    const newURL =
        "search-results.html?location=" +
        encodeURIComponent(
            value
        );


    window.location.href =
        newURL;

}


// ============================================================
// ENTER KEY SEARCH
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "keypress",
                function(event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        performSearch();

                    }

                }
            );

        }

    }
);


// ============================================================
// INITIALIZE SEARCH PAGE
// ============================================================

async function initializeSearchPage() {

    console.log(
        "======================================"
    );

    console.log(
        "ESTATE-EASE SEARCH"
    );

    console.log(
        "======================================"
    );


    // --------------------------------------------------------
    // STEP 1
    // Load approved properties from MySQL
    // --------------------------------------------------------

    await loadUploadedProperties();


    // --------------------------------------------------------
    // STEP 2
    // Show Featured + Database properties
    // --------------------------------------------------------

    showResults(
        currentSearch
    );


    // --------------------------------------------------------
    // DEBUG INFORMATION
    // --------------------------------------------------------

    console.log(
        "Featured properties:",
        allProperties.length
    );


    console.log(
        "Approved uploaded properties:",
        uploadedProperties.length
    );


    console.log(
        "Total properties:",
        getAllProperties().length
    );


    console.log(
        "Current search:",
        currentSearch
    );

}


// ============================================================
// START SEARCH PAGE
// ============================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeSearchPage
    );

}

else {

    initializeSearchPage();

}