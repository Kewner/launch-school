/* PEDAC
Understanding the problem
=========================
- input: a string of digits and a number specifying a length
- output: all the possible consecutive number series of the 
  specified length in the given string, contained in an array
- for example, given a string '01234' and a length 3, an array
  [[0, 1, 2], [1, 2, 3], [2, 3, 4]] should be returned

Examples/test cases
===================
from the given tests we can conclude that:
- we need a Series class with:
  - instance method slices:
    - accepts a number representing the length of the desired number series
    - returns an array containing sub-arrays with these number series
    - throws error if given length exceeds given string's length

Data structures
===============
- strings
- arrays

Algorithm constructor(digits)
=============================
- initialize this.digits to digits

Algorithm slices(length)
========================
- if length exceeds length of this.digits, throw error
- initialize series with empty array
- iterate through digits of this.digits:
  - initialize currentSeries with array containing current digit
  - iterate from current digit to end of array:
    - if currentSeries.length equals length, push it to series and
      break from current iteration
    - if next digit equals current digit + 1, push it to currentSeries
- return series
*/