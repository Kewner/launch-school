// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power. Do not
// worry about validating the input.

const RLSYNC = require('readline-sync');

function prompt(string) {
  console.log(`==> ${string}`);
}

function calculate(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
  prompt(`${num1} / ${num2} = ${num1 / num2}`);
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}

prompt('Enter the first number:');
let number1 = Number(RLSYNC.question());

prompt('Enter the second number:');
let number2 = Number(RLSYNC.question());

calculate(number1, number2);

// Discussion
// There are some edge cases to consider in this exercise. We have to be
// careful of not having a second number that is zero.