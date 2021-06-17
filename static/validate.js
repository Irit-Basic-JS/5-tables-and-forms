let form = document.querySelector('form');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let rules = document.getElementById('rules');
let submit = document.querySelector('.buttons input[type="submit"]');
let reset = document.querySelector('.buttons input[type="reset"]');

form.addEventListener('input', function () {
    if (phone.value && email.value && rules.checked) {
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
    
    let tail = document.querySelector('.tail');
    tail.textContent = '25';
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

phone.addEventListener('focusin', function () {
    phone.classList.remove('invalid');
    form.querySelector('.invalid-phone').textContent = ''

    if (!phone.value) {
        phone.value = '+7 ';
    }
})

phone.addEventListener('focusout', function () {
    if (phone.value.length == 3) {
        phone.value = '';
    }
})

phone.addEventListener('input', function (evt) {
    if (phone.value.length < 3) {
        phone.value = '+7 '
    }

    if (!evt.inputType.startsWith('delete')) {
        if (phone.value.length == 6) {
            phone.value += ' ';
        } else if ([10, 13].includes(phone.value.length)) {
            phone.value += '-';
        } else if (phone.value.length == 17) {
            phone.value = phone.value.slice(0, phone.value.length - 1);
        }
        phone.value = phone.value.replace(/[A-ZazА-Яа-я]/, '');
    } else {
        if ([6, 10, 13].includes(phone.value.length)) {
            phone.value = phone.value.slice(0, phone.value.length - 1);
        }
    }
})

email.addEventListener('focus', function () {
    email.classList.remove('invalid');
    form.querySelector('.invalid-email').textContent = ''
})

function isValidPhone(number) {
    let regex = /\+\d \d\d\d \d\d\d-\d\d-\d\d/;
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
