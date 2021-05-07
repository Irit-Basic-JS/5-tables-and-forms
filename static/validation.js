let submit = document.querySelector('input[type="submit"]');
let phone = document.querySelector('input[type="phone"]');
let email = document.querySelector('input[type="email"]');
let form = document.querySelector('form');

function isPhoneValid() {
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return phone.value.match(regex);
}

function isEmailValid() {
    return email.value.includes('@');
}

form.addEventListener("submit", (e) => {
    let isValid = isPhoneValid() && isEmailValid();
    if (!isValid) {
        alert("Данные не валидны");
        e.preventDefault();
    }
});