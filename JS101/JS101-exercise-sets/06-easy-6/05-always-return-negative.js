// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

function negative(num) {
  return num < 0 ? num : -num;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// LS solution:
function negative1(number) {
  return Math.abs(number) * -1;
}

// Further Exploration
// Did you notice that negative(0) returns -0? What is this value, -0? Is it
// different from 0 in some way? Use Google to look for an explanation of -0. In
// particular, see if you can learn how to differentiate between 0 and -0 in a
// program.

Object.is(0, 0);   // true
Object.is(0, -0);  // false