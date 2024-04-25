let first = "",
  ops,
  second = "",
  displayText = "";
isMath = false;
toAdd = false;
toSub = false;
toMul = false;
toDiv = false;
isDecimal = false;
let result = 0;
const containerButtons = document.getElementById("digits");
const buttonClear = document.getElementById("buttonClear");
const containerMath = document.getElementById("operators");
const displayx = document.getElementById("display");
const buttonDecimal = document.getElementById("btndecimal");
const buttonBack = document.getElementById("btnback");

const buttonEnter = document.getElementById("enter");

containerButtons.addEventListener("click", (e) => {
  if (!isMath) {
    first += e.target.innerText;
    displayText = first;
    updateDisplay();
  }
  if (isMath) {
    second += e.target.innerText;
    displayText = displayText + e.target.innerText;

    updateDisplay();
  }
});

containerMath.addEventListener("click", (e) => {
  if (!isMath) {
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
    displayText += e.target.innerText;
    isMath = true;
    updateDisplay();
  } else {
    operate();
  }
});

buttonClear.addEventListener("click", (e) => {
  (first = ""), (second = ""), (displayText = "");
  isMath = false;
  toAdd = false;
  toSub = false;
  toMul = false;
  toDiv = false;
  isDecimal = false;
  result = 0;
  updateDisplay();
});

buttonBack.addEventListener("click", (e) => {
  displayText = displayText.substring(0, displayText.length - 1);
  updateDisplay();
  if (!isMath) {
    first = first.substring(0, first.length - 1);
  }
  if (isMath) {
    second = second.substring(0, second.length - 1);
  }
  updateDisplay();
});

buttonDecimal.addEventListener("click", (e) => {
  if (!isDecimal) {
    if (!isMath) {
      first += ".";
    }
    if (isMath && second != "") {
      second = +".";
    }
    isDecimal = true;
  }

  updateDisplay();
});

function updateDisplay() {
  displayx.setAttribute("value", displayText);
  //console.log(" first: " + first + isMath + " second " + second);
}

buttonEnter.addEventListener("click", operate);

function operate() {
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
}

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
  resetEverything();
  updateDisplay();
}
function sub() {
  result = +first - +second;
  displayText = result;
  first = result;
  resetEverything();
  updateDisplay();
}
function mul() {
  result = +first * +second;
  displayText = result;
  first = result;
  resetEverything();
  updateDisplay();
}
function div() {
  result = +first / +second;
  displayText = result;
  first = result;
  resetEverything();
  updateDisplay();
}
