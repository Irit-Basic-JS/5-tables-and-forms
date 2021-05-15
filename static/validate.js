let form = document.querySelector('form');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let submit = document.querySelector('.buttons input[type="submit"]');
let reset = document.querySelector('.buttons input[type="reset"]');

form.addEventListener('input', function () {
    if (phone.value && email.value) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

reset.addEventListener('click', function () {
    form.querySelector('.invalid-phone').textContent = '';
    phone.classList.remove('invalid');
    form.querySelector('.invalid-email').textContent = '';
    email.classList.remove('invalid');
})

submit.addEventListener('click', function (evt) {
    if (!isValidEmail(email.value)) {
        showInvalidInputEmail();
        evt.preventDefault();
    }

    if (!isValidPhone(phone.value)) {
        showInvalidInputPhone();
        evt.preventDefault();
    }
});

phone.addEventListener('input', function () {
    phone.classList.remove('invalid');
    form.querySelector('.invalid-phone').textContent = ''
})

email.addEventListener('input', function () {
    email.classList.remove('invalid');
    form.querySelector('.invalid-email').textContent = ''
})

function isValidPhone(number) {
    let regex = /\+\d \(\d\d\d\) \d\d\d-\d\d-\d\d/;
    return number.match(regex);
}

function isValidEmail(email) {
    let regex = /.+@.+/
    return email.match(regex);
}

function showInvalidInputPhone() {
    phone.classList.add('invalid');
    let tip = form.querySelector('.invalid-phone');
    tip.textContent = 'Неправильный формат';
}

function showInvalidInputEmail() {
    email.classList.add('invalid');
    let tip = form.querySelector('.invalid-email');
    tip.textContent = 'Неправильный формат';
}
