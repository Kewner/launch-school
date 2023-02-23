// Write a function that takes an array of numbers, and returns an array with the
// same number of elements, with each element's value being the running total
// from the original array.

// Using a for loop
function runningTotal(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      result.push(arr[i]);
    } else {
      result.push(arr[i] + result[i - 1]);
    }
  }

  return result;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// LS solution
function runningTotal2(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx])); // sum += array[idx] returns new 'sum'
  }

  return resultArray;
}


runningTotal2([2, 5, 13]);             // [2, 7, 20]
runningTotal2([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal2([3]);                    // [3]
runningTotal2([]);                     // []

// Can you rewrite the solution using the Array.prototype.map method? What types
// of problems do you think are well-suited for the Array.prototype.map method?

function runningTotal3(array) {
  let sum = 0;

  let result = array.map(function(num) {
    sum = sum + num;
    return sum;
    // return (sum += num);   <= shorter way of writing it
  })

  return result;
}

runningTotal3([1, 2, 3, 4]);           // [1, 3, 6, 10]
runningTotal3([2, 5, 13]);             // [2, 7, 20]
runningTotal3([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal3([3]);                    // [3]
runningTotal3([]);                     // []