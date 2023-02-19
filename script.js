const small = document.querySelector(".msg");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("Con_password");
const button = document.querySelector("button");

console.log(password);

function errorMsg() {
  if (password.value.length === 0) {
    password.classList.add("invalid");
    small.style.display = "block";
  } else {
    small.style.display = "none";
    password.classList.remove("invalid");
  }
}

button.addEventListener("click", () => {
  event.preventDefault();
  errorMsg();
});
