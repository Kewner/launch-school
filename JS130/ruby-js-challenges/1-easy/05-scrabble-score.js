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

Data structures
===============
- strings (input)
- numbers (score)
- objects (scoring standard)
- maybe arrays

Algorithm for constructor
=========================
- define property this.word on the new instance object

Algorithm for static letterScores
=================================
- define static property letterScores, with an object with all letters
  as keys, and their corresponding scores as values

Algorithm for instance score
============================
- check if the input is a string; if not, throw error
- use trim to remove whitespace from both sides of the string
- initialize variable result with value of 0
- if string length is 0, return result
- iterate through all letters of the input string:
  - for each letter, look up its worth and add that to result
- return result

Algorithm for static score
==========================
- call instance score, passing it the given word
- return the return value
*/
