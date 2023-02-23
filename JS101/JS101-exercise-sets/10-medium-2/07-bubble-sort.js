// Bubble Sort is one of the simplest sorting algorithms available. It is not an
// efficient algorithm, so developers rarely use it in real code. However, it is
// an excellent exercise for student developers. In this exercise, you will write
// a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array.
// On each pass, the two values of each pair of consecutive elements are
// compared. If the first value is greater than the second, the two elements are
// swapped. This process is repeated until a complete pass is made without
// performing any swaps. At that point, the array is completely sorted.

// We can stop iterating the first time we make a pass through the array without
// making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the
// algorithm, as well as a minor optimization technique — see the Bubble Sort
// Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using
// the bubble sort algorithm described above. The sorting should be done
// "in-place" — that is, the function should mutate the array. You may assume
// that the array contains at least two elements.

// PEDAC
// =====
// - bubble sort iterates through an array
// - on each pass, 2 consecutive elements are compared
// - if the first value > second value, the elements are swapped
// - this process is repeated until complete pass is made without any swaps

// Understanding the problem
// =========================
// input: array
// output: array, sorted from smallest to greatest or alphabetically
// rules:
// explicit:
//    - the input array contains at least 2 elements
//    - the elements have to be sorted, smallest to greatest or alphabetically
//    - sorting should be done in-place (mutating the array)
// implicit:
//    - the array can contain integers or strings

// Data structures
// ===============
// just the original array

// Algorithm
// =========
// 1. declare variable 'swapped' with 'true'
// 2. declare 'index' with 0
// 3. iterate through all elements of the array except for the last one
//      - compare element of current index with element of current idx + 1
//      - if current element is greater than second element, swap elements
//      - if elements got swapped, assign 'true' to 'swapped'
//      - if 'index' < second to last index of array, increment 'index' with 1;
//        otherwise, set index to 0, set 'swapped' to false
//    repeat loop as until current element is last element to be checked AND
//    'swapped' equals 'false'
// 4. return sorted array

function bubbleSort(arr) {
  let swapped = false;
  let index = 0;
  let lastStartingIdx = arr.length - 2;

  do {
    if (arr[index] > arr[index + 1]) {
      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
      swapped = true;
    }

    if (index < lastStartingIdx) {
      index += 1;
    } else {
      index = 0;
      swapped = false;
    }

  } while (swapped || !(index === lastStartingIdx));

  return arr;
}

// Examples
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array4 = [5, 3, 1];
bubbleSort(array4);
console.log(array4);    // [1, 3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// LS solution
// ===========
function bubbleSort(array) {
  while (true) {
    let swapped = false;

    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swapped = true;
    }

    if (!swapped) break;
  }
}

// This solution uses a for loop to iterate through all the elements.
// Since it is nested inside a while loop, it will be performed over and over.
// It will stop when 'swapped' is false, which can only be the case after a
// complete pass of the for loop has been performed without any swaps.