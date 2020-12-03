
const submitBtn = document.getElementById('submitbtn1');
var valid=true;
let userData;

submitBtn.addEventListener('click', function () {
	if (checkForm2()) {
		//Call PHP
		let jsonString = JSON.stringify(userData);
		postData(jsonString, 'register.php');	

		//after registration it will take the user to the university website
		window.open("success.html");
	}
});

function checkForm2() {
	// test the fields in the form

	// User name: Required, at least two letter long
	var firstname = document.getElementById('username1').value;
	var name_msg = document.getElementById('name_msg1');
	 valid = true;

	if (firstname.length < 3) {
		name_msg.innerHTML = "Name should be at least 2 letter in length";
		name_msg.className = 'error';	
		valid = false;

	}
	else {
		var firstname1 =firstname ;
		name_msg.innerHTML = "";
		name_msg.className = '';
	}


	//	EMAIL: is required, and must be valid email address
	var email = document.getElementById('email').value;
	var email_msg = document.getElementById('email_msg1');

	// regular expression for validation
	var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;

	if (email == "" || !emailRegExp.test(email)) {
		email_msg.innerHTML = "Must be a valid email address.";
		email_msg.className = 'error';
		valid = false;
	}
	else {
		var email1=email;
		email_msg.innerHTML = "";
		email_msg.className = '';
	}


	// Password: Required, at least 4 charecter long
	var password = document.getElementById('pwd1').value;
	var pwd_msg = document.getElementById('pwd_msg1');

	if (password.length < 4) {
		pwd_msg.innerHTML = "password should be at least 4 characters in length";
		pwd_msg.className = 'error';
		valid = false;
	}
	else {
		var password1= password;
		pwd_msg.innerHTML = "";
		pwd_msg.className = '';
	}


	var cpassword = document.getElementById('cpwd').value;
	var pwd_msg2 = document.getElementById('cpwd_msg');

	if (password != cpassword) {
		pwd_msg2.innerHTML = "Confirm Password does not matched";
		pwd_msg2.className = 'error';
		valid = false;
	}
	else {
		pwd_msg2.innerHTML = "";
		pwd_msg2.className = '';
	}

	//send the valid data in a key value pair
	userData = {
		'userName': firstname1,
		'email': email1,
		'password': password1
	}

	return valid;
}


async function postData(data, url) {
	const respose = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: data
	});
	return respose.json();
}