const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

(function errorCheck(input) {
	const form = document.getElementById('formk');
	const input = document.getElementById('email-input');
	const uierror = document.querySelector('.ui-error');

	form.addEventListener('submit', function(e) {
		e.preventDefault();
	});

})();
