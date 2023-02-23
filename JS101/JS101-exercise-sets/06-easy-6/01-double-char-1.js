// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// for loop
function repeater(str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    result += str[idx].repeat(2);
  }
  return result;
}

// forEach
function repeater2(str) {
  let result = '';

  str.split('').forEach(char => result += char.repeat(2));

  return result;
}

// reduce
function repeater3(str) {
  return str.split('').reduce((acc, curr) => acc.concat(curr.repeat(2)), '');
}

// map
function repeater3(str) {
  return str.split('').map(char => char.repeat(2)).join(''); // or:
  // return str.split('').map(char => char + char).join('');
}

repeater3('Hello');        // "HHeelllloo"
repeater3('Good job!');    // "GGoooodd  jjoobb!!"
repeater3('');             // ""