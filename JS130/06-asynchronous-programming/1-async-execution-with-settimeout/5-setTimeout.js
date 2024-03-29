// Write a function named afterNSeconds that takes two arguments:
// a callback and a time duration in seconds. It should wait for
// the indicated period, then invoke the callback function.

function afterNSeconds(callback, delayInSeconds) {
  setTimeout(callback, delayInSeconds * 1000);
}

afterNSeconds(() => console.log('Hello!'), 3);