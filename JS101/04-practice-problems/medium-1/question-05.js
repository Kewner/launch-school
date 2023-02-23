// What will the following two lines of code output?
// Don't look at the solution before you answer.

console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // true

// Nope!
console.log(0.3 + 0.6); // 0.8999999999999999
console.log(0.3 + 0.6 === 0.9); // false

// JavaScript uses floating point numbers for all numeric operations. Most
// floating point representations used on computers lack a certain amount of
// precision, and that can yield unexpected results like these.