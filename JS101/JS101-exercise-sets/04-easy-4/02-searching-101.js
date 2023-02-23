// // Write a program that solicits six numbers from the user, then logs a message
// // that describes whether or not the sixth number appears amongst the first five
// // numbers.

// let rlSync = require('readline-sync');

// function prompt(msg) {
//   return rlSync.question(msg);
// }

// function askNumbers() {

// }

// let num1 = prompt('Enter the 1st number: ');
// let num2 = prompt('Enter the 2nd number: ');
// let num3 = prompt('Enter the 3rd number: ');
// let num4 = prompt('Enter the 4th number: ');
// let num5 = prompt('Enter the 5th number: ');
// let num6 = prompt('Enter the last number: ');

// let numsArray = [num1, num2, num3, num4, num5];

// if (numsArray.includes(num6)) {
//   console.log(`The number ${num6} appears in ${numsArray}.`);
// } else {
//   console.log(`The number ${num6} does not appear in ${numsArray}.`);
// }

// // Further exploration
// // What if the problem was looking for a number that satisfies some condition
// // (e.g., a number greater than 25), instead of a specific number? Would the
// // current solution still work? Why or why not?

// function includesGreaterThan(arr, compNum) {
//   let greaterThanArray = arr.filter(num => num > compNum);

//   if (greaterThanArray.length > 0) {
//     console.log(`${arr} includes a number greater than ${compNum}.`);
//   } else {
//     console.log(`${arr} doesn't include a number greater than ${compNum}.`);
//   }
// }

// includesGreaterThan([3, 6, 34], 25);
// includesGreaterThan([3, 6, 23], 25);

// // LS possible solution:
// function isIncluded(arr, val) {
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (arr[idx] > val) {
//       return true;
//     }
//   }

//   return false;
// }

// Explore the Array.prototype.some method, and see if you can change the
// possible solution shown above to make use of that method instead.

// With a fixed number to compare to:
const greaterThan = num => num > 25;

let arr1 = [1, 2, 55, 22];
console.log(arr1.some(greaterThan));

let arr2 = [1, 2, 18];
console.log(arr2.some(greaterThan));

// With a variable number to compare to:
function isGreaterThan(arr, num) {
  return arr.some(arrNum => arrNum > num);
}

console.log(isGreaterThan(arr1, 25));
console.log(isGreaterThan(arr2, 25));

// The some() method tests whether at least one element in the array passes the
// test implemented by the provided function. It returns a Boolean value. 