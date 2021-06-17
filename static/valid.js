let form = document.querySelector(".form");
let submitButton = document.querySelector(".submit");
let phoneNumber = document.querySelector(".phoneNumber");
let email = document.querySelector(".email")


function checkValidPhone() {
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return (!regex.test(phoneNumber.value));
}

function checkValidEmail() {
    let regex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return (!regex.test(email.value));
}

form.addEventListener("submit", (event) => {
    let checkValid = checkValidEmail() && checkValidPhone();
    if(!checkValid) {
        alert("Данные введены неправильно!");
        event.preventDefault();
    }
}) 