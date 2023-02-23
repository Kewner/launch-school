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
}

function stringToInteger(string) {
  let number = 0;

  for (let i = 0; i < string.length; i += 1) {
    let num = NUMBERS[string[i]];
    number += num * (10**(string.length - (i + 1)));
  }

  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// Further exploration

const HEXADIGITS {
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

function hexadecimalToInteger(string) {

}


hexadecimalToInteger('4D9f') === 19871;