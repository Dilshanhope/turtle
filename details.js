
    const registrationForm = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmEmail");
    const mobileNumber = document.getElementById("mobileNumber");
    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const confirmEmailError = document.getElementById("confirmEmailError");
    const mobileNumberError = document.getElementById("mobileNumberError");
    
    registrationForm.addEventListener("submit", function(event) {
      let valid = true;
      clearErrors();
      
      if (fullName.value.trim() === "") {
        fullNameError.textContent = "Full Name is required";
        valid = false;
      }
      
      if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
      } else if (!isValidEmail(email.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
      }
      
      if (confirmEmail.value.trim() === "") {
        confirmEmailError.textContent = "Confirm Email is required";
        valid = false;
      } else if (confirmEmail.value !== email.value) {
        confirmEmailError.textContent = "Emails do not match";
        valid = false;
      }
      
      if (mobileNumber.value.trim() === "") {
        mobileNumberError.textContent = "Mobile Number is required";
        valid = false;
      } else if (!isValidMobileNumber(mobileNumber.value)) {
        mobileNumberError.textContent = "Invalid mobile number format";
        valid = false;
      }
      
      if (!valid) {
        event.preventDefault();
      }
    });
    
    function clearErrors() {
      fullNameError.textContent = "";
      emailError.textContent = "";
      confirmEmailError.textContent = "";
      mobileNumberError.textContent = "";
    }
    
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    
    function isValidMobileNumber(mobileNumber) {
      const mobileNumberPattern = /^\d{10}$/;
      return mobileNumberPattern.test(mobileNumber);
    }
  


    // Function to save labels to local storage
function saveLabels() {

  localStorage.setItem('fullName', document.getElementById('fullName').value);
  localStorage.setItem('mobileNumber', document.getElementById('mobileNumber').value);
  localStorage.setItem('email', document.getElementById('email').value);

            
}

// Attach this function to the button click event or any suitable event

document.querySelector('.btn7').addEventListener('click',saveLabels);




