let submit = document.querySelector(".submit");
let tailLength = document.querySelector(".tailLength");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");

submit.addEventListener("click", function (event) {
    if (!isPhoneValid(phone.value) || !isEmailValid(email.value) || !isTailLengthValid(tailLength)) {
        console.log("not valid input!");
        event.preventDefault();
    }
})

function isPhoneValid(value) {
    let isValid =  value.match(/\d{11}/) != null && value.length === 11;
    if (!isValid) {
        console.log("phone is not valid");
    }
    return isValid;
}

function isEmailValid(value) {
    let isValid = value.match(/\w+@\w+\.\w+/);
    if (!isValid) {
        console.log("email is not valid");
    }
    return isValid;
}

function isTailLengthValid(value) {
    let isValid = value.match(/\d+/);
    if (!isValid) {
        console.log("tailLength is not valid");
    }
    return isValid;
}
