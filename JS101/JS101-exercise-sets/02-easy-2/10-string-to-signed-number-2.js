function stringToInteger(str) {
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

  return str.split('').map(char => numStrings[char])
            .reduce((acc, cur) => (acc * 10) + cur, 0);
}

function stringToSignedInteger(str) {
  let num;

  // if (str[0] === '-') {
  //   num = -stringToInteger(str.slice(1));
  // } else if (str[0] === '+') {
  //   num = stringToInteger(str.slice(1));
  // } else {
  //   num = stringToInteger(str);
  // }

  // return num;

  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1));
    case '+':
      return stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }


}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true