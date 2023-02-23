// Write a function that takes an array of strings, and returns an array of the
// same values with all vowels (a, e, i, o, u) removed.

function removeVowels(arr) {
  let result = [];

  arr.forEach(str => {
    result.push(str.split('').filter(char => !('aeiou'.includes(char))).join(''));
  });

  return result;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// LS solution 1
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}