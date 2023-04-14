/* PEDAC

Understanding the problem
=========================
- input: a number and a set of numbers
- output: the sum of multiples of the numbers in the set that are
  less than the first number
- if the set of numbers is not given, use default set of 3 and 5
- example:
  - given number: 20
  - given set of numbers: 3, 5 (default)
  - 3, 5, 6, 9, 10, 12, 15, and 18 are multiples of either 3 or 5,
    and are smaller than 20

Examples/test cases
===================
from the given tests we can derive that:
- we need a SumOfMultiples class with a static property:
  - numberSet with a value of [3, 5]
  and 3 methods:
  - constructor: accepts a set of numbers (amount unknown) and
    stores it in a this.numberSet property
  - to (static): takes a number as an argument, returns the sum of
    multiples of the numbers in the set that are less than given number
  - to (instance): calls static to method, passing the given number,
    and returns its return value

Data structures
===============
- numbers
- arrays

Algorithm for constructor
=========================
- store given numbers in array on this.numberSet

Algorithm for static to(num)
============================
- initialize `sum` to value of 0
- using a for loop, iterate through numbers 1 to `num` as `current`:
  - iterate through this.numberSet's elements as `number`:
    - if `current` is a multiple of `number`, increment `sum` by `current`
- return `sum`

Algorithm for instance to(num)
==============================
- call static `to`, passing it `num`
- return its return value
*/