// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

// PEDAC
// =====
// input: an array
// output: a new array
// rules:
// - if the input is not an array, return undefined
// - if the input is an empty array, return an empty array
// - for a non-empty array, slice off the first element and append it to the
//   end of the array 

// algorithm
// 1. check if 'arr' is array
//      - if not, return undefined
// 2. declare 'rotatedArray' with slice of input array, elements of index 1 to the end
// 3. check if length of 'arr' is greater than 0
//      - if true, append first element of 'arr' to 'rotatedArray'
// 4. return rotatedArray

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  let rotatedArray = arr.slice(1);
  
  if (arr.length > 0) {
    rotatedArray.push(arr[0]);
  }
  
  return rotatedArray;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined

// the input array is not mutated
let arr = [1, 2, 3, 4, 5];
rotateArray(arr);
console.log(arr);

// Bilal Dar solution:
function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;

  return array.length === 0 ? [] : array.slice(1).concat(array[0]);
}