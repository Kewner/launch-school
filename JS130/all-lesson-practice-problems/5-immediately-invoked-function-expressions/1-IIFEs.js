// Will the following code execute without error?
// Try to answer without running it.

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// No, the function declaration should be wrapped in parentheses, as it
// has to be converted to a function expression before invoking it with
// immediate invocation syntax.
