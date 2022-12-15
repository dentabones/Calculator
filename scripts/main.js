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
    if (numberStored1.length !== 0 && operatorStored !== undefined) {
      numberStored2.push(Number(button.value));
      numB = numberStored2.join("");
      Number(numB);
      display.textContent = numA + operatorStored + numB;
    } else if (operatorStored === undefined) {
      numberStored1.push(Number(button.value));
      numA = numberStored1.join("");
      Number(numA);

      display.textContent = numA;
    }
    // display.textContent = button.value;
  })
);

operateButtons.forEach((button) =>
  button.addEventListener("click", function () {
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
  operatorStored = undefined;
});

equalsButton.addEventListener("click", function () {
  if (operatorStored === "+") {
    console.log(operate(addNum, numberStored1, numberStored2));
  } else if (operate === "-") {
    operate(subtractNum, numberStored1, numberStored2);
  } else if (operate === "*") {
    operate(multiplyNum, numberStored1, numberStored2);
  } else if (operate === "/") {
    operate(divideNum, numberStored1, numberStored2);
  }
});
