// Write a function that takes a non-empty string argument, and returns the
// middle character(s) of the string. If the string has an odd length, you should
// return exactly one character. If the string has an even length, you should
// return exactly two characters.

function centerOf(str) {
  return str.length % 2 !== 0 ?
    str.substr(Math.ceil(str.length / 2 - 1), 1) :
    str.substr(Math.ceil(str.length / 2 - 1), 2);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"