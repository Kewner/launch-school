// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The length
// of the string should match the given integer.

function stringy(num) {
  let numStr = '-'.repeat(num);
  let resultStr = '';
  let index = 0;

  while (index < numStr.length) {
    if (index % 2 !== 0) {
      resultStr += '0';
    } else {
      resultStr += '1';
    }

    index += 1;
  }

  return resultStr;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// LS solution
function stringy2(size) {
  let result = '';

  for (let i = 0; i < size; i += 1) {
    i % 2 === 0 ? result += '1' : result += '0';
  }
  
  return result;
}

stringy2(6);    // "101010"
stringy2(9);    // "101010101"
stringy2(4);    // "1010"
stringy2(7);    // "1010101"