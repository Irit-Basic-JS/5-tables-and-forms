let form = document.querySelector(".form");
let submitButton = document.querySelector(".submit");
let phoneNumber = document.querySelector(".phoneNumber");
let email = document.querySelector(".email")

function validPhone() {
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return phoneNumber.value.match(regex);
}

function validEmail() {
    let regex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return email.value.match(regex);
}

form.addEventListener("submit", (event) => {
    let valid = validEmail() && validPhone();
    if(!valid) {
        alert("Данные введены неправильно!");
        event.preventDefault();
    }
})