const form = document.querySelector('form');
const password = document.getElementById('password')
const confirmedPassword = document.getElementById('confirm-password')
const passwordError = document.getElementById('error')

function validatePassword() {
    if (password.value !== confirmedPassword.value) {
        passwordError.textContent = "Passwords do not match";
    }
}