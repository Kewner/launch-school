// Write a function that takes two strings as arguments, determines
// the longer of the two strings, and then returns the result of
// concatenating the shorter string, the longer string, and the shorter
// string once again. You may assume that the strings are of different
// lengths.

function shortLongShort(s1, s2) {
  return s1.length < s2.length ? s1 + s2 + s1 : s2 + s1 + s2;
}

// As an arrow function:
const shortLongShort = (s1, s2) =>
  s1.length < s2.length ? s1 + s2 + s1 : s2 + s1 + s2;

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"