const form = document.querySelector("#signupForm");
const message = document.querySelector("#message");
const emailMsg = document.querySelector("#email-msg");
const passMsg = document.querySelector("#pass-msg");
const passwordInput = document.querySelector("#password");
const showPassword = document.querySelector("#showPassword");
const button = document.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const uname = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (uname === "" || email === "" || password === "") {
    showMessage("All fields are mendatory!", "red");
    return;
  } else if (!email.includes("@")) {
    emailMsg.textContent = "@ is missing in email";
    emailMsg.style.color = "red";

    return;
  } else if (password.length < 6) {
    passMsg.textContent = "Password must be atleast 6 characters";
    passMsg.style.color = "red";

    return;
  }
  button.disabled = true;
  emailMsg.textContent = "";
  passMsg.textContent = "";
  showMessage("Account Created Sucessfully!", "green");
  form.reset();
  console.log(uname, email, password);
});
showPassword.addEventListener("change", function () {
  if (showPassword.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}
