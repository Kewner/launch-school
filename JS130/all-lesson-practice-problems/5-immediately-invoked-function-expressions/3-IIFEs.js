// The code below throws an error. Why?
// Correct the problem by using an IIFE.

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// The function body of function sum1 gets hoisted, and the var sum1 variable
// declaration is discarded. This means that after declaring function sum1,
// sum1 is reassigned to 0. Then, on line 17, we try to call sum1 as a
// function, which it no longer is.

// Using an IIFE, this works:
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum); // 49

// The function is now in a private scope, with no chance of variable
// names that conflict with variable names in the outer scope.
