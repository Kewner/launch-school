// Write three different ways to remove all of the elements
// from the following array:

let numbers = [1, 2, 3, 4];

// Setting the length property to 0:
numbers.length = 0;

// Using splice():
// numbers.splice(0, numbers.length);

// Using pop() in a while loop:
// while (numbers.length > 0) {
//   numbers.pop();
// }

// Using shift() in a while loop:
// while (numbers.length > 0) {
//   numbers.shift();
// }

console.log(numbers);