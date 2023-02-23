// The vowel substrings in the word 'codewarriors' are o,e,a,io. The longest of
// these has a length of 2. Given a lowercase string that has alphabetic
// characters only (both vowels and consonants) and no spaces, return the length
// of the longest vowel substring. Vowels are any of aeiou.


// ---------- Problem
// input: a string
// output: a number
// explicit requirements:
//    - the given string is lowercase
//    - the given string has alphabetic characters only, no spaces
//    - the code should return the length of the longest vowel substring
// implicit requirements: none
// ask question for clarification:
//    - how to deal with an empty string?
//    - how to deal with no arguments?

// ---------- Examples
// examples are given

// ---------- Data structure
// maybe an array of the splitted given string
// an array containing all of the vowel chains from the given string
//    - 'codewarriors' would create ['o', 'e', 'a', 'io']

// ---------- Algorithm
// 0. declare variable 'vowels' with 'aeoiu' string
// 1. declare variable 'vowelChains' with an empty array
// 2. declare variable 'vowelChain' with an empty string
// 3. loop through chars of given string
//      - if char is vowel, concatenate with 'vowelChain' string
//      - if char is not vowel:
//            - if 'vowelChain is not empty:
//                - push 'vowelChain' string to 'vowelChains' array
//                - assign empty string to 'vowelChain'
// 4. sort 'vowelChains' array by length of vowel chains
// 5. return last element of 'vowelChains' array

function solve(str) {
  let vowels = 'aeoiu';
  let vowelChains = [];
  let vowelChain = '';

  for (let idx = 0; idx <= str.length; idx++) {
    let currentChar = str[idx];

    if (vowels.includes(currentChar)) {
      vowelChain += currentChar;
    } else if (vowelChain) {
      vowelChains.push(vowelChain);
      vowelChain = '';
    }
  }

  return vowelChains.map(chain => chain.length).sort()[vowelChains.length - 1];
}

solve('codewarriors');  // 2
solve('suoidea'); // 3
solve('iuuvgheaae') // 4