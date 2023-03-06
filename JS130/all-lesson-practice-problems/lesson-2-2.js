// Consider the following code:

for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

// Without running this code, what does it print?

// undefined
// 'Hello'
// 'Bye'
// 2

// - The for loop iterates through 0 and 1, so 2 iterations.
// - Each iteration, it starts with logging the value of foo:
//     - The first iteration, that value is undefined: var variables are
//       function-scoped and are hoisted with a value of undefined. Then.
//       since index equals 0, foo is initialized to a value of 'Hello'.
//     - The second iteration, 'Hello' is logged. Then, foo is reassigned
//       to 'Bye', and the loop finishes.
// - The value of foo, 'Bye', is logged. It's accessible in the global scope
//   because it was declared with var, which is function-scoped.
// - The value of index, 2, is logged: index was also declared with var.

// The hoisted code would be:

var index;
var foo;

for (index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);
