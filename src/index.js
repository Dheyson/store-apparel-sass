const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById('formk');
const input = document.getElementById('email-input');

function validate() {
	let text = '';
	if (!emailPattern.test(input.value)) {
		text = 'Please provide a valid email';
		input.className = 'ui-error';
	} else {
		text = '';
	}
	document.getElementById('test').textContent = text;
}

function submitForm() {
	const submitButton = document.getElementById("js-btn-submit");
	submitButton.addEventListener('click', function (e) {
		e.preventDefault();
		validate();
	});
}

function init() {
	submitForm();
}

document.addEventListener('DOMContentLoaded', init);
