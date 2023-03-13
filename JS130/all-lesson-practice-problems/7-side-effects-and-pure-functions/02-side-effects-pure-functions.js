// Which of the following functions are pure functions?

// Function 1: not a pure function
function sum(a, b) {
  console.log(a + b); // input/output side effect
  return a + b;
}

// Function 2: pure function
function sum(a, b) {
  a + b; // return value is always undefined
}

// Function 3: pure function
function sum(a, b) {
  return a + b; // return value depends solely on arguments
}

// Function 4: not a pure function
function sum(a, b) {
  return a + b + Math.random(); // not the same value with same arguments
}

// Function 5: pure function
function sum(a, b) {
  return 3.1415; // return value is always 3.1415
}

// Functions 2 and 5 always return the same value for all possible
// arguments. The fact that the return value is always the same regardless
// of the arguments doesn't change its status as a pure function.
