// Write a function that takes an arbitrary MxN matrix, rotates it clockwise
// by 90-degrees as described above, and returns the result as a new matrix.
// The function should not mutate the original matrix.

// Understanding the problem
// =========================
// - input: an array with one or more nested arrays containing numbers (MxN matrix)
// - output: a new array with the same MxN matrix, but rotated 90 degrees
// - rules:
//   explicit:
//      - the function rotate the input MxN matrix clockwise 90-degrees
//      - the function must return the result as a new matrix
//      - the function should not mutate the original matrix
//      - the matrix can be either a square matrix or a non-square matrix

// Data structures
// ===============
// we will use arrays

// Algorithm
// =========
// 1. create an array 'newMatrix'
// 2. add as many empty sub-arrays to 'newMatrix' as there are elements in the
//    first array of the input matrix
// 3. outer loop: iterate through sub-arrays of 'matrix' with 'subIdx'
//        inner loop: iterate through the elements of each sub-array with 'numIdx'
//            - add to the front: num at 'numIdx' to sub-array of 'newMatrix' with index 'numIdx'
//        end of inner loop
//    end of outer loop
// 4. return 'newMatrix'

function rotate90(matrix) {
  let newMatrix = [];

  for (let idx = 0; idx < matrix[0].length; idx += 1) {
    newMatrix.push([]);
  }

  matrix.forEach((subArray, subIdx) => {
    subArray.forEach((num, numIdx) => {
      newMatrix[numIdx].unshift(num);
    });
  });

  return newMatrix;
}

// Examples:

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// Cool solution by Stefano Schmidt:
// "Solution taking advantage of previous transpose function:"

function rotate90(matrix) {
  return transpose(matrix.slice().reverse());
}