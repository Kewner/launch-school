// Using reduce to get the functionality of map
// - map accepts array, callback, and thisArg as arguments.
// - the callback accepts element, index, and array as arguments.

function map(array, callback, thisArg) {
  return array.reduce((mapped, current, idx, arr) => {
    return mapped.concat(callback.call(thisArg, current, idx, arr));
  }, []);
}

// simple map examples:
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// passing element, index, and array arguments to callback:
console.log(map(numbers, (element, index, arr) => {
  return `${element} times ${index} equals ${element * index}! ` +
         `The next element is ${arr[index + 1]}!`
}));

// [
//   '1 times 0 equals 0! The next element is 2!',
//   '2 times 1 equals 2! The next element is 3!',
//   '3 times 2 equals 6! The next element is 4!',
//   '4 times 3 equals 12! The next element is 5!',
//   '5 times 4 equals 20! The next element is undefined!'
// ]
