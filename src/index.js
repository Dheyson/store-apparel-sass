const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

(function errorCheck() {
	const form = document.getElementById('formk');
	const input = document.getElementById('email-input');
	const uierror = document.querySelector('.ui-error');

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		if (emailPattern != input.value) {
			const p = document.createElement('p');
			p.textContent = 'Please provide a valid email'
			input.style.borderColor = "hsl(0, 93%, 68%)";
			input.style.borderWidth = "2px";
			uierror.appendChild(p);
			form.appendChild(uierror);
		}
	});

})();
