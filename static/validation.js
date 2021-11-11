let tel = document.querySelector('input[name="phone"]');
let form = document.querySelector('form');

function validatePhone() {
    return tel.value.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/);
}

form.addEventListener("submit", (event) => {
    let telephone = validatePhone();
    if (!telephone) {
        alert("Номер телефона не валиден");
        event.preventDefault();
    }
});