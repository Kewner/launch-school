// Complete the solution so that it returns the number of times the search_text
// is found within the full_text.

// function solution(fullText, searchText) {
// }

// console.log(solution('aabfaa', 'aa'));  // 2
// solution('aa_bb_cc_dd_bb_e', 'bb'); // 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb'); // 1

// 1. Understanding the problem
// input: 2 strings
// output: a number
// rules:
// explicit requirements:
//    - the input consists of 2 strings
//    - the output is the number of times the 2nd string is found within the 1st
// questions:
//    - what if a string is empty?
//    - can I assume all inputs are strings?
//    - should the function be case sensitive?

// 2. Examples/test cases
// test cases are given.

// 3. Data structures
// we can use an array, containing all substrings of fullText

// 4. Algorithm

// High-level algorithm
// 1. create an array containing all substrings of fullText
//      - use helper function 'substrings'
// 2. count how many times searchText occurs in substrings array
// 4. return number

function solution(fullText, searchText) {
  let substrings = getSubstrings(fullText);
  let numOfSearchText = 0;

  substrings.forEach(substr => {
    if (substr === searchText) {
      numOfSearchText++;
    }
  });

  return numOfSearchText;
}

// 1. declare 'substrings' with empty array
// 2. declare 'startIndex' at 0
// 3. starting at 'startIndex', loop through string for each starting character
//      - declare 'strLength' at 1
//      - loop through string
//           - get substring starting at 'startIndex' with length of 'strLength'
//           - add substring to 'substrings'
//           - increment 'strLength' by 1
//      - end inner loop
//      - increment 'startIndex' by 1
//    end outer loop
// 4. return 'substrings' array

function getSubstrings(str) {
  let substrings = [];
  let startIndex = 0;

  while (startIndex < str.length - startIndex) {
    let strLength = 1;

    while (strLength <= str.length) {
      let substring = str.substr(startIndex, strLength);
      substrings.push(substring);
      strLength++;
    }

    startIndex++;
  }

  return substrings;
}

console.log(getSubstrings('halo')); // ['h', 'ha', 'hal', 'halo', 'a', 'al', 'alo', 'l', 'lo', 'o']

// console.log(solution('aabfaa', 'aa'));  // 2
// console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // 2 since bb shows up twice
// console.log(solution('aaabbbcccc', 'bbb')); // 1


// Daniel Lew (Capstone)  10:13 PM
// One of the things that really helps work through problems where you have to
// keep some information or number in your head is to draw or write it out. It
// sounds tedious, but it’s really helpful.
// So if you’re working through a loop, every time the numbers or variables
// change, just write that down. Ie, If you’re looping through something 10
// times, you’ll have 10 different states of the numbers/variables written out.
// Work it out by hand, and then the programming will come naturally.