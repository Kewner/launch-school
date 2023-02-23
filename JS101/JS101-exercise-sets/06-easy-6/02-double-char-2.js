// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// function doubleConsonants(str) {
//   let newStr = '';

//   for (let idx = 0; idx < str.length; idx += 1) {
//     if ('bcdfghjklmnpqrstvwxyz'.includes(str[idx].toLowerCase())) {
//       newStr += str[idx] + str[idx];
//     } else {
//       newStr += str[idx];
//     }
//   }
//   console.log(newStr);
// }

// more concise:
function doubleConsonants(str) {
  let newStr = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    'bcdfghjklmnpqrstvwxyz'.includes(str[idx].toLowerCase()) ? 
        newStr += str[idx] + str[idx] : newStr += str[idx];
  }

  return newStr;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""