const numStrings = {  // keys are always strings; values can be of any type
  0 : 0,
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 5,
  6 : 6,
  7 : 7,
  8 : 8,
  9 : 9
}

// Solution 1:
function stringToInteger1(str) {
  let result = 0;
  let revStr = str.split('').reverse().join('');

  for (let idx = 0; idx < revStr.length; idx++) {
    result += numStrings[revStr[idx]] * (10 ** idx);
  }

  return result;
}

// Solution 2:
function stringToInteger2(str) {
  let result = 0;
  str.split('').forEach(char => result = (result * 10) + numStrings[char]);
  return result;
}

// Solution 3:
function stringToInteger3(str) {
  return str.split('').map(char => numStrings[char])
            .reduce((acc, cur) => (acc * 10) + cur, 0);
}

console.log(stringToInteger3("4321") === 4321); // logs true
console.log(stringToInteger3("570") === 570); // logs true

// Further exploration
function hexadecimalToInteger(str) {
  const hexNums = {  // keys are always strings; values can be of any type
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    a : 10,
    b : 11,
    c : 12,
    d : 13,
    e : 14,
    f : 15
  };

  return str.toLowerCase().split('').reverse()
            .map((char, idx) => hexNums[char] * (16 ** idx))
            .reduce((acc, cur) => acc + cur, 0);
}

console.log(hexadecimalToInteger('4D9f')); // 19871

// Converting hexadecimal to decimal

// 4D9f:
// f = 15 * (16**0) = 15
// 9 = 9 * (16**1) = 144
// D = 13 * (16**2) = 3328
// 4 = 4 * (16**3) = 16384
// total: 19871

// C9:
// 9 = 9 * (16 ** 0) = 9
// C = 12 * (16 ** 1) = 192
// total: 201