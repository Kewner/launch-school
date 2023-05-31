// Write a function named startCounting that logs a number to the
// console every second, starting with 1. Each output number
// should be one greater than the previous one.

function startCounting() {
  let count = 0;

  setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);
}

startCounting();