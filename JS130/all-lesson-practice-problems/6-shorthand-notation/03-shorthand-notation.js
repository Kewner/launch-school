// Rewrite the following code using classic JavaScript syntax:

'use strict';

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);

// solution:
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let baz1 = obj.baz;
let qux1 = obj.qux;
let bar1 = obj.bar;

console.log(baz1, qux1, bar1); // 2 3 1
