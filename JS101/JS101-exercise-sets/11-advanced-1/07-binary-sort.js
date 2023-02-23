// Implement a binarySearch function that takes an array and a searchItem as
// arguments, and returns the index of the searchItem if found, or -1 otherwise.
// You may assume that the array argument will always be sorted.

// Understanding the problem
// =========================
// input: an array and a string
// output: the index of the string in the array, if found; -1 otherwise
// rules:
//  explicit:
//  - use a binary search algorithm
//  - assume that the array argument will always be sorted

// Data structures
// ===============
// we will use and manipulate the array; we will also use a string

// Algorithm
// =========
// 1. retrieve the middle value from the array
// 2. if the middle value is equal to 'searchItem', return the index of the middle value
// 3. if the middle value is less than 'searchItem'
//      - discard lower half of array, including middle value
//      - repeat process from the top, using upper half as starting data
// 4. if the middle value is greater than 'searchItem', do the same as the
//    previous step, but with opposite halves

// function binarySearch(array, searchItem) {
//   let startIdx = 0;
//   let endIdx = array.length;

//   while (true) {
//     let searchArr = array.slice(startIdx, endIdx);
//     let middleIdx = Math.ceil(searchArr.length / 2 - 1);

//     if (searchArr[middleIdx] === searchItem) {
//       console.log(Math.abs(middleIdx + startIdx))
//       return Math.abs(middleIdx + startIdx);
//     } else if (searchArr.length === 1) {
//       console.log(-1);
//       return -1;
//     } else if (searchArr[middleIdx] < searchItem) {
//       startIdx += middleIdx + 1;
//     } else if (searchArr[middleIdx] > searchItem) {
//       endIdx = middleIdx;
//     }    
//   }
// }

function binarySearch(array, searchItem) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm

// Examples:
// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12);
// binarySearch([5, 6, 7], 5);
binarySearch([1, 2, 3, 4], 7);
// binarySearch([1, 2, 3, 4, 5, 6], 6)
// binarySearch([1], 3);

// let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// binarySearch(yellowPages, 'Pizzeria');                   // 7
// binarySearch(yellowPages, 'Apple Store');                // 0

// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6