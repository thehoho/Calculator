let calculation = localStorage.getItem("calculation") || "";
displayCalculation();

function updateCalculation(character) {
  calculation += character;
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}
function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
