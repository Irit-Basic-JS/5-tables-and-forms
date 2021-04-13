let telPhone = document.querySelector(".phone");
let form = document.querySelector('form');
let firstFocus = true;

telPhone.onfocus = function () {
    if (firstFocus) {
        telPhone.value = "+7 (";
        firstFocus = false;
    }
}

telPhone.oninput = function () {
    if (telPhone.value.length !== 0) {
        if (isNaN(Number(telPhone.value[telPhone.value.length - 1]))) {
            telPhone.value = telPhone.value.slice(0, telPhone.value.length - 1);
        }
    }
    let temp = telPhone.value
        .replace(/ /g, '')
        .replace(/\+/, '')
        .replace(/-/g, '')
        .replace(/\(/g, '')
        .replace(/\)/g, '');
    if (temp.match(/\d/))
        telPhone.value = "+7 (";
    if (temp.match(/\d{2,4}/))
        telPhone.value = "+7 (" + temp.slice(1, 4);
    if (temp.match(/\d{5,7}/))
        telPhone.value = "+7 (" + temp.slice(1, 4) + ") " + temp.slice(4, 7);
    if (temp.match(/\d{8,9}/))
        telPhone.value = "+7 (" + temp.slice(1, 4) + ") " + temp.slice(4, 7) + "-" + temp.slice(7, 9);
    if (temp.match(/\d{10,11}/))
        telPhone.value = "+7 (" + temp.slice(1, 4) + ") " + temp.slice(4, 7) + "-" + temp.slice(7, 9) + "-" + temp.slice(9, 11);
}

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
