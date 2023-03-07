// Without running the following code,
// determine what it logs to the console:

var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

// This will log NaN.
// The hoisted code would look like this:
function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

var bar;
bar = 82;

foo();

// Therefore, when reassigning bar to bar - 42 on line 15, the value of
// bar is undefined, so the expression results in NaN.
