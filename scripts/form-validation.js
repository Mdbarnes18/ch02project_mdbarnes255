/*
Name: Michael Barnes
Date: 08/28/2026
*/

/*
This function checks the required fields on the contact form
and displays a message when information is missing.
*/
function checkMissing() {
const requiredFields = document.querySelectorAll(".required");
let missingCount = 0;

```
requiredFields.forEach(function (field) {
    if (field.value.trim() === "") {
        missingCount++;
    }
});

const message = document.getElementById("missing-count");

if (missingCount > 0) {
    message.textContent = missingCount + " required field(s) are missing.";
    return true;
}

message.textContent = "";
return false;
```

}

/*
This function checks whether the email address contains
at least eight characters.
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
This function runs both validation functions when
the contact form button is clicked.
*/
function validateForm() {
const missingFields = checkMissing();
const validEmail = validateEmail();

```
if (missingFields || !validEmail) {
    alert("Please complete all required fields and enter a valid email address.");
    return;
}

alert("Thank you! Your message has been submitted.");
```

}
