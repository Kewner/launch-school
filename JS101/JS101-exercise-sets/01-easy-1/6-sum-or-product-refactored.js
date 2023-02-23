// Write a program that asks the user to enter an integer greater than
// 0, then asks whether the user wants to determine the sum or the
// product of all numbers between 1 and the entered integer, inclusive.

let rlSync = require('readline-sync');

// Function to get a number from the user
function getNum(question) {
  return Number(rlSync.question(question + '\n'));
}

// Function to calculate the sum
function sum(number) {
  let result = 0;
  for (let i = 1; i <= number; i += 1) {
    result += i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${result}.`);
}

// Function to calculate the product
function product(number) {
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }
  console.log(`The product of the integers between 1 and ${number} is ${result}.`);
}

// Get number greater than 0 from user, validate input
let num = getNum('Please enter a number greater than 0.');

while (Number.isNaN(num) || num <= 0) {
  num = getNum('Please enter a number greater than 0!');
}

// Ask if user wants sum or product, validate input
let sumOrProduct = getNum("Enter '1' for a sum or '2' for a product");

while (sumOrProduct !== 1 && sumOrProduct !== 2) {
  sumOrProduct = getNum("Please enter either '1' or '2'!");
}

// Call the necessary function
if (sumOrProduct === 1) {
  sum(num);
} else if (sumOrProduct === 2) {
  product(num);
}