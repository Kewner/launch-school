// Write two distinct ways of reversing the array without mutating the original
// array. Use reverse() for the first solution, and sort() for the second.

let numbers = [1, 2, 3, 4, 5];

// Using reverse()
numbers.slice().reverse();  // [ 5, 4, 3, 2, 1 ]

// Using sort()
numbers.slice().sort((num1, num2) => num2 - num1);  // [ 5, 4, 3, 2, 1 ]

// Or:
[...numbers].sort((num1, num2) => num2 - num1); // [ 5, 4, 3, 2, 1 ]

// Bonus Question: Can you do it using the Array.prototype.forEach() method?
let reversedNumbers = [];

numbers.forEach((num) => {
  reversedNumbers.unshift(num);
})

console.log(reversedNumbers); // logs [ 5, 4, 3, 2, 1 ]