// Log all even numbers from 1 to 99, inclusive, to the console.
// Log all numbers on separate lines.

for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 0) console.log(num);
}

// LS solution:
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}