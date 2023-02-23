// Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green'], ['d', 't', 'a', 'abc']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort((a, b) => b.charCodeAt() - a.charCodeAt());
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

// This solution doesn't work: 'abc' will end up at the last index of the 
// sub-array, where 'a' should be.

// LS solution:
let newArr1 = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(arr);
console.log(newArr);
console.log(newArr1);