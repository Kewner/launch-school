// Write a function that takes two sorted arrays as arguments, and returns a
// new array that contains all the elements from both input arrays in sorted
// order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// Understanding the problem
// =========================
// input: two sorted arrays
// input: a new array, containing all elements from both input arrays, sorted
// rules:
//  explicit:
//    - the function should not mutate the input arrays
//    - the solution may not require to sort the result array
//    - the result array must be built one element at a time, in the proper order
//  implicit:
//    - if one of the input arrays is empty, the new array equals the other inut array

// Data structures
// ===============
// we will work with arrays

// Algorithm
// =========
// 1. create empty array 'result'
// 2. create copy of array 1 called 'arr1'
// 3. create copy of array 2 called 'arr2'
// 2. compare 1st num of 1st array to 1st num of 2nd array
//      - if both exist
//          - add smallest to 'result'
//          - delete added num from that array
//      - else:
//          - add existing num to 'result'
//          - remove added num from that array
// return 'result'

// Very wordy, ugly solution
// function merge(array1, array2) {
//   let result = [];
//   let arr1 = array1.slice();
//   let arr2 = array2.slice();

//   while (arr1.length > 0 || arr2.length > 0) {
//     if (arr1[0] && arr2[0]) {
//       if (arr1[0] < arr2[0]) {
//         result.push(arr1[0]);
//         arr1.shift();
//       } else {
//         result.push(arr2[0]);
//         arr2.shift();
//       }
//     } else if (!arr1[0]) {
//       result.push(arr2[0]);
//       arr2.shift();
//     } else {
//       result.push(arr1[0]);
//       arr1.shift();
//     }
//   }

//   console.log(result);
//   return result;
// }


// 1. iterate through all elements of both arrays
// 2. each complete round, determine the smallest number and add it to result array
// 3. remove the added number from the original array

function merge(array1, array2) {
  let arr1 = array1.slice();
  let arr2 = array2.slice();
  let smallest = arr1[0];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    if (arr1[0] < smallest) smallest = arr1[0];
    if (arr2[0] < smallest) smallest = arr2[0];
    console.log(smallest);
    // /
  }
}


// Examples:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]