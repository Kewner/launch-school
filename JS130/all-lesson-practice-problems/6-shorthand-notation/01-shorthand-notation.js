// Rewrite the following code using classic JavaScript syntax. That is,
// write it without using any of the shorthand notations described in the
// previous assignment.

'use strict';

function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}

// solution
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
