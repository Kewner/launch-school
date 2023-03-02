// Building a filter method.
// - filter accepts array, callback, and thisArg as arguments.
// - the callback accepts element, index, and array as arguments.

function filter(array, callback, thisArg) {
  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (callback.call(thisArg, array[idx], idx, array)) {
      result.push(array[idx]);
    }
  }

  return result;
}

// simple filter examples:
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // []
console.log(filter(numbers, () => true));           // [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // [ 'abc', 'xyz' ]

// passing element and index arguments to callback:
let strings = ['zero', 'one', 'two', 'four', 'five', 'six', 'seven'];

console.log(filter(strings, (value, index) => {
  return (index % 2 === 0) && (value.length > 3);
})); // [ 'zero', 'five', 'seven' ]
