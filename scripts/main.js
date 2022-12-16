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

console.table(numberStored1, numberStored2, numA, numB);

const addNum = (num1, num2) => num1 + num2;

const subtractNum = (num1, num2) => num1 - num2;

const multiplyNum = (num1, num2) => num1 * num2;

const divideNum = (num1, num2) => num1 / num2;

const operate = function (operation, num1, num2) {
  return operation(num1, num2);
};

const equals = function () {
  if (numberStored1.length === 0 && numberStored2.length === 0 && numB === 0) {
    clear();
    return;
  }
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
  console.log(numberStored1, numberStored2, numA, numB);
  numA = numFinal;
  operatorStored = undefined;
  numberStored1 = [numA];
  numberStored2 = [];
};

const clear = function () {
  display.innerHTML = "0";
  numberStored1 = [];
  numberStored2 = [];
  numA = 0;
  numB = 0;
  numFinal = 0;
  operatorStored = undefined;
};

numberButtons.forEach((button) =>
  button.addEventListener("click", function () {
    //Able to enter second number in once first number and operator have been entered
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
    //Enter first nubmer as long as operator is undefined
    // display.textContent = button.value;
  })
);

operateButtons.forEach((button) =>
  button.addEventListener("click", function () {
    //will return out of function if no numbers have been entered
    if (numberStored1.length === 0 && numberStored2.length === 0) {
      return;
    }

    //added coniditional for when another operator is selected, it will compute before it adds the new operator in
    if (operatorStored === undefined) {
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
    } else if (operatorStored !== undefined) {
      equals();
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
    }
  })
);

clearButton.addEventListener("click", clear);

equalsButton.addEventListener("click", equals);
