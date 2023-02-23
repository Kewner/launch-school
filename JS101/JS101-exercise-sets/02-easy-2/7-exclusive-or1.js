// The || operator returns a truthy value if either or both of its operands
// are truthy, a falsey value if both operands are falsey. The && operator
// returns a truthy value if both of its operands are truthy, and a falsey
// value if either operand is falsey. This works great until you need only
// one of two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two
// arguments, and returns true if exactly one of its arguments is truthy,
// false otherwise.

// function xor(value1, value2) {
//   if ((value1 && !value2) || (!value1 && value2)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function xor(value1, value2) {
  return (value1 && !value2) || (value2 && !value1);
}

console.log(xor(undefined, 5));
console.log(xor(undefined, null));
console.log(xor(null, undefined));
console.log(xor(false, ""));
console.log(xor("", 3));