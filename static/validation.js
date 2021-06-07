let submitButton = document.querySelector('input[type="submit"]');
let telInput = document.querySelector('input[type="tel"]');
let form = document.querySelector('form');

function validatePhone() {
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return telInput.value.match(regex);
}

form.addEventListener("submit", (e) => {
    if(!validatePhone()) {
        alert("Данные не валидны");
        e.preventDefault();
    }
});
