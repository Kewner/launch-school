// Given the following data structure, write some code to return an array which
// contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(obj => {
  return Object.values(obj).flat().every(num => num % 2 === 0);
});

console.log(newArr);

// LS solution
arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// line 18 checks if every number in each sub-array is even, ie.
//                if the callback has returned 'true' for each sub-array
// line 19 checks if every number in the current sub-array is even