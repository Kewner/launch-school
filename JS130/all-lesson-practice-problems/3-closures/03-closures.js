// Let's move the variable declaration into makeCounter now. What do the
// 4 console.log statements at the end of this program print? Try to
// answer without running the code:

'use strict';

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

// The returned function has access to counter, which was declared in the
// scope of makeCounter. Each time the returned function is called, the
// value of counter is incremented by 1 and then returned.

// However, on line 18 we reassign incrementCounter to a newly returned
// counter function. Therefore, a new counter variable is declared inside
// makeCounter, and given a value of 0.
