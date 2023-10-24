import "./style.css";
//* Functions that handle the hide and show steps cards
function nextStep(next) {
  document.getElementById(`step-${next}`).classList.add("active");
  document.getElementById(`step-${next - 1}`).classList.remove("active");
}

function prevStep(prev) {
  document.getElementById(`step-${prev}`).classList.add("active");
  document.getElementById(`step-${prev + 1}`).classList.remove("active");
}
