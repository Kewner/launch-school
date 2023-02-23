// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occuring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Understanding the problem
// =========================
// input: an integer
// output: an integer
// rules:
//  explicit:
//    - return the next featured number greater than the integer
//    - a featured number is:
//        - an odd number
//        - a multiple of 7
//        - all its digits occur exactly once each

// Data structures
// ===============
// we will use integers

// Algorithm
// =========
// 1. declare 'maxFeatured' with value of 9876543201
// 2. iterate through numbers 'num' to 'maxNumber'
//      - test if current number is featured number
//      - if yes: return current number number
//    end of loop
// 3. return "There is no possible number that fulfills those requirements."

function featured(num) {
  const maxFeatured = 9876543201;

  for (let idx = num + 1; idx <= maxFeatured; idx += 1) {
    if (isFeatured(idx)) return idx;
  }

  return "There is no possible number that fulfills those requirements.";
}

function isFeatured(num) {
  if (num % 2 === 0) return false;
  if (num % 7 !== 0) return false;

  let digits = String(num).split('');
  let uniqueDigits = [];

  digits.forEach(num => {
    if (!uniqueDigits.includes(num)) {
      uniqueDigits.push(num);
    }
  });

  return digits.length === uniqueDigits.length;
}


// Changes inspired by LS solution for efficiency: incrementing
// 'num' with 14 each time, less numbers need to be checked
// ============================================================

function featured(num) {
  const maxFeatured = 9876543201;

  // increase num by 1 until num is divisible by 7 and odd
  do {
    num += 1;
  } while (num % 7 !== 0 || num % 2 === 0);

  // if each digit of num occurs only once, return num;
  // otherwise, increment num by 14 and test again, not exceeding maxFeatured
  do {
    if (noDoubles(num)) {
      return num;
    }

    num += 14;
  } while (num < maxFeatured);

  return "There is no possible number that fulfills those requirements.";
}

function noDoubles(num) {
  let digits = String(num).split('');
  let uniqueDigits = [];

  digits.forEach(num => {
    if (!uniqueDigits.includes(num)) {
      uniqueDigits.push(num);
    }
  });

  return digits.length === uniqueDigits.length;
}

// Examples:
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."