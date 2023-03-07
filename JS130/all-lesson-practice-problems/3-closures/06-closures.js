// Write a program that uses two functions, add and subtract, to
// manipulate a running total. When you invoke either function with
// a number, it should add or subtract that number from the running
// total and log the new total to the console.

let total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

// It should work like this:
add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10
