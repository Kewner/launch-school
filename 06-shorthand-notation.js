// Rewrite the following code using classic JavaScript syntax:

'use strict';

function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result); // 120

// solution using arguments object
function product1() {
  return [].reduce.call(arguments, (total, number) => total * number);
}

let result1 = product1(2, 3, 4, 5);
console.log(result1); // 12-

// solution using arguments object with Array.from
function product2() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result2 = product2(2, 3, 4, 5);
console.log(result2); // 120
