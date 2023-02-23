// Given the following data structure, sort the array so that the sub-arrays
// are ordered based on the sum of the odd numbers that they contain.

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  a = a.filter(num => num % 2 === 1).reduce((acc, cur) => acc + cur);
  b = b.filter(num => num % 2 === 1).reduce((acc, cur) => acc + cur);

  return a - b;
});

console.log(arr);