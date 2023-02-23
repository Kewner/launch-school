// Write a function that takes a positive integer as an argument, and returns
// that number with its digits reversed.

function reverseNumber(num) {
  let reversedNumStr = String(num).split('').reverse().join('');
  let index = 0;

  while (reversedNumStr[index] === '0') {
    index += 1;
  }

  return Number(reversedNumStr.slice(index));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

// LS solution:
function reverseNumber1(number) {
  let numberStringArray = String(number).split('');
  let reversedStringedNum = numberStringArray.reverse().join('');
  return parseInt(reversedStringedNum, 10);
}

// Notice the radix of 10 as a second argument to parseInt. This gives the
// parseInt function the base by which it parses the number. If the number
// string contains leading zeroes (e.g., '00021'), parseInt may convert the
// number to 17 (base 8) instead of 21 (base 10); the behavior varies based on
// the version of JavaScript. 