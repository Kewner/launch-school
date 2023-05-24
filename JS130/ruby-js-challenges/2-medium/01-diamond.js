/* PEDAC
Understanding the problem
=========================
- input: a letter
- output: a diamond shape starting with 'A', with the supplied letter at the
  widest point:
  - The first row contains one 'A'.
  - The last row contains one 'A'.
  - All rows, except the first and last, have exactly two identical letters.
  - The diamond is horizontally symmetric.
  - The diamond is vertically symmetric.
  - The diamond has a square shape (width equals height).
  - The letters form a diamond shape.
  - The top half has the letters in ascending order.
  - The bottom half has the letters in descending order.
  - The four corners (containing the spaces) are triangles.

Examples/test cases
===================
from the given tests we can conclude that:
- we need a Diamond class with:
  - a makeDiamond static method which takes one argument, a letter, and
    returns the diamond based on the argument letter
  - possibly helper methods

Data structures
===============
- strings
- maybe arrays

Algorithm
=========
- initialize alphabet to 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
- using indexOf and slice, get the substring of alphabet that we need
- assign letters to this substring

- initialize diamondArr to empty array
- initialize index to 0
- initialize sides to letters.length - 1
- initialize center to -1

- iterate through letters using while loop with index:
  - if index equals -1, break from loop
  - if current is A, push 'sides + current + sides' to diamondArr, continue
  - push 'sides + current + center + current + sides' to diamondArr
  - if length of diamondArr is less than (letters.length / 2):
    - increment index by 1
    - decrement sides by 1
    - increment center by 2
    else:
    - decrement index by 1
    - increment sides by 1
    - decrement center by 2
- return diamondArr.join('\n')
*/

class Diamond {
  static makeDiamond(letter) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = alphabet.slice(0, alphabet.indexOf(letter) + 1);
    const diamondArr = [];
    
    let index = 0;
    let sides = letters.length - 1;
    let center = -1;

    while (index > -1) {
      const current = letters[index];
      const side = ' '.repeat(sides);
      let middle;

      if (current === 'A') {
        diamondArr.push(side + current + side);
      } else {
        middle = ' '.repeat(center);
        diamondArr.push(side + current + middle + current + side);
      }

      if (diamondArr.length < letters.length) {
        index += 1;
        sides -= 1;
        center += 2;
      } else {
        index -= 1;
        sides += 1;
        center -= 2
      }
    }

    return diamondArr.join('\n');
  }
}

console.log(Diamond.makeDiamond('E'));
console.log(Diamond.makeDiamond('A'));