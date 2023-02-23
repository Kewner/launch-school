// A 3x3 matrix can be represented by an array of arrays: 

let originalMatrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

originalMatrix[1];    // references entire row [4, 7, 2]
originalMatrix[0][2]; // references 8 (first row, third column)

// The transpose of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix:

let transposedMatrix = [
  [1, 4, 3],
  [5, 7, 9],
  [8, 2, 6],
];

// Write a function that takes an array of arrays representing a 3x3 matrix, and
// returns the transpose of the matrix. You should implement the function on
// your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

// Understanding the problem
// =========================
// input: an array with 3 nested arrays, each of them containing 3 numbers
// output: a new array, similar to the input array, but transposed
// rules:
// explicit:
//    - the rows and columns of the input array must be exchanged
//    - the original array must not be modified

// Data structures
// ===============
// we will use arrays

// Algorithm
// =========
// row 1
// matrix[0][0] becomes newMatrix[0][0]
// matrix[0][1] becomes newMatrix[1][0]
// matrix[0][2] becomes newMatrix[2][0]

// row 2
// matrix[1][0] becomes newMatrix[0][1]
// matrix[1][1] becomes newMatrix[1][1]
// matrix[1][2] becomes newMatrix[2][1]

// row 3
// matrix[2][0] becomes newMatrix[0][2]
// matrix[2][1] becomes newMatrix[1][2]
// matrix[2][2] becomes newMatrix[2][2]

// 1. create newMatrix with [[], [], []]
// 2. iterate through all rows (sub-arrays) with 'rowIdx':
//      - for each row, iterate through all columns (columnIdx):
//          - add each element to 'newMatrix' at 'newMatrix[columnIdx][rowIdx]'
//      end of inner loop
//    end of outer loop
// 3. return 'newMatrix'

// function transpose(matrix) {
//   let newMatrix = [[], [], []];

//   matrix.forEach((row, rowIdx) => {
//     row.forEach((column, columnIdx) => {
//       newMatrix[columnIdx].push(matrix[rowIdx][columnIdx]);
//     });
//   });

//   // matrix[0][0] is added to newMatrix[0]
//   // matrix[0][1] is added to newMatrix[1]
//   // matrix[0][2] is added to newMatrix[2]

//   return newMatrix;
// }


// Collin Vine solution:
let transpose = matrix => {
  return matrix.map((el, i1) => {
    return matrix.map((el, i2) => matrix[i2][i1]);
  })
}

// Examples:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


// From LS explanation
// ===================
// The trick to the nested loops is reversing the index positions to populate
// the new nested array. Typically, nested arrays are populated row-by-row, but
// the solution does it column-by-column.

// To help visualize how these loops work, we'll walk through what happens
// during the first iteration of the outer loop:

// - outer loop: `for (let rowIdx = 0; rowIdx < 3; rowIdx += 1)`

//   - inner loop: `for (let colIdx = 0; colIdx < 3; colIdx += 1)`

//       transposed --> [[], [], []]
//       rowIdx --> 0
//       colIdx --> 0
//       transposed[0].push(matrix[0][0]);

//       transposed --> [[1], [], []]
//       rowIdx --> 0
//       colIdx --> 1
//       transposed[1].push(matrix[0][1]);

//       transposed --> [[1], [5], []]
//       rowIdx --> 0
//       colIdx --> 2
//       transposed[2].push(matrix[0][2]);

//     transposed --> [[1], [5], [8]]

// Further Exploration
// ===================
// Write a transposeInPlace method that transposes a 3x3 matrix in place. The
// obvious solution is to reuse transpose from above, then copy the results back
// into the array specified by the argument. For this further exploration,
// though, don't use this approach; write your method from scratch without
// creating a new matrix or any new arrays.

function transposeInPlace(matrix) {
  // ???

  return matrix;
}

transposeInPlace(matrix);
console.log(matrix);  // [ [ 1, 4, 3 ], [ 5, 7, 9 ], [ 8, 2, 6 ] ]