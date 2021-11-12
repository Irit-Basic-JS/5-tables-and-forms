let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");

name.addEventListener("input", function() {
    if (name.value.length <= 2) {
        name.setCustomValidity("Имя не может быть короче трех букв");
    }else {
        name.setCustomValidity("");
    }
});

phone.addEventListener("input", function () {
    if ((phone.value.length != 11) && (phone.value.length != 12)) {
        phone.setCustomValidity("Пожалуйста, укажите корректный номер телефона в формате '+7XXXXXXXXXX' или '8XXXXXXXXXX'");
    } else {
        phone.setCustomValidity("");
    }
});

mail.addEventListener("input", function () {
    if (mail.validity.typeMismatch) {
        mail.setCustomValidity("Такого почтового адреса не существует");
    } else {
        mail.setCustomValidity("");
    }
});