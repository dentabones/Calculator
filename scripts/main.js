"use strict";

const numberButtons = document.querySelectorAll(".number");
const operateButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear-btn");
const display = document.querySelector("h1");
const equalsButton = document.querySelector(".equals");

let numberStored1 = [];
let numberStored2 = [];
let numA;
let numB;
let numFinal = 0;
let operatorStored;

const addNum = (num1, num2) => num1 + num2;

const subtractNum = (num1, num2) => num1 - num2;

const multiplyNum = (num1, num2) => num1 * num2;

const divideNum = (num1, num2) => num1 / num2;

const operate = function (operation, num1, num2) {
  return operation(num1, num2);
};

const equals = function () {
  if (operatorStored === "+") {
    numFinal = operate(addNum, numA, numB);
    display.textContent = numFinal;
  } else if (operatorStored === "-") {
    numFinal = operate(subtractNum, numA, numB);
    display.textContent = numFinal;
  } else if (operatorStored === "*") {
    numFinal = operate(multiplyNum, numA, numB);
    display.textContent = numFinal;
  } else if (operatorStored === "/") {
    numFinal = operate(divideNum, numA, numB);
    display.textContent = numFinal;
  }

  numA = numFinal;
  numberStored1 = [numA];
  numberStored2 = [];
};

const displayClick1 = numberButtons.forEach((button) =>
  button.addEventListener("click", function () {
    if (numberStored1.length !== 0 && operatorStored !== undefined) {
      numberStored2.push(Number(button.value));
      numB = Number(numberStored2.join(""));

      display.textContent = numA + operatorStored + numB;
      Number(numB);
    } else if (operatorStored === undefined) {
      numberStored1.push(Number(button.value));
      numA = Number(numberStored1.join(""));
      display.textContent = numA;
      Number(numA);
    }
    // display.textContent = button.value;
  })
);

operateButtons.forEach((button) =>
  button.addEventListener("click", function () {
    if (numberStored1.length === 0 && numberStored2.length === 0) {
      return;
    }

    if (button.value === "+") {
      operatorStored = button.value;
      display.textContent = numA + " " + operatorStored;
    } else if (button.value === "-") {
      operatorStored = button.value;
      display.textContent = numA + " " + operatorStored;
    } else if (button.value === "*") {
      operatorStored = button.value;
      display.textContent = numA + " " + operatorStored;
    } else if (button.value === "/") {
      operatorStored = button.value;
      display.textContent = numA + " " + operatorStored;
    }
  })
);

clearButton.addEventListener("click", function () {
  display.innerHTML = "0";
  numberStored1 = [];
  numberStored2 = [];
  numA = 0;
  numB = 0;
  operatorStored = undefined;
});

equalsButton.addEventListener("click", equals);
