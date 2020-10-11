const form = document.querySelector('form');
const errorIcon = document.querySelector('img.error');
const errorMsg = document.querySelector('p.warning');

// Form Validation

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const validateRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	validateRegEx.test(form.email.value)
		? (errorIcon.classList.add('hide'), errorMsg.classList.add('hide'))
		: (errorIcon.classList.remove('hide'), errorMsg.classList.remove('hide'));
});
