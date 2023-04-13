/* PEDAC
Understanding the problem
=========================
- input: a number
- output: a string:
  - if Aliquot sum is equal to given number, return 'perfect'
  - if Aliquot sum is greater than given number, return 'abundant'
  - if Aliquot sum is less than given number, return 'deficient'
- Aliquot sum is the sum of its positive divisors:
  - sum of factors of of 6 is 1 + 2 + 3 = 6 (perfect)
  - sum of factors of 15 is 1 + 3 + 5 = 9 (deficient)
  - sum of factors of 24 = 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 (abundant)

Examples/test cases
===================
From the given tests we can derive that:
- we need a PerfectNumber class with one method:
  - a static method classify, which:
    - raises an error when the given number is negative
    - returns the correct classification
- if the given number is negative, an error should be raised

Data structures
===============
- numbers
- probably an array containing factors

Algorithm for classify(num) method
==================================
- if `num` is negative, throw error
- find the sum of all divisors using sumOfDivisors
- if sum is equal to `num`, return 'perfect'
- else if sum is greater than `num`, return 'abundant'
- else if sum is less than `num`, return 'deficient'

Algorithm for sumOfDivisors(num) method
=======================================
- initialize `sum` with value of 0
- start for loop to iterate over numbers from 1 to `num` (exclusive):
  - if current number is a divisor of `num`, add it to `sum`
- return `sum`
*/

class PerfectNumber {
  static classify(num) {
    if (num < 1) throw new Error('Number must be 1 or greater.');
    const aliquot = this.sumOfDivisors(num);   
    
    if (aliquot === num) return 'perfect';
    if (aliquot > num) return 'abundant';
    return 'deficient';
  }

  static sumOfDivisors(num) {
    let sum = 0;

    for (let current = 1; current < num; current += 1) {
      if (num % current === 0) sum += current;
    }

    return sum;
  }
}

module.exports = PerfectNumber;