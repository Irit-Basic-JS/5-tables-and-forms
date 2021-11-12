const phone = document.querySelector('#phone');

phone.oninput = () => {
    phone.setCustomValidity(/(\+7 ?)?\d{3} ?\d{3}-?\d{2}-?\d{2}/.test(phone.value) === false
        ? "Неверный формат"
        : "");
};
