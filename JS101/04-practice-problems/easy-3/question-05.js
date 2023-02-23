// The following function unnecessarily uses two return statements to
// return boolean values. How can you eliminate the unnecessary duplication?
// Try to come up with at least two different solutions.

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// -----------------------------------------------------------------------------

// 1. Returning the result of the || operator
// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// Simplified to an arrow function:
// const isColorValid = color => color === "blue" || color === "green";

// 2. Returning the result of includes():
const isColorValid = color => ['blue', 'green'].includes(color);

// 3. Returning a colorIsValid variable:
// function isColorValid(color) {
//   let colorIsValid;

//   if (color === "blue" || color === "green") {
//     colorIsValid = true;
//   } else {
//     colorIsValid = false;
//   }
//   return colorIsValid;
// }

console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('purple'));