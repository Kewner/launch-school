/* PEDAC
Understanding the problem
=========================
- input: a word
- output: the scrabble score for the input word
- each letter has a specific numeric value:
    1: A, E, I, O, U, L, N, R, S, T
    2: D, G
    3: B, C, M, P
    4: F, H, V, W, Y
    5: K
    8: J, X
    10: Q, Z

Examples and test cases
=======================
The examples show us that:
- we need a Scrabble class with 3 methods/properties:
  - a constructor method that accepts a string argument
  - a score method that calculates and returns the score of a given,
    and takes no arguments
  - a static method score that takes a single string argument and
    returns the score of that word
- scores are case-insensitive
- an empty string or whitespace scores 0
- invalid inputs score 0

Data structures
===============
- strings (input)
- numbers (score)
- objects (scoring standard)
- maybe arrays

Algorithm for constructor
=========================
- define property this.word on the new instance object

Algorithm for static letterValues
=================================
- define static property letterValues, with an object with all letters
  as keys, and their corresponding values as values

Algorithm for instance score
============================
- initialize variable result with value of 0
- check if the input is a string; if not, return result (0)
- use trim to remove whitespace from both sides of the string
- make sure the word is all lowercase
- iterate through all letters of the input string:
  - for each letter, look up its worth and, if not undefined, increment
    result by this number
- return result

Algorithm for static score
==========================
- call Scrabble to create a new instance object, passing it the given word
- call instance score method on this new instance object
- return the return value
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static VALUES = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2,
    g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5,
    j: 8, x: 8, q: 10, z: 10,
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    if (typeof this.word !== 'string') return 0;
    let total = 0;
    let word = this.word.trim().toLowerCase();

    word.split('').forEach(letter => {
      const value = Scrabble.VALUES[letter];
      if (value) total += value;
    });

    return total;
  }
}

module.exports = Scrabble;
