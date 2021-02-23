document.getElementById("email").addEventListener("change", validateEmail, true);

function validateEmail() {
  var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let field = document.getElementById('email');
  let style = field.style;
  let value = field.value;
  if (value === !null) { }

  if (value.match(mailFormat) || value.length == 0) {
    style.borderColor = "hsl(0, 36%, 70%)";
    error.style.display = "none";
    style.backgroundImage = "url()";
  }
  else {
    style.borderColor = "red";
    style.backgroundImage = "url(images/icon-error.svg)";
    error.style.display = "initial";
  }
}
// thanks to w3resource for the mail format https://www.w3resource.com/javascript/form/email-validation.php //