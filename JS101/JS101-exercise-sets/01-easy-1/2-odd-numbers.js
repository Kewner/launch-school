// Log all odd numbers from 1 to 99, inclusive, to the console. Log all
// numbers on separate lines.

// Solution 1
for (let num = 1; num < 100; num += 1) {
  console.log(num);
}

// Solution 2
for (let num = 0; num < 100; num += 1) {
  if (num % 2 !== 0) console.log(num);
}

// Further Exploration
// Repeat this exercise with a technique different from the one that you used,
// and different from the one provided. Also consider adding a way for the user
// to specify the limits of the odd numbers logged to the console.

let rlSync = require('readline-sync');

console.log('I will list odd numbers for you.');
let start = Number(rlSync.question('At what number should I start? '));
let stop = Number(rlSync.question('At what number should I stop? '));

// Using a for loop:
for (let num = start; num < stop; num += 1) {
  if (num % 2 !== 0) console.log(num);
}

// Using a while loop:
while (start < stop) {
  console.log(start);
  debugger;
  start += 1;
}