
// Fibonacci sequence in mathematical terms:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// compute the sum of all integers between 1 and num:
function sum(num) {
  if (num === 1) {
    return 1;
  }

  return num + sum(num - 1);
}

console.log(sum (5));  // 15

// 5 + sum(5 - 1)         returns
// 4 + sum(4 - 1)       returns 
// 3 + sum(3 - 1)     returns 
// 2 + sum(2 - 1)   returns 
// 1              returns 1


// Write a recursive function that computes the nth Fibonacci number, where nth
// is an argument passed to the function.


// Examples:
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765