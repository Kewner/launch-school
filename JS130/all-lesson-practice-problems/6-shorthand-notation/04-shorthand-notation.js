// Rewrite the following code using classic JavaScript syntax:

'use strict';

function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let [ bar, qux, baz ] = result;
console.log(bar, qux, baz); // 3 5 1

// solution
function foo1(arr) {
  return [arr[2], 5, arr[0]];
}

let array1 = [1, 2, 3];
let result1 = foo1(array);
let bar1 = result1[0];
let qux1 = result1[1];
let baz1 = result1[2];
console.log(bar1, qux1, baz1); // 3 5 1
