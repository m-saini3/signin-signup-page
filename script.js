const password = document.querySelector(".password");
const passwordBtn = document.querySelector(".password-btn");

passwordBtn.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
