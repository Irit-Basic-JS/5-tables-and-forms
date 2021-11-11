const phone = document.getElementById("phone");
const form = document.querySelector('form');

function validatePhone() {
    return phone.value.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/);
}

form.addEventListener("submit", (event) => {
    let isValid = validatePhone();
    if (!isValid) {
        alert("Номер телефона не валиден");
        event.preventDefault();
    }
}); 

