// Write a function that takes an integer argument, and returns an array
// containing all integers between 1 and the argument (inclusive), in ascending
// order.

// You may assume that the argument will always be a positive integer.

function sequence(num) {
  let resultArr = [];

  for (let idx = 1; idx <= num; idx += 1) {
    resultArr.push(idx);
  }

  return resultArr;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

// Using map
function sequence2(num) {
  return [...Array(num).keys()].map(num => num + 1); // or:
  // return Array(num).fill().map((_, idx) => idx + 1);
}

// [...Array(5)] returns [undefined, undefined, undefined, undefined, undefined]
// [...Array(5).keys()] returns [0, 1, 2, 3, 4]
// [...Array(5).keys()].map(num => num + 1) returns [1, 2, 3, 4, 5]

// Using forEach
function sequence3(num) {
  let result = [];
  [...Array(num).keys()].forEach(num => result.push(num + 1));
  return result;
}

sequence3(5);    // [1, 2, 3, 4, 5]
sequence3(3);    // [1, 2, 3]
sequence3(1);    // [1]