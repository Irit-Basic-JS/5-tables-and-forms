let form = document.querySelector(".formWithValidation");
let phone = form.querySelector(".phone");
let email = form.querySelector(".email");
let fields = form.querySelectorAll(".field");


form.addEventListener('submit', function (event) {
    for(let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          alert('Заполните все поля');
          event.preventDefault();
          break;
        }
    }

    let reMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if(!reMail.test(email.value)) {
        alert('Некорректный email');
        event.preventDefault();
    }

    let rePhone = /^\d[\d\(\)\ -]{4,14}\d$/;
    if(!rePhone.test(phone.value)) {
        alert('Некорректный номер телефона'); 
        event.preventDefault();
    }
})