// Building a reduce method
// - reduce accepts array, callback, and initialValue as arguments.
// - the callback accepts accumulator, currentValue, currentIndex, and
//   array as arguments.

// pseudo-code:
// - initialize `accumulator` to `intitialValue`
// - initialize `currentIdx` to 0 (this is where we'll start iterating)
// - if `initialValue` equals undefined:
//     - reassign `accumulator` to array[0]
//     - reassign `currentIdx` to 1
// - iterate through the array
//     - call the callback function, passing it `accumulator`, the
//       array item at `currentIdx`, currentIndex, and array.
//     - reassign `accumulator` to the return value
// - return `accumulator`

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let startIdx = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startIdx = 1;
  }

  for (let idx = startIdx; idx < array.length; idx += 1) {
    accumulator = callback(accumulator, array[idx], idx, array);
  }

  return accumulator;
}

// simple reduce examples:
let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));  // 15
console.log(reduce(numbers, (prod, number) => prod * number));    // 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // 360
console.log(reduce([], (accum, number) => accum + number, 10));   // 10
console.log(reduce([], (accum, number) => accum + number));       // undefined

let stooges = ["Mo", "Larry", "Curly"];

console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, [])); // ["Curly", "Larry", "Mo"]

// passing the currentIdx argument to the callback:
console.log(reduce(numbers, (acc, cur, curIdx) => {
  return acc + cur + curIdx;
})); // 25
