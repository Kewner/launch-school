// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must
// be greater than the length of the longest side, and every side must have a
// length greater than 0. If either of these conditions is not satisfied, the
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments, and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Understanding the problem
// =========================
// input: 3 numbers, representing the length of the side of the triangle
// output: a string, informing the user about the triangle
// rules:
//  explicit:
//  - to be a valid triangle:
//      - the sum of the the two shortest sides must be greater than the longest
//      - all sides must be greater than 0
//  - equilateral: all three sides are equal
//  - isosceles: two sides are of equal length
//  - scalene: all three sides are of different lengths
//  - return the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'
//  impicit:
//  - input is always 3 numbers

// Data structures
// ===============
// we only need to work with numbers and compare them

// Algorithm
// =========
// 0. declare 'triangle' with empty string
// 1. compare num1 to num2
//      - if equal, set 'triangle' to 'isosceles'

// 1. declare 'triangle' with empty string
// 2. declare 'numArr' containing all three numbers
// 3. 

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3].sort();

  if ((arr[0] + arr[1] <= arr[2]) || (arr.some(n => n <= 0))) return 'invalid';
  if (arr.every(num => arr[0] === num)) return 'equilateral';
  if (arr[0] === arr[1] || arr[1] === arr[2]) return 'isosceles';
  return 'scalene';
}

// function isInvalid(arr) {
//   return (arr[0] + arr[1] <= arr[2]) || (arr.some(num => num <= 0));
// }

// Examples:
console.log((triangle(3, 3, 3)));      // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"