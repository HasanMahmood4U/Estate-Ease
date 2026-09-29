 function login(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Demo only — connect this to your backend authentication.
      if (email && password) {
        alert("Login successful!");
      }
    }

    function socialLogin(provider) {
      alert(provider + " login selected.");
    } 