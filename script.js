let first = "",
  ops,
  second = "",
  displayText = "";
isMath = false;
toAdd = false;
toSub = false;
toMul = false;
toDiv = false;
let result = 0;
const containerButtons = document.getElementById("digits");
const buttonClear = document.getElementById("buttonClear");
const containerMath = document.getElementById("operators");
const displayx = document.getElementById("display");

const buttonEnter = document.getElementById("enter");

containerButtons.addEventListener("click", (e) => {
  if (!isMath) {
    first += e.target.innerText;
    displayText = first;
    updateDisplay();
  }
  if (isMath) {
    second += e.target.innerText;
    displayText += second;
    updateDisplay();
  }
  console.log("first" + first);
  console.log("second" + second);
});

containerMath.addEventListener("click", (e) => {
  if (!isMath) {
    displayText += e.target.innerText;
    updateDisplay();
    if (e.target.innerText == "+") {
      toAdd = true;
    }
    if (e.target.innerText == "-") {
      toSub = true;
    }
    if (e.target.innerText == "/") {
      toDiv = true;
    }
    if (e.target.innerText == "*") {
      toMul = true;
    }
  }

  isMath = true;

  console.log(e.target.innerText, isMath);
});

buttonClear.addEventListener("click", (e) => {
  isMath = false;
  (first = ""), (second = "");
  displayx.setAttribute("value", "");
});

function updateDisplay() {
  displayx.setAttribute("value", displayText);
}

buttonEnter.addEventListener("click", (e) => {
  //call respective thing
  console.log("clicked");
  if (toAdd) {
    add();
  }
  if (toSub) {
    sub();
  }
  if (toMul) {
    mul();
  }
  if (toDiv) {
    div();
  }
});
function resetEverything() {
  isMath = false;
  toAdd = false;
  toSub = false;
  toMul = false;
  toDiv = false;
  second = "";
}

function add() {
  result = +first + +second;
  displayText = result;
  first = result;
  updateDisplay();
  resetEverything();
}
function sub() {
  result = +first - +second;
  displayText = result;
  first = result;
  updateDisplay();
  resetEverything();
}
function mul() {
  result = +first * +second;
  displayText = result;
  first = result;
  updateDisplay();
  resetEverything();
}
function div() {
  result = +first / +second;
  displayText = result;
  first = result;
  updateDisplay();
  resetEverything();
}
