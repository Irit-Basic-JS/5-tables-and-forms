const submit = document.querySelector(".submit");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

function isEmailValid(email) {
	return email.includes("@");
}

function isNumberValid(number) {
	const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
	return number.match(regex);
}

submit.addEventListener("click", function (ev) {
	if (!isEmailValid(email.value) || !isNumberValid(phone.value)) {
		alert("Неверно введены данные");
		ev.preventDefault();
	}
});