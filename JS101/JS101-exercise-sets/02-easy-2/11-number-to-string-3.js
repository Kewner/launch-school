// Write a function that converts a non-negative integer value (e.g., 0, 1, 2,
// 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way
// and construct the string by analyzing and manipulating the number.

// Understanding the problem
// =========================
// Input: a non-negative integer
// Output: the string representation of the input integer
// Rules:
// - Don't use any of the conversion functions or an expression like '' + num.
// - Construct the string by analyzing and manipulating the number.

// Mental model
// ============
// To isolate each digit, loop until num equals 0
// 4321 % 10 / 1 to get 1         subtract 1 from 4321
// 4320 % 100 / 10 to get 2       subtract 20 from 4320
// 4300 % 1000 / 100 to get 3     subtract 300 from 4300
// 4000 % 10000 / 1000 to get 4   subtract 4000 from 40000

// Data structures/algorithm
// =========================
// 1. Create a variable stringNums and assign to it an object with the numbers
//    0 - 9 as keys, and the corresponding string values as values.
// 2. Create a variable 'result' with an empty string ''
// 3. Create variable remainderNum with value of 10.
// 4. Loop until num equals 0
//      - create variable divisionNum with value of remainderNum / 10
//      - add stringNums[num % remainderNum / divisionNum] to 'result'
//      - subtract num % remainderNum from num
//      - multiply remainderNum by 10
// 5. return 'result'

function integerToString(num) {
  const digits = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  let result = '';
  let remainderNum = 10;

  if (num === 0) result = digits[num];

  while (num > 0) {
    result = digits[num % remainderNum / (remainderNum / 10)] + result;
    num -= num % remainderNum;
    remainderNum *= 10;
  }

  return result;
}

// Examples
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

// LS solution:

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

// Inside the do...while loop:
// 1. Seperate the last digit from 'number' by doing 'number' % 10.
// 2. Reassign 'number' to 'number' without the last digit.
// 3. Add the separated digit to the beginning of 'result'.
// 4. Repeat 1-3 as long as 'number' is greater than 0.