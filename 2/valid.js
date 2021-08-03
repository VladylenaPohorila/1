const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Here must be yours e-mail address");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("input", function (event) {
  if (password.validity.tooShort) {
    password.setCustomValidity("Password must be longer 6 characters");
  } else {
    password.setCustomValidity("");
  }
});
