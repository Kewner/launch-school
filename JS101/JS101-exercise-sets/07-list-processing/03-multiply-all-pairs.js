// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    let num1 = arr1[idx1];

    for (let idx2 = 0; idx2 < arr2.length; idx2++) {
      let num2 = arr2[idx2];
      result.push(num1 * num2);
    }
  }

  console.log(result.sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// LS solution
function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(item1 => {
    array2.forEach(item2 => {
      products.push(item1 * item2);
    });
  });
  return products.sort((item1, item2) => item1 - item2);
}