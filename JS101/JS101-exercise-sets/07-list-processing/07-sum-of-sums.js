// Write a function that takes an array of numbers, and returns the sum of the
// sums of each leading subsequence for that array. You may assume that the
// array always contains at least one number.

// Understanding the problem
// =========================
// Input: an array of numbers
// Output: the sum of the sums of each leading subsequence for that array
// Rules:
// - the input array always contains at least one number

// Mental model/algorithm
// ============
// Example: [2, 6, 3] would be (2) + (2 + 6) + (2 + 6 + 3) = 21

// 1. Declare 'sum' variable and assign it to 0.
// 2. Iterate through the numbers in the array.
//      - For each iteration, iterate through all array elements with 'length'
//          - 

function sumOfSums(arr) {
  return arr.reduce((acc, _, idx) => {
    return acc + arr.slice(0, idx + 1).reduce((acc, cur) => acc + cur, 0);
  }, 0);
}

// Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// The inner reduce function sums all the numbers of the array indices 0 to
// 'idx + 1', and returns the result to the outer reduce function. The outer
// reduce function adds all the results and returns the sum of sums.