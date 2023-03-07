// Consider the following code:

var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

// Without running this code, what will it display?
// Explain your reasoning.

// The function foo will be hoisted, while the var declaration is discarded.
// The hoisted code would look like this:

function foo() {
  console.log("Hello");
}

foo = function() {
  console.log("Bye");
};

foo();

// Since foo is reassigned before foo is being called, 'Bye' will be logged.
