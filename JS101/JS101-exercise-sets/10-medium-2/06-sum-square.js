// Write a function that computes the difference between the square of the sum
// of the first 'count' positive integers and the sum of the squares of the first
// 'count' positive integers.

// Understanding the problem
// =========================
// input: an integer
// output: an integer
// rules:
//  explicit:
//    - we need to calculate the difference between:
//          - the square of the sum of the first 'count' positive integers, and
//          - the sum of the squares of the first 'count' positive integers
//  implicit:
//    - input is always an integer

// Data structures
// ===============
// we will only need numbers

// Algorithm
// =========
// 1. declare variable 'squareOfSum' with 0
// 2. declare variable 'sumOfSquare' with 0
// 3. loop through numbers 1 to (and including) 'num'
//      - add each number to 'squareOfSum'
//      - add the square of each number to 'sumOfSquare'
//    end of loop
// 4. return the square of 'squareOfSum' - 'sumOfSquare'

function sumSquareDifference(num) {
  let squareOfSum = 0;
  let sumOfSquare = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    squareOfSum += idx;
    sumOfSquare += idx**2;
  }

  return squareOfSum**2 - sumOfSquare;
}

// More concise solution:
function sumSquareDifference(num) {;
  let count = [...Array(num).keys()].map(num => num + 1); // [1, 2, 3]
  let squareOfSum = count.reduce((total, num) => total + num, 0) ** 2;
  let sumOfSquare = count.reduce((total, num) => total + num ** 2, 0);

  return squareOfSum - sumOfSquare;
}

// Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150