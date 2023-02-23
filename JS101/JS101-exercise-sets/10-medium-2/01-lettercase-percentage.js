// Write a function that takes a string, and returns an object containing the
// following three properties:

// - the percentage of characters in the string that are lowercase letters
// - the percentage of characters that are uppercase letters
// - the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Understanding the problem
// =========================
// input: a string
// output: a string showing the required percentages
// rules:
//  explicit:
//  - the input is a string, which will always contain at least one character
//  - calculate the percentage of lowercase characters of that string
//  - calculate the percentage of uppercase characters of that string
//  - calculate the percentage of characters that are neither (space, comma etc.)
//  - return the results
//  implicit:
//  - round percentages to 2 decimals

// Examples: see below

// Data structures
// ===============
// we can use strings, and their length properties to count characters
// we will use numbers for the calculation of the percentages

// Algorithm
// =========
// 1. set 'onePercent' with total amount of characters in string divided by 100
// 2. set 'uppercase' with value of 0
// 3. set 'lowercase' with value of 0
// 4. set 'neither' with value of 0
// 5. loop through the characters of the string
//      - if character is uppercase: increment 'uppercase' by 1
//      - if character is lowercase: increment 'lowercase' by 1
//      - if character is neither: increment 'neither' by 1
//    end of loop
// 6. set 'upperRatio' with value of 'upperCase' / 'onePercent'
// 7. set 'lowerRatio' with value of 'upperCase' / 'onePercent'
// 8. set 'neitherRatio' with value of 'upperCase' / 'onePercent'
// 9. return string with above ratio's

function letterPercentages(str) {
  let onePercent = str.length / 100;
  let upperCase = 0;
  let lowerCase = 0;
  let neither = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    let charCode = char.toLowerCase().charCodeAt();

    if (!(charCode >= 97 && charCode <= 122)) {
      neither += 1;
    } else if (char === char.toLowerCase()) {
      lowerCase += 1;
    } else if (char === char.toUpperCase()) {
      upperCase += 1;
    }
  }

  let uRatio = (upperCase / onePercent).toFixed(2);
  let lRatio = (lowerCase / onePercent).toFixed(2);
  let nRatio = (neither / onePercent).toFixed(2);

  return `lowercase: ${lRatio}, uppercase: ${uRatio}, neither: ${nRatio}`;
}

// Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }