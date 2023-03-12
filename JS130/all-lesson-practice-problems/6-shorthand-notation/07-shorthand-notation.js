// Replace the word HERE in the following code so the program prints
// the results shown:

'use strict';

// const HERE = { foo: 42, bar: 3.1415, qux: "abc" };

const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };

console.log(foo);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }
