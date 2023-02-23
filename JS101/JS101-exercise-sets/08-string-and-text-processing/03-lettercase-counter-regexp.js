// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.

function letterCaseCount(str) {
  let result = { lowercase : 0, uppercase : 0, neither : 0 };

  str.split('').forEach(char => {
    if (!(char.toLowerCase() >= 'a' && char <= 'z')) {
      result.neither++
    } else if (char === char.toLowerCase()) {
      result.lowercase++
    } else if (char === char.toUpperCase()) {
      result.uppercase++;
    }
  });

  return result;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// LS regexp solution
function letterCaseCount(string) {
  //  return array of characters that match pattern;
  // if none, assign empty array instead of null to prevent .length error
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

//    /[a-z]/g : Checks whether the character is a lowercase letter between 'a' and 'z'.
//    /[A-Z]/g : Checks whether the character is an uppercase letter between 'A' and 'Z'.
//    /[^a-z]/gi : Checks whether the character is neither an uppercase nor a lowercase letter.
//    g : Tells the regex engine to search the entire string.
//    i : Tells the regex engine to ignore case.
