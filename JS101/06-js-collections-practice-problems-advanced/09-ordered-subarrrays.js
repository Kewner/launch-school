// Given the following data structure, return a new array with the same
// structure, but with the subarrays ordered -- alphabetically or numerically
// as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3, 14, 16], ['blue', 'black', 'green']];

let newArr = arr.map(subArray => {
  return (typeof subArray[0] === 'string') ? subArray.slice().sort() :
                                             subArray.slice().sort((a, b) => a - b);
});

console.log(newArr);
console.log(arr);

// A different version of sort() is required for numbers and strings:
// With strings, a - b would result in 'b' - 'c' = NaN