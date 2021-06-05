let telephone = document.querySelector('input[name="phone"]');
let form = document.querySelector('form');

function validatePhone() {
	return telephone.value.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/);
}

form.addEventListener("submit", (event) => {
	let phone = validatePhone();
	if (!phone) {
		alert("Номер телефона не валиден");
		event.preventDefault();
	}
});
