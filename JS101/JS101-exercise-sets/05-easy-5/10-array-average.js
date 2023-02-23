// Write a function that takes one argument, an array of integers, and returns
// the average of all the integers in the array, rounded down to the integer
// component of the average. The array will never be empty, and the numbers will
// always be positive integers.

// input: array of integers
// output: average of all integers in array, rounded down to the integer
// component of the average

function average(arr) {
  return Math.floor((arr.reduce((acc, cur) => acc + cur)) / arr.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

// using forEach
function average2(arr) {
  let sum = 0;
  arr.forEach(num => sum += num);
  
  return Math.floor(sum / arr.length);
}

average2([1, 5, 87, 45, 8, 8]);       // 25
average2([9, 47, 23, 95, 16, 52]);    // 40