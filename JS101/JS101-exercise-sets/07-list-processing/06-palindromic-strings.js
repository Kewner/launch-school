// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters
// that reads the same forward and backward. The substrings in the returned
// list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous
// exercise.

// For the purpose of this exercise, you should consider all characters and pay
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and
// 'Abc-bA' are not. In addition, assume that single characters are not
// palindromes.

// Understanding the problem
// =========================
// Input: a string
// Output: an array with all palindromic substrings of input string
// Rules:
// - Palindrome: a sequence of characters that reads the same forward and backward.
// - Substrings in array should be sorted by order of appearance in string.
// - Duplicate substrings should be included muliple times.
// - Pay attention to case.
// - Single characters are not palindromes.

// Algorithm
// =========
// Declare variable 'palindromes' assigned to empty array
// Get a list of all substring by using the substrings function
// Iterate through all the substrings in this list
//    - reverse the substring
//    - compare the reversed substring to the original substring
//    - if they are equal, add original substring to 'palindromes' array
// Return 'palindromes' array

function palindromes(str) {
  let palindromes = [];

  substrings(str).filter(sub => sub.length > 1).forEach(substring => {
    if (substring === substring.split('').reverse().join('')) {
      palindromes.push(substring);
    }
  });

  return palindromes;
}

// More concise:
function palindromes(str) {
  return substrings(str).filter(sub => {
    return sub.length > 1 && sub === sub.split('').reverse().join('');
  });
}

function leadingSubstrings(str) {
  return str.split('').map((char, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return str.split('').reduce((acc, _, idx) => {
    return acc.concat(leadingSubstrings(str.slice(idx)));
  }, []);
}

// Examples:
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]