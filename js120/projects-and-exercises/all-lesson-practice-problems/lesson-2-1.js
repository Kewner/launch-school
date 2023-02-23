// What will the following code log to the console?Explain why it
// logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

// This will log 2. JS first tries to find foo on baz, but doesn't find it;
// so it looks at its prototype, qux, and there it finds foo with the value
// of 1. Then it looks up the value of qux.foo, which is 1, resulting in 2.

let qox = { foo: 1 };
let boz = Object.create(qox);
boz.foo = 2;

console.log(boz.foo + qox.foo);

// This will log 3. JS first finds foo on boz, with a value of 2; then it adds
// the value of qox.foo, which is 1.

let qex = { foo: 1 };
let biz = Object.create(qex);
qex.foo = 2;

console.log(biz.foo + qex.foo);

// This will log 4. After we reassigned qex.foo to 2, JS tries to find foo on
// biz but doesn't find it there; it does find it on its prototype, qex, with
// a value of 2. Then it adds that same value of 2 to it and returns 4.

// Write a function that searches the prototype chain of an object for a
// given property and assigns it a new value. If the property does not
// exist in any of the prototype objects, the function should do nothing.

function assignProperty(obj, key, value) {
  while (obj !== Object.prototype) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = value;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

// The following code should work as shown:
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qix", 3);
console.log(fooA.qix); // undefined
console.log(fooC.qix); // undefined
console.log(fooA.hasOwnProperty("qix")); // false
console.log(fooC.hasOwnProperty("qix")); // false


// Consider the two loops below.
// If foo is an arbitrary object, will these loops always log the same results to
// the console? Explain why they do or do not. If they don't always log the same
// information, show an example of when the results differ.

// The don't, because a for..in loop iterates through both the object's own
// properties and its inherited properties, while Object.keys returns an array
// with the keys of only the object's own values:

const bla = { a: 1 };
const foo = Object.create(bla);
foo.b = 2;
foo.c = 3;

console.log('for..in results:');

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

// a: 1
// b: 2
// c: 3

console.log('Object.keys results:');

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

// c: 3

// How do you create an object that doesn't have a prototype? How can you
// determine whether an object has a prototype?

const bareObj = Object.create(null);
console.log(Object.getPrototypeOf(bareObj)); // null
