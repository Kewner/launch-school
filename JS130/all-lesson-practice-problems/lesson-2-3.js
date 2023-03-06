// The following code doesn't work:

// bar();

// var bar = function() {
//   console.log("foo!");
// };

// Without changing the order of the invocation and function definition,
// update this code so that it works.

// Using a function declaration would fix this, because with a function
// declaration the entire function will be hoisted:

bar();

function bar() {
  console.log("foo!");
};
