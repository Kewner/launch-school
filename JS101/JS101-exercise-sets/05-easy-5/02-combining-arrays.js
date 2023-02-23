// Write a function that takes two arrays as arguments, and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates in
// the original arrays. You may assume that both arguments will always be arrays.

function union(arr1, arr2) {
  let newArray = [];

  arr1.concat(arr2).forEach(num => {
    if (!newArray.includes(num)) newArray.push(num);
  });

  return newArray;
}

union([1, 3, 5], [3, 6, 9]);       // [1, 3, 5, 6, 9]
union([1, 3, 5, 1], [3, 6, 9]);    // [1, 3, 5, 6, 9]


// LS solution:
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union2() {
  let newArray = [];

  for (let idx = 0; idx < arguments.length; idx += 1) {
    copyNonDupsTo(newArray, arguments[idx]);
  }

  return newArray;
}

// This works properly with two array arguments, but also works with only one
// array, or with three or more arrays. To accomplish this, it makes use of the
// arguments object, which is available in all functions. The function simply
// iterates over the arguments, and calls copyNonDupsTo for each argument.

// Note that we do not use Array.prototype.forEach in the union function for
// Solution 2. While the arguments object looks and acts something like an Array,
// it is not actually an Array, so you cannot apply forEach directly.

function test() {
  console.log(arguments);
}

test('hoi', 46, [1, 2, 3, 5]);  // logs [Arguments] { '0': 'hoi', '1': 46, '2': [ 1, 2, 3, 5 ] }