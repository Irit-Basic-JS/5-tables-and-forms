let form = document.querySelector(".form");
let phone = document.querySelector("input[name='phone']");
let email = document.querySelector("input[name='email']");

function isPhoneValid() {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    return phone.value.match(re);
}

function isMailValid() {
    let re = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return email.value.match(re);
}

form.addEventListener("submit", (event) => {
    let validMail = isMailValid()
    let validPhone = isPhoneValid();
    if(!validMail) {
        alert("Неправильный e-mail");
        event.preventDefault();
    }
    if(!validPhone) {
        alert("Неправильный номер телефона");
        event.preventDefault();
    }
});