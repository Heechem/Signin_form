const small = document.querySelector('.msg');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('Con_password');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const errorContainer = document.querySelector('.error_message');

console.log(password);

function errorMsg() {
  if (password.value.length === 0) {
    password.classList.add('invalid');
    password.setCustomValidity('Please enter an email here');
    small.style.display = 'block';
  } else {
    small.style.display = 'none';
    password.classList.remove('invalid');
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  errorMsg();
  validationField();
});

function validationField() {
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add('invalid');
      errorContainer.classList.add('visible');
    }
  });
}
