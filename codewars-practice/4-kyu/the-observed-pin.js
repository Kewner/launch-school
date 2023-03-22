// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

// Alright, detective, one of our colleagues successfully observed our
// target person, Robby the robber. We followed him to a secret warehouse,
// where we assume to find all the stolen stuff. The door to this warehouse
// is secured by an electronic combination lock. Unfortunately our spy
// isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of
// the digits he saw could actually be another adjacent digit (horizontally
// or vertically, but not diagonally). E.g. instead of the 1 it could also
// be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an
// unlimited amount of wrong PINs, they never finally lock the system or
// sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations
// considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have
// a function, that returns an array (or a list in Java/Kotlin and C#) of
// all variations for an observed PIN with a length of 1 to 8 digits. We
// could name the function getPINs (get_pins in python, GetPINs in C#).
// But please note that all PINs, the observed one and also the results,
// must be strings, because of potentially leading '0's. We already
// prepared some test cases for you.

// Detective, we are counting on you!

// SOLUTION
// ======================================================================
// problem
// - input: a string containing 1-8 digits
// - output: an array with string values of all possible variations for
//   an observed pin with a length of 1 to 8 digits
// - rules/boundaries:
//     - all value representing pins are strings
//     - each digit could be the wrong digit: in that case, one of its
//       neighbouring digits will be the right one (not diagonally)

// data structures
// - strings (containing digits)
// - arrays

// algorithm
// - Initialize `result` with empty array.
// - Initialize `neighbours` with a value of an object with properties 0
//   to 9, each property with an array including the property number and
//   all its neighbouring digits as its value.
// - Iterate through all digits of `observed`. For each `digit`:
//     - recursion?

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// code
function getPINs(observed) {
  const result = [];
  const neighbours = {
    0: ['0', '8'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['0', '5', '7', '8', '9'],
    9: ['6', '8', '9'],
  };

  observed.split('').forEach(num => {
    console.log(num);
  })
}

// test cases
getPINs('01');

// possibilities:
// 01
// 02
// 04
// 81
// 82
// 84

// getPINs('1357');
