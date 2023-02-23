// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array that contains the product of each pair of
// numbers from the arguments that have the same index. You may assume that the
// arguments contain the same number of elements.

// input: 2 array arguments
// multiply each pair of numbers with same index
// output: new array with product numbers

// using for loop:
function multiplyList(arr1, arr2) {
  let newArray = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    newArray.push(arr1[idx] * arr2[idx])
  }

  console.log(newArray);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// using reduce:
function multiplyList2(arr1, arr2) {
  return arr1.reduce((acc, cur, idx) => acc.concat(cur * arr2[idx]), []);
}

multiplyList2([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// using map:
function multiplyList3(arr1, arr2) {
  return arr1.map((val, idx) => val * arr2[idx]);
}

multiplyList3([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]