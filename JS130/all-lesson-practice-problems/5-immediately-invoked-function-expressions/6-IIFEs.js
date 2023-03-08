// Consider the following code from a practice problem in an earlier lesson:

function foo(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result); // 150

// Rewrite this code using an IIFE. Your solution should
// no longer need the name foo.

let bar1 = (function(start) {
  let prod = start;

  return function(factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result1 = bar1(3);
result1 += bar1(4);
result1 += bar1(5);
console.log(result1); // 150
