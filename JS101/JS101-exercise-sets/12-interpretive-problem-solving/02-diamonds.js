// Write a function that displays a four-pointed diamond in an n x n grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// Understanding the problem
// =========================
// input: an odd integer
// output: a four-pointed diamond in an n x n grid, where n is the input number
// rules:
//    explicit:
//    - the input argument will always be an odd integer
//    - the outputted diamond will be as wide and tall as the input number
//    implicit:
//    - when the argument is 1, only one * will be outputted

// Data structures
// ===============
// numbers, strings

// Algorithm
// =========
// 1. declare 'padding' with value of 'n' / 2 (rounded down to an integer) spaces
// 2. iterate through numbers 1 to 'n'
//      - print 'padding' + (current index times '*')
//      - decrement spaces in 'padding' by 1 space
// 3. set 'padding' to 1 space
// 4. iterate through numbers ('n' - 1) to 1
//      - print 'padding' + (current index times '*')
//      - increment spaces in 'padding' by 1 space

function diamond(n) {
  let padding = ' '.repeat(Math.floor(n / 2));
  
  for (let idx = 1; idx <= n; idx += 2) {
    console.log(`${padding}${'*'.repeat(idx)}`);
    padding = padding.slice(0, padding.length - 1);
  }

  padding = ' ';

  for (let idx = n - 2; idx > 0; idx -= 2) {
    console.log(`${padding}${'*'.repeat(idx)}`);
    padding = padding.concat(' ');
  }
}

// Examples:
diamond(1);
diamond(3);
diamond(9);
diamond(100);

// ============================================================================

// LS solution

// Algorithm:
// - Initialize increment to 2
// - Start with the first number, 1, incrementing the number by increment with each step
// - When the number is equal to n, flip the increment to -2
// - Stop when we get to a negative number

function diamond2(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);

    if (number === n) {
      increment = -2;
    }

    number += increment;
  }

  return result;
}

// console.log(numberSequence(5))  // [1, 3, 5, 3, 1]

diamond2(21);

// ============================================================================

// Cool solution by Jourden Riley:
function diamond2(n) {
  let increment = 2;
  
  for (let i = 1; i > 0; i += increment) {
    console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
    if (i === n) increment = -2;
  }
}

diamond2(9)

// ============================================================================

// Further exploration

// The current solution builds a solid diamond—refactor it to build a
// hollow diamond.

// Mental model
// ============
// considering an input of 7:
//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *
// left padding: 3, 2, 1, 0, 1, 2, 3
//    - starts at n / 2, rounded down
//    - decrements with 1
//    - when 0 has been reached, it increments with 1, until n / 2 (rounded
//      down) has been reached
// centre padding: 0, 1, 3, 5, 3, 1, 0
//    - starts at 0
//    - increments with 1 once
//    - then increments with 2 until n - 2 has been reached
//    - then decrements with 1 until 0 has been reached

// Algorithm
// =========
// 1. create leftPadding array of numbers representing size of left padding
// 2. create centrePadding array of numbers representing size of centre padding
// 3. iterate for n rounds
//      - output leftPadding[currentIndex] spaces
//      - output *
//      - output centrePadding[currentIndex] spaces
//      - output *

function hollowDiamond(n) {
  let leftPad = leftPadding(n);
  let centrePad = centrePadding(n);

  for (let idx = 0; idx < n; idx += 1) {
    if (idx === 0 || idx === n - 1) {
      console.log(`${' '.repeat(leftPad[idx])}*`);
    } else {
      console.log(`${' '.repeat(leftPad[idx])}*${' '.repeat(centrePad[idx])}*`);
    }    
  }
}

function leftPadding(n) {
  let leftPad = [];
  let amountOfSpaces = Math.floor(n / 2);
  let increment = -1;

  while (leftPad.length < n) {
    leftPad.push(amountOfSpaces);

    if (amountOfSpaces === 0) {
      increment = 1;
    }

    amountOfSpaces += increment;
  }

  return leftPad;
}

function centrePadding(n) {
  let centrePad = [0, 1];
  let amountOfSpaces = 3;
  let increment = 2;

  while (centrePad.length < n) {
    centrePad.push(amountOfSpaces);

    if (amountOfSpaces === n - 2) {
      increment = -2;
    } else if (amountOfSpaces === 1) {
      increment = -1;
    }

    amountOfSpaces += increment;
  }

  return centrePad;
}

hollowDiamond(31);

// ===========================================================================

// New, more concise, solution:
function hollowDiamond2(n) {
  let leftPad = Math.floor(n / 2);
  let leftIncrement = -1;
  let centrePad = 1;
  let centerIncrement = 2;

  for (let idx = 0; idx < n; idx += 1) {
    if (leftPad === 0) leftIncrement = 1;
    if (centrePad === n - 2) centerIncrement = -2;

    if (idx === 0 || idx === n - 1) {
      console.log(`${' '.repeat(leftPad)}*`);
      leftPad += leftIncrement;
    } else {
      console.log(`${' '.repeat(leftPad)}*${' '.repeat(centrePad)}*`);
      leftPad += leftIncrement;
      centrePad += centerIncrement;
    }
  }
}

hollowDiamond2(19);

// ============================================================================

// Inspired by Jourden Riley's beautiful solution for solid diamonds, I wrote
// another hollowDiamond function.

// - The different iterations of idx in the for loop are: 1, 3, 5, 7, 5, 3, 1.
// - If idx is 1 (width of the first row), it will print the preceding spaces
//   and just one *.
// - For the other indices, the necessary spaces in between the asterisks are
//   calculated by subtracting 2 (because of the 2 asterisks) from idx.

function hollowDiamond3(n) {
  let increment = 2;

  for (let idx = 1; idx > 0; idx += increment) {
    if (idx === 1) {
      console.log(' '.repeat((n - idx) / 2) + '*');
    } else {
      console.log(' '.repeat((n - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*');
    }

    if (idx === n) increment = -2;
  }
}

hollowDiamond3(21);