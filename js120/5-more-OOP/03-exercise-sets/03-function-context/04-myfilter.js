/* In this exercise, we'll update an implementation of myFilter by adding the
functionality of accepting an optional thisArg just like the original
Array.prototype.filter.

Here's an implementation. We also show an example of how we want to call our
modified function: the 3rd argument, filter, supplies the desired context
(thisArg). */

// like the original filter, myFilter should accept 3 arguments:
// - array    => the array to iterate through
// - func     => the callback to execute on each array element
// - thisArg  => the execution context

// - forEach iterates through the array elements
// - if its callback (func) returns true, add the current element to result
// - the filter object should be the execution context of the func call, so
//   that this.allowedValues refers to filter.allowedValues - to do this, we
//   can pass it to myFilter using a thisArg argument

function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function(value) {
    // if (func.bind(thisArg)(value)) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

const result = myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter);

console.log(result); // logs [5, 6, 9]