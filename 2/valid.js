const form = document.getElementById("form");
const mail = document.getElementById("email");
const password = document.getElementById("password");
const mailError = document.querySelector("#email + div.error");
const passwordError = document.querySelector("#password + div.error");
const formEmail = document.querySelector(".form-email");
const fornPassword = document.querySelector(".form-password");

mail.addEventListener('input', function (event) {
    if (mail.validity.valid) {
        mailError.textContent = ''; 
        mailError.className = 'error';
        formEmail.classList.remove('formerror');
    } else {
        showErrorMail();
    }
});
password.addEventListener('input', function (event) {
    if (password.validity.valid) {
        passwordError.textContent = ''; 
        passwordError.className = 'error'; 
        fornPassword.classList.remove('formerror');
    } else {
        showErrorPassword();
    }
});

form.addEventListener('submit', function (event) {
     if(!mail.validity.valid) {
        showErrorMail();
        event.preventDefault();
    }
    if (!password.validity.valid) {
        showErrorPassword();
        event.preventDefault();
    }
});

function showErrorMail() {
    if (mail.validity.valueMissing) {
        mailError.textContent = 'You need to enter an e-mail address.';
    } else if (mail.validity.typeMismatch) {
        mailError.textContent = 'Entered value needs to be an e-mail address.';
    }
    mailError.className = 'active';
    formEmail.classList.add('formerror');
}
function showErrorPassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a password.';
    } else if(password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`;
    }
    passwordError.className = 'active';
    fornPassword.classList.add('formerror');
}