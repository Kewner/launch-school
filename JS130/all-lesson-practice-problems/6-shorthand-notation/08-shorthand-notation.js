// Rewrite the final line of code in the following snippet using
// classic JavaScript syntax:

'use strict';

const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

// const { first, second, ...rest } = obj;

// solution
let first = obj.first;
let second = obj.second;
let rest = {
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

// or use the original obj object:
rest = {};

for (let prop in obj) {
  if (prop === 'third' || prop === 'rest') {
    rest[prop] = obj[prop];
  }
}

console.log(rest);
// { third: [ 1, 2, 3 ], rest: { a: 'a', b: 'b' } }
