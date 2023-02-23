// Write a function that returns a list of all substrings of a string. Order
// the returned list by where in the string the substring begins. This means
// that all substrings that start at index position 0 should come first, then
// all substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise:

// Understanding the problem
// =========================
// Input: a string
// Output: an array with all the substrings of the input string
// Rules:
// - All substrings starting at index 0 should come first, then 1, etc.
// - Return substrings at a given index from shortest to longest.

// Algorithm
// =========
// 1. Declare variable 'substrings' with empty array
// 2. Iterate through characters of 'str' using charIdx
//      - Iterate through numbers 1 to str.length - charIdx with 'length'
//          - Starting at charIdx, add substring with length of 'length'
// 3. Return 'substrings'

function substrings(str) {
  let substrings = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    substrings.push(leadingSubstrings(str.slice(idx)));
  }

  return substrings.reduce((acc, cur) => acc.concat(cur), []); // flatten array
}

function leadingSubstrings(str) {
  return str.split('').map((char, idx) => str.slice(0, idx + 1));
}

// Example:
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// Without leadingSubstrings function:
function substrings(str) {
  let substrings = [];

  str.split('').forEach((char, charIdx) => {
    for (let length = 1; length <= str.length - charIdx; length += 1) {
      substrings.push(str.substr(charIdx, length));
    }
  });

  return substrings;
}

// Further exploration
// ===================
// Rewrite substrings using list processing functions. That is, convert the
// string into an array of some sort and use functions like map, filter, or
// reduce to get the desired substrings. (You will also need to use join.) Try
// not to use forEach as that is too similar to the for loop approach.

function leadingSubstrings(str) {
  return str.split('').map((char, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return str.split('').reduce((acc, _, idx) => {
    return acc.concat(leadingSubstrings(str.slice(idx)));
  }, []);
}

// console.log(leadingSubstrings('abcde'));
console.log(substrings('abcde'));

// What does the callback function of reduce() return?
// 1. - accumulator is []
//    - leadingSubstrings is called with argument ['a', 'b', 'c', 'd', 'e']
//    - the return value, ['a', 'ab', 'abc', 'abcd', 'abcde'], is concatenated
//      with the accumulator
// 2. - accumulator is ['a', 'ab', 'abc', 'abcd', 'abcde']
//    - leadingSubstrings is called with argument ['b', 'c', 'd', 'e']
//    - the return value, ['b', 'bc', 'bcd', 'bcde'] is concatenated with the
//      accumulator
// 3  - accumulator is ['a', 'ab', 'abc', 'abcd', 'abcde', 'b', 'bc', 'bcd', 'bcde']
//      etc...