var hour8 = document.querySelector("#hour8");
var hour9 = document.querySelector("#hour9");
var hour10 = document.querySelector("#hour10");
var hour11 = document.querySelector("#hour11");
var hour12 = document.querySelector("#hour12");
var hour13 = document.querySelector("#hour13");
var hour14 = document.querySelector("#hour14");
var hour15 = document.querySelector("#hour15");
var hour16 = document.querySelector("#hour16");
var hour17 = document.querySelector("#hour17");
var hour18 = document.querySelector("#hour18");
var safe = document.querySelector("span");
var message = document.querySelector("textarea")

renderDescription();
function displayMessage(type, message) {
  message.textContent = message;
  message.setAttribute("class", type);
}

function renderDescription() {
    var hour8 = localStorage.getItem("hour8");
    if (hour8) {
      return;
    }
    safe.textContent = span;
  }

  signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    var hour8 = document.querySelector("#hour8").value;
    if (hour8 === "") {
      localStorage.setItem("");
      renderDescription();
    }
  });