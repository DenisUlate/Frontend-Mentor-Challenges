// Show an error if the user insert invalid email format.
function validarEmail() {
	var email = document.getElementById("email").value;
	var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!regex.test(email) || email.indexOf("@") === -1) {
		document.getElementById("error-email").style.display = "block";
		return false;
	} else {
		document.getElementById("error-email").style.display = "none";
		return true;
	}
}
