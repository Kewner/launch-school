// Write a JavaScript function named delayLog that loops through the
// numbers from 1 to 10, and logs each number after that number of
// seconds. It should log 1 after 1 second, 2 after 2 seconds, and
// so on.

function delayLog() {
  for (let num = 1; num <= 10; num += 1) {
    setTimeout(() => console.log(num), num * 1000);
  }
}

delayLog();

console.log('Hello');

/* The rest of the program must finish running before code
executed with setTimeout will even begin to run:

1. At 0s (execution start) the loop starts running and keeps running
   till it finishes, setting up 10 delayed function calls.
2. The last line of synchronous code runs, logging 'Hello'.
3. 1s after 'Hello' is logged, the 1st delayed call runs.
4. 2s after 'Hello' is logged, the 2nd delayed call runs.
5. 3s after 'Hello' ... etc. */

function delayLog2() {
  for (let delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), 1000);
  }
}

/* This solution doesn't work: each of the 10 calls would be delayed
1s, so all of them would be called 1s after 'Hello' was logged. */