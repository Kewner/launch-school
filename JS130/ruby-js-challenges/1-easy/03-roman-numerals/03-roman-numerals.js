/* PEDAC
Understanding the problem
=========================
- input: a decimal number
- output: its Roman number equivalent (a string)

- Roman numerals are written by expressing each digit of the number separately,
  starting with the left most digit and skipping any digit with a value of zero
- a smaller number in front of a greater number should be subtracted
- a smaller number after a greater number should be added
- there is no need to convert numbers larger than 3000

- you can't add more than 3 of the same Roman numerals together
- you can't subtract more than 1 value from a Roman numeral

- letter translations:
  - I = 1     I, II, III
  - V = 5     IV, V, VI, VII, VIII
  - X = 10    IX, X, XI, XII, XIII, XIV, XV, XVI, XVII, IXVIII, XIX, XX
  - L = 50
  - C = 100
  - D = 500
  - M = 1000

Examples/test cases
===================
from the given tests we can conclude that:
- we need a RomanNumeral class with at least 2 methods:
  - constructor(num): saves num to property on new instance
  - instance toRoman(): returns num's Roman number equivalent
  - instance romanNumeral(digit): uses an object to look up a digit's
    Roman numeral equivalent and returns it
- constructor does not raise any errors

Data structures
===============
- numbers
- strings
- an object
- maybe arrays

Algorithm constructor(num)
==========================
- initialize this.num to num

Algorithm toRoman()
===================
- iterate

Algorithm romanNumeral(digit)
=============================
- 
*/