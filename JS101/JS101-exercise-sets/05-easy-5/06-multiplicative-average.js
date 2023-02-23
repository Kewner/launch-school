// Write a function that takes an array of integers as input, multiplies all of
// the integers together, divides the result by the number of entries in the
// array, and returns the result as a string with the value rounded to three
// decimal places.

// multiply all integers together (reduce)
// divide the result by the number of elements
// round value to 3 decimal places
// return result as string

function multiplicativeAverage(arr) {
  return ((arr.reduce((acc, cur) => acc * cur, 1)) / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
multiplicativeAverage([3, 5, 4]);                //

// LS solution:
function multiplicativeAverage2(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}