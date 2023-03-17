// How can we refactor the function definition below (without changing
// the function invocation) so that we don't need to use the arguments
// object?

function sum() {
  values = Array.prototype.slice.call(arguments);

  return values.reduce(function(a, b) {
    return a + b;
  });
}

sum(1, 4, 5, 6); // 16

// by collecting the arguments into an array using rest syntax:
function sum1(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

sum1(1, 4, 5, 6); // 16
