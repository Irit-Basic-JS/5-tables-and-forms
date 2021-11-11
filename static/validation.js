const name = document.querySelector('#name');
const phone = document.querySelector('#phone');

name.addEventListener('input', () => name.setCustomValidity(name.value.length < 3 ? 'Имя введено некорректно' : ''));

phone.addEventListener('input', () => phone.setCustomValidity(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone.value) 
    ? '' 
    : 'Номер введен некорректно'));