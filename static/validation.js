let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

name.addEventListener("input", function () {
    if (name.value.length < 3) {
        name.setCustomValidity("Нам кажется, что имя не может быть короче 3 букв.");
    } else {
        name.setCustomValidity("");
    }
});

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Не очень похоже на электронную почту...");
    } else {
        email.setCustomValidity("");
    }
});

phone.addEventListener("input", function () {
    if (!new RegExp("89[0-9]{9}").test(phone.value)) {
        phone.setCustomValidity("Мы не можем до вас дозвониться, попробуйте указать телефон в формате 89xxxxxxxxx.");
    } else {
        phone.setCustomValidity("");
    }
});