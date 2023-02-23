// Alan wrote the following function, which was intended to return all of the
// factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);

//   return factors;
// }

// Alyssa noticed that this code would fail when the input is 0 or a negative
// number, and asked Alan to change the loop. How can he make this work without
// using a do/while loop? Note that we're not looking to find the factors for
// 0 or negative numbers, but we want to handle it gracefully instead of raising
// an exception or going into an infinite loop.

// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   if (number <= 0) {
//     factors = 'Please enter a positive integer!';
//   } else {
//     while (divisor > 0) {
//       if (number % divisor === 0) factors.push(number / divisor);
//       divisor -= 1;
//     }
//   }
//   return factors;
// }

function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) factors.push(number / divisor);
    divisor -= 1;
  }
  return factors;
}

console.log(factors(26));
console.log(factors(0));
console.log(factors(-5));

// Bonus: What is the purpose of number % divisor === 0 in that code?
// It determines whether number is divisible by divisor, which would
// mean that it's a factor of number, and should be added to the array.