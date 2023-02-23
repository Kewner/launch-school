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
// old-fashioned way and calculate the result by analyzing the characters in
// the string.

function getNumber(numberChar) {
  switch (numberChar) {
    case '0':
      return 0;
      break;
    case '1':
      return 1;
      break;
    case '2':
      return 2;
      break;
    case '3':
      return 3;
      break;
    case '4':
      return 4;
      break;
    case '5':
      return 5;
      break;
    case '6':
      return 6;
      break;
    case '7':
      return 7;
      break;
    case '8':
      return 8;
      break;
    case '9':
      return 9;
      break;
  }
}

function stringToInteger(string) {
  let result = 0;
  let strLength = string.length;

  for (index = 0; index < strLength; index += 1) {
    let number = getNumber(string[index]);
    result += number * 10**(strLength - index - 1);
  }

  return result;
}

// console.log(stringToInteger("0"))
console.log(stringToInteger("4321"));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true