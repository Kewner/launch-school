// You are given array of integers, your task will be to count all pairs in that
// array and return their count.

// - Array can be empty or contain only one value; in this case return 0
// - If there are more pairs of a certain number, count each pair only once.
//   E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// - Random tests: maximum array length is 1000, range of values in array is
//   between 0 and 1000.

function duplicates(arr) {
  let pairs = {};
  let amountOfPairs = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    let num = arr[idx];

    if (!pairs[num]) {
      pairs[num] = 1;
    } else {
      pairs[num] += 1;
    }

    if (pairs[num] === 2) {
      amountOfPairs++;
      pairs[num] = 0;
    }
  }

  return amountOfPairs;
}

duplicates([1, 2, 5, 6, 5, 2]);  // 2
duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]);  //  4