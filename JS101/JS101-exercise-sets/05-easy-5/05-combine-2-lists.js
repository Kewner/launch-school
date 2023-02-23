// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the
// same number of elements.

function interleave(arr1, arr2) {
  let combinedList = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    combinedList.push(arr1[idx], arr2[idx]);
  }

  return combinedList;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// Further Exploration
// Try to solve this problem using Array.prototype.forEach method.
function interleave2(arr1, arr2) {
  let newArray = [];

  arr1.forEach((val, idx) => {
    newArray.push(val, arr2[idx]);
  })

  return newArray;
}

interleave2([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// Can you solve it using map or reduce?

// map
function interleave3(arr1, arr2) {
  let newArray = arr1.map((val, idx) => {
    return [val].concat(arr2[idx]);
  }).flat();

  return newArray;
}

// map, more concise
function interleave3(arr1, arr2) {
  let newArray = arr1.map((val, idx) => [val, arr2[idx]]).flat();
    // map() returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
    // flat() flattens it to [ 1, 'a', 2, 'b', 3, 'c' ]
  return newArray;
}

interleave3([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// reduce
function interleave4(arr1, arr2) {
  let newArray = arr1.reduce((acc, cur, idx) => acc.concat(cur, arr2[idx]), []);

  return newArray;
}

interleave4([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]