const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");

function isEmailValid(email) {
	return email.includes("@") && email.includes(".");
    // const regex = /[.]@[.].[.]]/;
	// return email.match(regex);
}

function isNumberValid(number) {
	const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
	return number.match(regex);
}

submit.addEventListener("click", function (ev) {
	if (!isEmailValid(email.value)) {
		alert("Incorrect email");
		ev.preventDefault();
	}

	if (!isNumberValid(phone.value)) {
		alert("Incorrect number");
		ev.preventDefault();
	}
});