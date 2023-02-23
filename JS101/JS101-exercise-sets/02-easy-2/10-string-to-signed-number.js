// In the previous exercise, you developed a function that converts simple
// numeric strings to integers. In this exercise, you're going to extend that
// function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the first
// character is a +, your function should return a positive number; if it is a -,
// your function should return a negative number. If no sign is given, you
// should return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in
// JavaScript, such as parseInt() and Number(). You may, however, use the
// stringToInteger() function from the previous lesson.

// return negative if first character is a -
// return positive if first character is a +
// return positive if no sign is given

function stringToInteger(digitStr) {
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
    9: 9
  }

  let value = 0;

  let arrayOfDigits = digitStr.split('').map(char => NUMBERS[char]);
  arrayOfDigits.forEach(num => value = (value * 10) + num);

  return value;
}

function stringToSignedInteger(digitStr) {
  let absoluteDigitStr;

  // remove - or + from string
  if (digitStr[0] === '-' || digitStr[0] === '+') {
    absoluteDigitStr = digitStr.slice(1);
  } else {
    absoluteDigitStr = digitStr;
  }

  // convert string to number
  let absoluteDigit = stringToInteger(absoluteDigitStr);

  // return the correct number
  if (digitStr[0] === '-') {
    return -absoluteDigit;
  } else {
    return absoluteDigit;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// LS solution (much better)
function stringToSignedInteger1(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));
    case '+':
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger1('-134'));
console.log(stringToSignedInteger1('15'));
console.log(stringToSignedInteger1('+1443'));