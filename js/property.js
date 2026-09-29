const params = new URLSearchParams(window.location.search);

document.getElementById("propertyTitle").textContent =
    params.get("title") || "Property Details";

document.getElementById("propertyLocation").textContent =
    "📍 " + (params.get("location") || "Bangalore");

document.getElementById("beds").textContent =
    "🛏 " + (params.get("beds") || "3") + " Beds";

document.getElementById("baths").textContent =
    "🚿 " + (params.get("baths") || "2") + " Baths";

document.getElementById("area").textContent =
    "📐 " + (params.get("area") || "1,650") + " sqft";

document.getElementById("price").textContent =
    params.get("price") || "₹1.25 Cr";

document.getElementById("propertyImage").src =
    params.get("image") || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d";
