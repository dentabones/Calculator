"use strict";

const addNum = (num1, num2) => num1 + num2;

const subtractNum = (num1, num2) => num1 - num2;

const multiplyNum = (num1, num2) => num1 * num2;

const divideNum = (num1, num2) => num1 / num2;

let number1 = 5;
let number2 = 4;

const operate = function (operation, num1, num2) {
  return operation(num1, num2);
};

console.log(operate(addNum, number1, number2));
