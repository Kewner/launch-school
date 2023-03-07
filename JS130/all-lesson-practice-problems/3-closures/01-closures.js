// What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

'use strict';

let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4

// All function invocations share the same counter variable, since that
// variable has been declared in the global scope.
