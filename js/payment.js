function buyProduct(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;

      document.getElementById("checkoutForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";

      console.log("Order placed by:", name);
    } 