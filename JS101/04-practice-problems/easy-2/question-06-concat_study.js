// New array is flat:
let letters = ['a', 'b', 'c'];
let alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);  // ['a', 'b', 'c', 1, 2, 3]

// New array is not flat:
let num1 = [[1, 2], 3];
let num2 = [4, [5]];

let numbers = num1.concat(num2);

console.log(numbers); // [ [1, 2], 3, 4, [5] ]

// These nested arrays are still arrays because concat() doesn't
// recurse into nested array arguments.

// Retention of references:
num1[0].push(4);
console.log(numbers); // 4 is added to [1, 2], the referenced nested array

num1.push('hello');
console.log(num1);

console.log(numbers);
// 'hello' is not added to (shallow copy of) array num1
