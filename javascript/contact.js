
window.onload = init;

function init() {
	// when page loads attach event to validate the form

	var formsubmit = document.getElementById("submit");
	if (formsubmit) {
		formsubmit.onclick = checkForm;
	}
}
function checkForm() {
	// test the fields in the form

	// FIRSTNAME: Required, at least one letter long
	var firstname = document.getElementById('firstname').value;
	var firstname_msg = document.getElementById('firstname_msg');
	var valid = true;

	if (firstname.length < 2) {
		firstname_msg.innerHTML = "Name should be at least 2 letter in length";
		firstname_msg.className = 'error';
		valid = false;
	}
	else {
		firstname_msg.innerHTML = "";
		firstname_msg.className = '';
	}


	// EMAIL: is required, and must be valid email address
	var email = document.getElementById('email').value;
	var email_msg = document.getElementById('email_msg');

	// regular expression for validation
	var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;

	if (email == "" && !emailRegExp.test(email)) {
		email_msg.innerHTML = "Must be a valid email address.";
		email_msg.className = 'error';
		valid = false;
	}
	else {
		email_msg.innerHTML = "";
		email_msg.className = '';
	}

	// PHONE: is required, and must be valid phone number address
	var phone = document.getElementById('phone').value;
	var ph_msg = document.getElementById('ph_msg');

	/*phone number of 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number.*/

	var phoneno = /^\d{10}$/;

	if (!phone.match(phoneno)) {
		ph_msg.innerHTML = "Must be a valid phone number.";
		ph_msg.className = 'error';
		valid = false;
	}
	else {
		ph_msg.innerHTML = "";
		ph_msg.className = '';
	}


	// FIRSTNAME: Required, at least one letter long
	var degree = document.getElementById('degree').value;
	var prog_msg = document.getElementById('prog_msg');
	var valid = true;

	if (degree.length == -1) {
		prog_msg.innerHTML = "Please enetre value for degree are you interested in? ";
		prog_msg.className = 'error';
		valid = false;
	}
	else {
		prog_msg.innerHTML = "";
		prog_msg.className = '';
	}

	return valid;
}

