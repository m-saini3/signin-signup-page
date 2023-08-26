const password = document.querySelector(".password");
const passwordBtn = document.querySelector(".password-btn");

// function togglePassword() {
//   hello.style.color = "red";
//   password.type = "text";
// }

// const togglePassword = () => {
//   hello.style.color = "red";
//   password.type = "text";
// };

passwordBtn.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
