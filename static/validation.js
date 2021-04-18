let form = document.querySelector('form');
let email = document.querySelector('input[type="email"]');
let telPhone = document.querySelector('input[type="tel"]');
let submitButton = document.querySelector('input[type="submit"]');
function validateEmail() {
    return email.value.includes('@');
}

function validatePhone() {
    const regex = /\+7/;
    return telPhone.value.match(regex);
}

form.addEventListener("submit", (e) => {
    let isValidEmail = validateEmail() && validatePhone();
    if(!isValidEmail) {
        alert("Данные не валидны");
        e.preventDefault();
    }
});