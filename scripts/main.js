"use strict";

const numberButtons = document.querySelectorAll(".number");
const operateButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear-btn");
const display = document.querySelector("h1");
const equalsButton = document.querySelector(".equals");

let numberStored1;
let numberStored2;
let operatorStored;

const addNum = (num1, num2) => num1 + num2;

const subtractNum = (num1, num2) => num1 - num2;

const multiplyNum = (num1, num2) => num1 * num2;

const divideNum = (num1, num2) => num1 / num2;

const operate = function (operation, num1, num2) {
  return operation(num1, num2);
};

const displayClick1 = numberButtons.forEach((button) =>
  button.addEventListener("click", function () {
    display.textContent = button.value;

    if (numberStored1 !== undefined) {
      numberStored2 = Number(button.value);
      display.textContent = numberStored1 + operatorStored + numberStored2;
    } else {
      numberStored1 = Number(button.value);
    }
  })
);

operateButtons.forEach((button) =>
  button.addEventListener("click", function () {
    if (button.value === "+") {
      operatorStored = button.value;
      display.textContent = numberStored1 + " " + operatorStored;
    } else if (button.value === "-") {
      operatorStored = button.value;
      display.textContent = numberStored1 + " " + operatorStored;
    } else if (button.value === "*") {
      operatorStored = button.value;
      display.textContent = numberStored1 + " " + operatorStored;
    } else if (button.value === "/") {
      operatorStored = button.value;
      display.textContent = numberStored1 + " " + operatorStored;
    }
  })
);

clearButton.addEventListener("click", function () {
  display.innerHTML = "0";
  numberStored1 = undefined;
  numberStored2 = undefined;
  operatorStored = "";
});

equalsButton.addEventListener("click", function () {
  if (operatorStored === "+") {
    operate(addNum, numberStored1, numberStored2);
  } else if (operate === "-") {
    operate(subtractNum, numberStored1, numberStored2);
  } else if (operate === "*") {
    operate(multiplyNum, numberStored1, numberStored2);
  } else if (operate === "/") {
    operate(divideNum, numberStored1, numberStored2);
  }
});
