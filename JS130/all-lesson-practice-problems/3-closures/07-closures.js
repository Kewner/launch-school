// Without running the following code, determine what value it logs on
// the last line. Explain how the program arrived at that final result.

'use strict';

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);  // prod is 6, result is 6
result += bar(4);     // prod is 24, result is 30
result += bar(5);     // prod is 120, result is 150
console.log(result);  // 150

// On line 12, foo is called with 2 as its argument. Inside foo, the prod
// variable is initialized with a value of 2.
// Then foo returns a function that accepts one argument, and reassigns
// prod to prod multiplied with the expected argument. Then it returns prod.

// The returned function keeps having access to prod because prod is in
// the function's closure. Each time bar is called, prod is updated.
