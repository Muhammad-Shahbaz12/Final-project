document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const additionalInfoForm = document.getElementById("additionalInfoForm");
  
    const nextButton = document.getElementById("nextButton");
    if (nextButton) {
      nextButton.addEventListener("click", function(event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
  
        window.location.href = "page2.html";
      });
    }
  
    if (additionalInfoForm) {
      additionalInfoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fatherName = document.getElementById("fatherName").value;
        const fatherOccupation = document.getElementById("fatherOccupation").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postalCode").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const personalNumber = document.getElementById("personalNumber").value;
        const nationality = document.getElementById("nationality").value;
        const confirmAddress = document.getElementById("confirmAddress").value;
  
        localStorage.setItem("fatherName", fatherName);
        localStorage.setItem("fatherOccupation", fatherOccupation);
        localStorage.setItem("address", address);
        localStorage.setItem("postalCode", postalCode);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("personalNumber", personalNumber);
        localStorage.setItem("nationality", nationality);
        localStorage.setItem("confirmAddress", confirmAddress);
  
        window.location.href = "print.html";
      });
    }
  
    // Code to populate user details in the print.html page...
  });