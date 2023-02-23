// The parseInt() method converts a string of numeric characters (including an
// optional plus or minus sign) to an integer. The method takes 2 arguments
// where the first argument is the string we want to convert and the second
// argument should always be 10 for our purposes. parseInt() and the Number()
// method behave similarly. In this exercise, you will create a function that
// does the same thing.

// Write a function that takes a String of digits, and returns the appropriate
// number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about
// invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in
// JavaScript, such as String() and Number(). Your function should do this the
// old-fashioned way and calculate the result by analyzing the characters in the
// string.

function stringToInteger(digitString) {
  const NUMBERS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10
  }

  digitString = digitString.split('').reverse();
  let result = 0;

  for (let idx = 0; idx < digitString.length; idx += 1) {
    result += NUMBERS[digitString[idx]] * (10 ** idx);
  }

  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// Further Exploration
// Write a hexadecimalToInteger() function that converts a string representing a
// hexadecimal number to its integer value. Note that hexadecimal numbers use
// base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the
// lowercase equivalents) correspond to decimal values of 10-15.

function hexadecimalToInteger(hexString) {
  const HEX_NUMBERS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  }

  let result = 0;

  hexString = hexString.toLowerCase();
  let arrayOfDigits = hexString.split('').map(char => HEX_NUMBERS[char]);
  arrayOfDigits.forEach(num => result = (result * 16) + num);

  return result;
}

console.log(hexadecimalToInteger('4D9f')); // 19871

// line 75: '4D9f' is turned into '4d9f'
// line 76: using map and HEX_NUMBERs, arrayOfDigits is created: [4, 13, 9, 15]
// line 77:
//    - result = 0 * 16 + 4 = 4
//    - result = 4 * 16 + 13 = 77
//    - result = 77 * 16 + 9 = 1241
//    - result = 1241 * 16 + 15 = 19871

// This is basically the same as: 4 * 16^3 + 13 * 16^2 + 9 * 16^1 + 15 * 16^0