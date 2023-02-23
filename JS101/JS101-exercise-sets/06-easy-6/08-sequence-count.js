// Create a function that takes two integers as arguments. The first argument is
// a count, and the second is the starting number of a sequence that your
// function will create. The function should return an array containing the same
// number of elements as the count argument. The value of each element should be
// a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than
// or equal to 0. The starting number can be any integer. If the count is 0, the
// function should return an empty array.

function sequence(int1, int2) {
  let multipliers = [...Array(int1).keys()].map(num => num + 1);
  return multipliers.reduce((acc, cur) => acc.concat(cur * int2), []);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []


// LS solution:
function sequence1(count, startNum) {
  let result = [];
  for (let num = 1; num <= count; num++) {
    result.push(num * startNum);
  }
  return result;
}

// Cool solutions from other students:

function sequence2(count, startingNum) {
  return count === 0 ? [] : Array.from(Array(count).keys(), num => (num + 1) * startingNum); 
};

// returns an empty array if count === 0

const sequence3 = (count, num) => {
  return Array(count).fill().map((_, idx) => (idx + 1) * num)
}

// Array(3) returns [ <3 empty items ]
// Array(3).fill() returns [undefined, undefined, undefined]
// Array(3).fill().map((_, idx) => (idx + 1) * 5) returns [5, 10, 15]