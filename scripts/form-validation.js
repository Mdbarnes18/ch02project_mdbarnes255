/*
Name: Michael Barnes
Date: 08/28/2026
*/

/*
This function checks all required fields and counts
the fields that are empty.
*/
function checkMissing() {
const fields = document.querySelectorAll(".required");
const missingMessage = document.getElementById("missing-count");
let missing = 0;

```
for (let i = 0; i < fields.length; i++) {
    if (fields[i].value.trim() === "") {
        missing++;
    }
}

if (missing > 0) {
    missingMessage.textContent =
        missing + " required field(s) are missing.";
    return false;
}

missingMessage.textContent = "";
return true;
```

}

/*
This function checks whether the email address
contains at least eight characters.
*/
function validateEmail() {
const email = document.getElementById("email");

```
if (email.value.trim().length < 8) {
    email.classList.add("invalid-email");
    return false;
}

email.classList.remove("invalid-email");
return true;
```

}

/*
This function runs all validation checks when
the submit button is clicked.
*/
function validateForm() {
const missingFields = checkMissing();
const validEmail = validateEmail();

```
if (!missingFields || !validEmail) {
    alert("Please complete all required fields and enter a valid email address.");
} else {
    alert("Your form has been submitted successfully.");
}
```

}

/*
This event listener connects the submit button
to the validation function after the page loads.
*/
window.addEventListener("load", function() {
const button = document.getElementById("submit-button");

```
if (button) {
    button.addEventListener("click", validateForm);
}
```

});
