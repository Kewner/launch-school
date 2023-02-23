// Write a function that takes a string argument, and returns true if all of the
// alphabetic characters inside the string are uppercase; false otherwise. Ignore
// characters that are not alphabetic.

function isUppercase(str) {
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= 'a' && str[i] <= 'z')) continue;
    if (str[i] === str[i].toUpperCase()) return false;
  }

  return true;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// LS solution
function isUppercase(string) {
  return string.toUpperCase() === string;
}