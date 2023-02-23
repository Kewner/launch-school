// The || operator returns a truthy value if either or both of its operands
// are truthy, a falsey value if both operands are falsey. The && operator
// returns a truthy value if both of its operands are truthy, and a falsey
// value if either operand is falsey. This works great until you need only
// one of two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two
// arguments, and returns true if exactly one of its arguments is truthy,
// false otherwise.

// function xor(arg1, arg2) {
//   // return ((arg1 && !arg2) || (!arg1 && arg2));
//   if ((arg1 && !arg2) || (!arg1 && arg2)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function xor(value1, value2) {
  return (value1 && !value2) || (value2 && !value1);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

console.log(xor(3, null));  // true
console.log(xor(true, true));  // false
console.log(xor(false, true)); // true
console.log(xor(5, ''));  // true
console.log(xor(undefined, 3)); // true
console.log(xor(0, undefined));  // undefined
console.log(xor(0, 0)); // 0

let value = 0;
if (!value) console.log('hi');