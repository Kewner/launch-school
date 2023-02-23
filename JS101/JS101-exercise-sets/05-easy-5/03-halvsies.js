// Write a function that takes an array as an argument, and returns an array
// that contains two elements, each of which is an array. Put the first half of
// the original array elements in the first element of the return value, and put
// the second half in the second element. If the original array contains an odd
// number of elements, place the middle element in the first half array.

function halvsies(array) {
  let arr1 = [];
  let arr2 = [];
  let combinedArr = [arr1, arr2];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx < Math.ceil(array.length / 2)) {
      arr1.push(array[idx]);
    } else {
      arr2.push(array[idx]);
    }
  }

  return combinedArr;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// LS solution:
function halvsies2(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}