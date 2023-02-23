// Write a function that takes a string argument, and returns a list of all
// substrings that start from the beginning of the string, ordered from shortest
// to longest.

// Understanding the problem
// =========================
// Input: a string
// Output: an array of all substrings that start from the beginning of the
// string, ordered from shortest to longest
// Rules:
// - return a list of all substrings that start from the beginning of the
//   string, ordered from shortest to longest

// Data structures/algorithm
// =========================
// 1. Declare variable 'result' with empty array
// 2. Iterate through all characters of input string with 'char'
//      - iterate for str.length - currentIndex times with 'length'
//          - starting at 'char', add substring with length of 'length' to 'result'
// 3. Return 'result'

// function leadingSubstrings(str) {
//   let result = [];

//   str.split('').forEach((char, charIdx) => {
//     for (let length = 1; length <= str.length - charIdx; length += 1) {
//       result.push(str.substr(charIdx, length));
//     }
//   });

//   console.log(result);
// }

function leadingSubstrings(str) {
  let substrings = [];

  for (let length = 1; length <= str.length; length += 1) {
    substrings.push(str.substr(0, length))
  }

  console.log(substrings);
}

// Examples:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Further Exploration
// ===================
// Rewrite leadingSubstrings using list processing functions. That is, convert
// the string into an array of some sort and use functions like map, filter,
// or reduce to get the desired substrings. (You will also need to use join.)
// Try not to use forEach as that is too similar to the for loop approach.

function leadingSubstrings(str) {
  return str.split('').map((char, idx) => str.slice(0, idx + 1));
}

// Cool solution by Sam Clark
function leadingSubstrings(str) {
  return str.split('').reduce((acc, char, idx) => 
  [...acc, str.slice(char, idx + 1)], []);
}