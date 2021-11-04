let telPhone = document.querySelector(".phone");
let form = document.querySelector('form');

function validatePhone() {
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return telPhone.value.match(regex);
}

form.addEventListener("submit", (e) => {
    let isValidEmail = validatePhone();
    if(!isValidEmail) {
        alert("Данные не валидны");
        telPhone.focus();
        e.preventDefault();
    }
});
