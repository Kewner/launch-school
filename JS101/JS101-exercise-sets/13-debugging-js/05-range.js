// We are assigned the task to implement a range function that returns an
// array of integers beginning and ending with specified start and end numbers.
// When only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples
console.log(range(10, 20));
console.log(range(5));

// - Both function have the same name.
// - When calling `range`, the second range function will be called.
// - Inside that function, it will call itself, over and over again.

// One solution would be to change the name of the last range function to
// something like `rangeEnd`, and change the function call accordingly.

// Another solution would be to implement all code in one function:

function range(start, end) {
  let range = [];

  if (end === undefined) {
    [start, end] = [0, start];
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Further exploration
// There are two reasons why the following is not a working solution.
// Can you spot them?

function range(start, end) {
  if (!end) { // this block of code will also be executed when 'end' is 0
    start = 0;
    end = start;  // this assigns 0 to 'end' as well
  }

  // ...
}

// Cool solution by Slavik Koltunov
function range(start, end = start) {
  let range = [];

  if (end === start) {
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}