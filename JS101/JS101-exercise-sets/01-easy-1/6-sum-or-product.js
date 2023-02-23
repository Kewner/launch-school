// Write a program that asks the user to enter an integer greater than
// 0, then asks whether the user wants to determine the sum or the
// product of all numbers between 1 and the entered integer, inclusive.

let rlSync = require('readline-sync');

function sum(number) {
  let result = 0;
  for (let i = 1; i <= number; i += 1) {
    result += i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${result}.`);
}

function product(number) {
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }
  console.log(`The product of the integers between 1 and ${number} is ${result}.`);
}

// Get number greater than 0 from user
console.log('Please enter a number greater than 0.');
let num = Number(rlSync.question(''));

// Check if input is number, and greater than 0
while (Number.isNaN(num) || num <= 0) {
  console.log('Please enter a number greater than 0!');
  num = Number(rlSync.question(''));
}

// Ask if user wants sum or product
console.log("Enter '1' for the sum or '2' for the product");
let sumOrProduct = Number(rlSync.question(''));

// Check if input is either 1 or 2
while (sumOrProduct !== 1 && sumOrProduct !== 2) {
  console.log("Please enter either '1' or '2'!");
  sumOrProduct = Number(rlSync.question(''));
}

if (sumOrProduct === 1) {
  sum(num);
} else if (sumOrProduct === 2) {
  product(num);
}