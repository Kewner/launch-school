// Further Exploration
// What if the input was an array of integers instead of just a single
// integer? How would your computeSum and computeProduct functions
// change?

// Function to calculate the sum
function sum(array) {
  let result = 0;

  for (let index = 0; index < array.length; index += 1) {
    result += array[index];
  }

  console.log(`The sum of the numbers in the array is ${result}.`);
}

// Function to calculate the product
function product(array) {
  let result = 1;

  for (let index = 0; index < array.length; index += 1) {
    result *= array[index];
  }

  console.log(`The product of the numbers in the array is ${result}.`);
}

sum([1, 2, 3, 4]);
product([1, 2, 3, 4]);

// Given that the input is an array, how might you make use of
// the Array.prototype.reduce() method?

function sumReduce(array) {
  let result = array.reduce((acc, cur) => acc + cur);
  console.log(`The sum of the numbers in the array is ${result}.`);
}

function productReduce(array) {
  let result = array.reduce((acc, cur) => acc * cur);
  console.log(`The product of the numbers in the array is ${result}.`);
}

sumReduce([1, 2, 3, 4]);
productReduce([1, 2, 3, 4]);