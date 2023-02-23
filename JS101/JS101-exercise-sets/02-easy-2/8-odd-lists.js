// Write a function that returns an Array that contains every other element
// of an Array that is passed in as an argument. The values in the returned
// list should be those values that are in the 1st, 3rd, 5th, and so on
// elements of the argument Array.

function oddities(array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index % 2 === 0) {
      result.push(array[index]);
    }
  }
  return result;
}

// // LS function:
// function oddities(array) {
//   let oddElements = [];
//   for (let idx = 0; idx < array.length; idx += 2) {
//     oddElements.push(array[idx]);
//   }
//   return oddElements;
// }

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Further Exploration
// Write a companion function that returns the 2nd, 4th, 6th, and so on
// elements of an array. Try to solve this exercise in a different way.

// Using the filter method:
function evenArray(array) {
  return array.filter(element => array.indexOf(element) % 2 !== 0);
}

console.log(evenArray([1, 2, 3, 4, 5, 6, 7]));

// Using the forEach method:
function evenArray2(array) {
  let result = [];

  array.forEach(function(element, index) {
    if (index % 2 !== 0) result.push(element);
  });

  return result;
}

console.log(evenArray2([2, 3, 4, 5, 6]));