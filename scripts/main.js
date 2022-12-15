"use strict";

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector("h1");
let numberStored;
const addNum = (num1, num2) => num1 + num2;

const subtractNum = (num1, num2) => num1 - num2;

const multiplyNum = (num1, num2) => num1 * num2;

const divideNum = (num1, num2) => num1 / num2;

const operate = function (operation, num1, num2) {
  return operation(num1, num2);
};

const displayClick = numberButtons.forEach((button) =>
  button.addEventListener("click", function () {
    display.textContent = button.value;
    numberStored = button.value;
    console.log(numberStored);
  })
);
