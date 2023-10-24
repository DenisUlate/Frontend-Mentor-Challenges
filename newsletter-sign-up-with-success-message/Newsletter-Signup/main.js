document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission

  // Get the email value
  var email = document.getElementById("email").value;

  // Perform any validation checks here (optional)

  // Hide the form and show the success message
  document.getElementById("form").classList.toggle("hidden");
  document.getElementById("confirmation-message").classList.toggle("hidden");
});
