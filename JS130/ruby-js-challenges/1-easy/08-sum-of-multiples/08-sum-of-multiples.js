/* PEDAC

Understanding the problem
=========================
- input: a number and a set of numbers
- output: the sum of multiples of the numbers in the set that are less than the
  first number
- if the set of numbers is not given, use a default set of 3 and 5
- example:
  - given number: 20
  - given set of numbers: 3, 5 (default)
  - 3, 5, 6, 9, 10, 12, 15, and 18 are multiples of either 3 or 5, and are
    smaller than 20

Examples/test cases
===================
from the given tests we can derive that:
- we need a SumOfMultiples class with a static property:
  - numberSet with a value of [3, 5]
  and 3 methods:
  - constructor: accepts a set of numbers (amount unknown) and stores it in a
    this.numberSet property
  - to (static): takes a number as an argument, returns the sum of multiples
    of the numbers in the set that are less than given number
  - to (instance): calls static to method, passing the given number, and
    returns its return value

Data structures
===============
- numbers
- arrays

Algorithm for constructor
=========================
- if arguments are present, store given numbers in array on this.numberSet;
  otherwise, store [3, 5] on this.numberSet

Algorithm for instance to(number)
==============================
- initialize `sum` to value of 0
- using a for loop, iterate through numbers 1 to `number` as `current`:
  - using some(), determine if `current` is a multiple of any of
    this.numberSet's elements: if so, add `current` to `sum`
- return `sum`

Algorithm for static to(number)
============================
- call SumOfMultiples without any arguments to create new instance object
  with the default number set [3, 5]
- call instance `to` on the new object, passing it `number`
- return its return value
*/

class SumOfMultiples {
  constructor(...nums) {
    this.numberSet = nums.length > 0 ? nums : [3, 5];
  }

  static to(number) {
    return new SumOfMultiples().to(number);
  }

  to(number) {
    let sum = 0;

    for (let count = 1; count < number; count += 1) {
      if (this.numberSet.some(num => count % num === 0)) sum += count;
    }

    return sum;
  }
}

module.exports = SumOfMultiples;