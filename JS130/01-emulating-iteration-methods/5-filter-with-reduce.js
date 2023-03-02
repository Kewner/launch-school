// Using reduce to get the functionality of filter
// - filter accepts array, callback, and thisArg as arguments.
// - the callback accepts element, index, and array as arguments.

let numbers = [1, 2, 3, 4, 5];

function filter(array, callback, thisArg) {
  return array.reduce((filtered, current, idx, arr) => {
    if (callback.call(thisArg, current, idx, arr)) {
      return filtered.concat(current);
    }

    return filtered;
  }, []);
}

console.log(filter(numbers, number => number > 3)); // [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // []
console.log(filter(numbers, () => true)); // [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // [ 'abc', 'xyz' ]

// passing element and index arguments to callback:
let numStrings = ['zero', 'one', 'two', 'four', 'five', 'six', 'seven'];

console.log(filter(numStrings, (value, index) => {
  return (index % 2 === 0) && (value.length > 3);
})); // [ 'zero', 'five', 'seven' ]
