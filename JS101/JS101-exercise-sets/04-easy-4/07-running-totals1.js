// Write a function that takes an array of numbers, and returns an array with the
// same number of elements, with each element's value being the running total
// from the original array.

// function runningTotal(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     let numToAdd = 0;

//     for (let x = i; x >= 0; x -= 1) {
//       numToAdd += arr[x];
//     }

//     result.push(numToAdd);
//   }

//   return result;
// }

// LS solution
// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push((sum += array[idx]));
//   }

//   return resultArray;
// };

// Sam Clark solution
// function runningTotal(arr) {
//   let result = [];
//   arr.forEach((num, idx) => result.push((num + result[idx - 1] || num)));
//   return result;
// }

// Further exploration
// Can you rewrite the solution using the Array.prototype.map method? What types
// of problems do you think are well-suited for the Array.prototype.map method?

function runningTotal(arr) {
  let sum = 0;

  let result = arr.map((num, idx) => {
    return sum += num;
  });

  return result;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []