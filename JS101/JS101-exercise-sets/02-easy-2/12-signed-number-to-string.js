// In the previous exercise, you developed a function that converts non-negative
// numbers to strings. In this exercise, you're going to extend that function by
// adding the ability to represent negative numbers as well.

// Write a function that takes an integer, and converts it to a string
// representation.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String() and Number.prototype.toString(). You may,
// however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

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

function signedIntegerToString(num) {
  let sign = '';

  if (Math.sign(num) === 1) {
    sign = '+';
  } else if (Math.sign(num) === -1) {
    sign = '-';
    num = -num;
  }

  return sign + integerToString(num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

// LS solution:
function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

// Cool solution by Sam:
function signedIntegerToString(num) {
  if (!num) return '0';
  let sign = num < 0 ? -1 : 1;
  return (sign < 0 ? '-' : '+') + integerToString(num * sign);
}

// Cool solution by Bob Rodes:
function signedIntegerToString(int) {
  const SIGNS = {'+': 1, '-': -1, '': 0};
  const sign = Object.keys(SIGNS).find((key) => SIGNS[key] === Math.sign(int));

  return sign + integerToString(Math.abs(int));
}