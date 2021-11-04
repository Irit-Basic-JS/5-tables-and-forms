let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

name.addEventListener("input", function () {
    if (name.value.split(' ').length < 3) {
        name.setCustomValidity("Имя введено некорректно");
    } else {
        name.setCustomValidity("");
    }
});

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("электронная почта введена некорректно");
    } else {
        email.setCustomValidity("");
    }
});

phone.addEventListener("input", function () {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneno.test(phone.value))   
        phone.setCustomValidity("");
    else 
        phone.setCustomValidity("Номер введен некорректно"); 
});