const submit = document.querySelector("input[type=submit]");
const phone = document.querySelector(".phone");

function isNumberValid(number) {
	const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
	return number.match(regex);
}

submit.addEventListener("click", function (ev) {
	if (!isNumberValid(phone.value)) {
		alert("Неверно введен номер телфона");
		ev.preventDefault();
	}
}); 