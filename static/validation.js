let telphone = document.querySelector('input[type="tel"]');
let email = document.querySelector('input[type="email"]');
let form = document.querySelector('form');

function validateEmail() {
    return email.value.includes('@');
}

function validatePhone() {
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return telphone.value.match(regex);
}

form.addEventListener("submit", (e) => {
    let isValidEmail = validateEmail() && validatePhone();
    if(!isValidEmail) {
        alert("Данные не валидны");
        e.preventDefault();
    }
});
