function calculateAge() {
	const dayInput = document.getElementById("day");
	const monthInput = document.getElementById("month");
	const yearInput = document.getElementById("year");

	const day = parseInt(dayInput.value);
	const month = parseInt(monthInput.value);
	const year = parseInt(yearInput.value);

	const today = new Date();
	const birthDate = new Date(year, month - 1, day);

	const showError = (inputElement, errorMessage) => {
		inputElement.style.borderColor = "red";
		const label = inputElement.parentElement.querySelector("label");
		label.style.color = "red";
		const errorElement = document.createElement("span");
		errorElement.innerText = errorMessage;
		errorElement.style.color = "red";
		inputElement.parentElement.appendChild(errorElement);
	};

	const clearError = (inputElement) => {
		inputElement.style.borderColor = "";
		const label = inputElement.parentElement.querySelector("label");
		label.style.color = "";
		const errorElement = inputElement.parentElement.querySelector("span");
		if (errorElement) {
			inputElement.parentElement.removeChild(errorElement);
		}
	};

	if (
		isNaN(birthDate.getTime()) ||
		day > 31 ||
		month > 12 ||
		year > today.getFullYear()
	) {
		document.getElementById("yearsResult").innerText = "";
		document.getElementById("monthsResult").innerText = "";
		document.getElementById("daysResult").innerText =
			"Invalid date. Please check your input. ";

		if (isNaN(day) || day === 0 || day > 31) {
			showError(dayInput, "Day must be between 1 and 31");
		} else {
			clearError(dayInput);
		}

		if (isNaN(month) || month === 0 || month > 12) {
			showError(monthInput, "Month must be between 1 and 12");
		} else {
			clearError(monthInput);
		}

		if (isNaN(year) || year === 0 || year > today.getFullYear()) {
			showError(yearInput, "Year must be a valid value");
		} else {
			clearError(yearInput);
		}

		return;
	}

	const ageDate = new Date(today - birthDate);
	const years = ageDate.getUTCFullYear() - 1970;
	const months = ageDate.getUTCMonth();
	const days = ageDate.getUTCDate() - 1;

	document.getElementById("yearsResult").innerText = years;
	document.getElementById("monthsResult").innerText = months;
	document.getElementById("daysResult").innerText = days;
}
