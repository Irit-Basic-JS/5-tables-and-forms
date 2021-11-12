const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const form = document.querySelector('form');

function validatePhone() {
    return phone.value.length > 10 && phone.value.length < 13;
}
function validateName() {
    return name.value.length > 3 && name.value.length < 50;
}

form.addEventListener('submit', (event) => {
    let phoneIsValid = validatePhone();
    let nameIsValid = validateName();
    if (!phoneIsValid) {
        alert("Номер телефона не валиден");
        event.preventDefault();
    }
    if (!nameIsValid) {
        alert("Имя введено некорректно");
        event.preventDefault();
    }
}); 