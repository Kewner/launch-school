// A triangle is classified as follows:

//     Right: One angle is a right angle (exactly 90 degrees).
//     Acute: All three angles are less than 90 degrees.
//     Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments
// are in degrees.

// Understanding the problem
// =========================
// input: 3 numbers, representing angle degrees
// output: the type of triangle, or 'invalid'
// rules:
//  explicit:
//    - if one angle is 90 degrees, the triangle is 'right'
//    - if all angles are less than 90 degrees, the triangle is 'acute'
//    - if one angle is greater than 90 degrees, the triangle is 'obtuse'
//    - to be valid:
//          - the sum of the angles must be 180 degrees
//          - every angle must be greater than 0
//  implicit: none.

// Data structures
// ===============
// we can use an array containing all three angles

// Algorithm
// =========
// 1. declare 'arr' with all three angles
// 2. if an element of 'arr' is 0 or less, or all three elements combined do not equal 180, return 'invalid'
// 3. if exactly one element of 'arr' is 90, return 'right'
// 4. if all elements are less than 90, return 'acute'
// 5. if one of the elements is greater than 90, return 'obtuse'

function triangle(a1, a2, a3) {
  let arr = [a1, a2, a3];

  if (arr.some(angle => angle <= 0 ||
     (arr.reduce((total, angle) => total + angle)) !== 180)) return 'invalid';
  if (arr.filter(angle => angle === 90).length === 1) return 'right';
  if (arr.every(angle => angle < 90)) return 'acute';
  if (arr.filter(angle => angle > 90).length === 1) return 'obtuse';
}

// Examples:
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

let angles = [60, 70, 90];

// Another possibility is to extract code to helper functions, like below. Note
// that we DO NOT use parentheses when passing the function as an argument: the
// some() function will take care of invoking the function.
if (angles.some(testRightTriangle)) console.log('Right angle found!');

function testRightTriangle(angle) {
  return angle === 90;
}