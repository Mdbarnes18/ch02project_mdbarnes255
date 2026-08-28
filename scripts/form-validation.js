/*
Name: Michael Barnes
Date: 08/28/2026
*/

/*
This function checks the required fields and counts
the fields that are empty.
*/
function checkMissing() {
const requiredFields = document.querySelectorAll(".required");
const missingCount = document.getElementById("missing-count");
let count = 0;

```
requiredFields.forEach(function(field) {
    if (field.value.trim() === "") {
        count++;
        field.style.borderColor = "#cc0000";
    } else {
        field.style.borderColor = "#e6b800";
    }
});

if (count > 0) {
    missingCount.textContent =
        count + " required field(s) are missing.";
    return false;
}

missingCount.textContent = "";
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
This function runs the required-field and email
validation checks when the submit button is clicked.
*/
function validateForm() {
const fieldsValid = checkMissing();
const emailValid = validateEmail();

```
if (!fieldsValid || !emailValid) {
    alert("Please complete all required fields and enter a valid email address.");
    return false;
}

alert("Your form has been submitted successfully.");
return true;
```

}

/*
This event listener connects the submit button
to the validation function.
*/
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
validateForm();
});
