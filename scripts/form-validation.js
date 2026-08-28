/*
Name: Michael Barnes
Date: 08/28/2026
*/

function checkMissing() {
    const fields = document.querySelectorAll(".required");
    const missingMessage = document.getElementById("missing-count");
    let missing = 0;

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            missing++;
        }
    }

    if (missingMessage) {
        if (missing > 0) {
            missingMessage.textContent = missing + " required field(s) are missing.";
            return false;
        }
        missingMessage.textContent = "";
    }
    return missing === 0;
}

function validateEmail() {
    const email = document.getElementById("email");
    if (!email) return false;

    if (email.value.trim().length < 8) {
        email.classList.add("invalid-email");
        return false;
    }

    email.classList.remove("invalid-email");
    return true;
}

function validateForm(event) {
    // Stops the form from submitting and refreshing the page
    if (event) event.preventDefault();

    const missingFields = checkMissing();
    const validEmail = validateEmail();

    if (!missingFields || !validEmail) {
        alert("Please complete all required fields and enter a valid email address.");
    } else {
        alert("Your form has been submitted successfully.");
    }
}

window.addEventListener("load", function() {
    const button = document.getElementById("submit-button");

    if (button) {
        button.addEventListener("click", validateForm);
    } else {
        console.error("Submit button with id='submit-button' was not found in the HTML.");
    }
});