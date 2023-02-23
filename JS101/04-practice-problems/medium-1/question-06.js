// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

// Bonus: How can you reliably test if a value is NaN?

console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(5))  // false

// The output is false. NaN -- not a number -- is a special numeric value that
// indicates that an operation that was intended to return a number failed.
// JavaScript doesn't let you use == and === to determine whether a value is NaN.