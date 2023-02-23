// Write another function that returns true if the string passed as an argument
// is a palindrome, or false otherwise. This time, however, your function should
// be case-insensitive, and should ignore all non-alphanumeric characters. If
// you wish, you may simplify things by calling the isPalindrome function you
// wrote in the previous exercise.

function isRealPalindrome(str) {
  str = str.toLowerCase();
  alphaStr = '';

  // string = string.toLowerCase().replace(/[^a-z0-9]/g, "");   < regex option
  for (let i = 0; i < str.length; i += 1) {
    if (isLetter(str[i]) || isNumber(str[i])) {
      alphaStr += str[i];
    }
  }

  alphaStrRev = alphaStr.split('').reverse().join('');
  console.log(alphaStr === alphaStrRev);  
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false