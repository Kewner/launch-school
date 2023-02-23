// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the end
// and shift the remaining digits to the left.

// understanding the problem
// =========================
// input: two numbers
// output: a number
// rules:
//  - transform the original number, then return the new number:
//      - take the second number
//      - take that amount of the last digits of the first number
//      - of that group, rotate the first digit to the end of that group
//      - return the transformed number
// questions:
//  - what if the second number is greater than the amount of digits in the first?
//  - can I expect both arguments to always be a number?
//  - what if one of the numbers is a negative number?

// data structure
// ==============
// - we can turn the first number into a string so we can iterate over it

// algorithm
// =========
// 1. turn the number into a string and assign that to 'numString'
// 2. declare empty string variable 'rotatedString'
// 3. declare empty variable 'lastChar'
// 4. loop through characters of 'numString'
//      - if index is 'numString' length minus secondArg, assign character of this
//        index to 'lastChar'
//      - otherwise, add character to 'rotatedString'
// 5. add 'lastChar' to 'rotatedString'
// 6. turn 'rotatedString' into number and return number

function rotateRightmostDigits(num1, num2) {
  let numString = String(num1);
  let rotatedString = '';
  let lastChar = '';

  for (let idx = 0; idx < numString.length; idx++) {
    if (idx === numString.length - num2) {
      lastChar = numString[idx];
    } else {
      rotatedString += numString[idx];
    }
  }

  return Number(rotatedString + lastChar);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917