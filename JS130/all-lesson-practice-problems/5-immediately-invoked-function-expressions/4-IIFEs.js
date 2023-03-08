// Consider the following code and output:

// countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// Replace the invocation of countdown with an IIFE that produces the
// same results.

(function(start) {
  for (let current = start; current >= 0; current -= 1) {
    console.log(current);
  }
})(7);

// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
