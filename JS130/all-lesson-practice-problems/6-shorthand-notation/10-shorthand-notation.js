// Write a function that takes 5 string arguments, and returns an
// object with 3 properties:

// - first: the first argument
// - last: the last argument
// - middle: the middle 3 arguments as a sorted array

// After writing the function, write some code to call the function. The
// arguments you provide should come from an array. You should create
// local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

'use strict';

function returnObj(...args) {
  return {
    first: args[0],
    last: args[4],
    middle: [args[1], args[2], args[3]].sort(),
  };
}

const strings = ['hi', 'hello', 'bye', 'morning', 'yo'];
let { first, last, middle } = returnObj(...strings);

console.log(first, last, middle); // hi yo ['bye', 'hello', 'morning']

// LS solution (modified for variable reassignment)
function qux(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
({ first, last, middle } = qux(...arr));

console.log(first, last, middle); // Fluffy Butterscotch ['Ben', 'Mister', 'Pudding']
