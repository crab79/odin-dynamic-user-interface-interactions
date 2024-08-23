import "./validation.scss";

const form = document.querySelector("form");
const email = document.getElementById("user-email");
const emailError = document.querySelector("#user-email + span.error");
const country = document.getElementById("user-country");
const countryError = document.querySelector("#user-country + span.error");
const zip_code = document.getElementById("user-zip-code");
const zip_codeError = document.querySelector("#user-zip-code + span.error");
const pwd = document.getElementById("user-pwd");
const pwdError = document.querySelector("#user-pwd + span.error");
const pwd_confirm = document.getElementById("user-pwd-confirm");
const pwd_confirmError = document.querySelector("#user-pwd-confirm + span.error");

form_validation();
email_validation();
country_validation();
zip_code_validation();
pwd_validation();
pwd_confirm_validation();

function email_validation() {
    email.addEventListener("input", (event) => {
        if (email.validity.valid) {
            emailError.textContent = ""; 
            emailError.className = "error"; 
        } else {
            emailShowError();
        }
    });
}

function form_validation() {
    form.addEventListener("submit", (event) => {
        if (!email.validity.valid) {
            emailShowError();
            event.preventDefault();
        } else if (!zip_code.validity.valid) {
            zip_code_ShowError();
            event.preventDefault();
        } else if (!pwd.validity.valid) {
            pwd_ShowError();
            event.preventDefault();
        } else if (pwd.value !== pwd_confirm.value) {
            pwd_confirm_ShowError();
            event.preventDefault();
        } else {
            event.preventDefault();  // If you don't want the form to submit, otherwise remove this line.
        }
    });
}

function country_validation() {
    country.addEventListener("change", (event) => {
        const selectedValue = country.value.toUpperCase();
        if (selectedValue === "") {
            countryShowError();
        } else {
            countryError.textContent = "";
            countryError.className = "error";
        }
    });
}

function zip_code_validation() {
    zip_code.addEventListener("input", (event) => {
        if (zip_code.validity.valid) {
            zip_codeError.textContent = ""; 
            zip_codeError.className = "error"; 
        } else {
            zip_code_ShowError();
        }
    });
}

function pwd_validation() {
    pwd.addEventListener("input", (event) => {
        if (pwd.validity.valid) {
            pwdError.textContent = ""; 
            pwdError.className = "error"; 
        } else {
            pwd_ShowError();
        }
    });
}

function pwd_confirm_validation() {
    pwd_confirm.addEventListener("input", (event) => {
        if (pwd_confirm.value === pwd.value) {
            pwd_confirmError.textContent = ""; 
            pwd_confirmError.className = "error"; 
        } else {
            pwd_confirm_ShowError();
        }
    });
}

function emailShowError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    emailError.className = "error active";
}

function countryShowError() {
    countryError.textContent = "Please select a country.";
    countryError.className = "error active";
}

function zip_code_ShowError() {
    if (zip_code.validity.valueMissing) {
        zip_codeError.textContent = "Entered value needs to be a zip code.";
    } else if (zip_code.validity.tooShort) {
        zip_codeError.textContent = `Zip code should be ${zip_code.maxLength} characters; you entered ${zip_code.value.length}.`;
    }

    zip_codeError.className = "error active";
}

function pwd_ShowError() {
    if (pwd.validity.valueMissing) {
        pwdError.textContent = "Please enter a password.";
    } else if (pwd.validity.tooShort) {
        pwdError.textContent = `Password should be at least ${pwd.minLength} characters; you entered ${pwd.value.length}.`;
    }

    pwdError.className = "error active";
}

function pwd_confirm_ShowError() {
    if (pwd_confirm.value !== pwd.value) {
        pwd_confirmError.textContent = "Passwords do not match.";
    }

    pwd_confirmError.className = "error active";
}
