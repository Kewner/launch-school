// Let's modify our program a little by moving the let statement into the
// function returned by makeCounter. What do the 4 console.log statements
// at the end of this program print? Try to answer without running
// the code:

function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

// The output is always 1: each time the returned function is called, the
// counter variable is initialized with a value of 0.
