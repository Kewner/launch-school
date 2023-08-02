/* PEDAC
Understanding the problem
=========================
- input: a string of digits and a number specifying a length
- output: all the possible consecutive number series of the 
  specified length in the given string, contained in an array
- for example, given a string '54932' and a length 3, an array
  [[5, 4, 9], [4, 9, 3], [9, 3, 2]] should be returned

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

Algorithm constructor(nums)
===========================
- initialize this.nums to nums

Algorithm slices(size)
======================
- if size exceeds length of this.nums, throw error
- iterate through nums of this.nums using map:
  - return a sub-array starting at current num, with length of size
- return the result after filtering out the sub-array(s)
  that contain less than the required number of digits.
*/

class Series {
  constructor(nums) {
    this.nums = nums;
  }

  slices(size) {
    if (size > this.nums.length) throw new Error(`Max size: ${this.nums.length}`);

    const series = this.nums.split('').map((num, idx, arr) => {
      return arr.map(num => Number(num)).slice(idx, idx + size);
    });

    return series.filter(series => series.length === size);
  }
}

module.exports = Series;