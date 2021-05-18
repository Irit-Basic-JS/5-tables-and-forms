let form = document.querySelector(".form");
let phone = document.querySelector(".phone");
let email = document.querySelector(".email");
let submit = document.querySelector(".submit");


function validPhone() {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    return phone.value.match(re);
}

function validMail() {
    let re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return email.value.match(re);
}

form.addEventListener("submit", (event) => {
    let valid = validMail() && validPhone();
    if(!valid) {
        alert("Неправильный номер телефона или e-mail!");
        event.preventDefault();
    }
})