// Implement an ancestors method that returns the prototype chain (ancestors)
// of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
let foo = {
  name: 'foo',

  ancestors() {
    const ancestors = ['Object.prototype'];
    let prototype = Object.getPrototypeOf(this);

    while (Object.getPrototypeOf(prototype) !== null) {
      ancestors.unshift(prototype.name);      
      prototype = Object.getPrototypeOf(prototype);
    }

    return ancestors;
  }
};

// 1. Create an empty array ancestors.
// 2. Declare a variable `current` and assign it to `this`.
// 3. Start a while loop that breaks when the prototype of `current` equals null.
//    3.1 Find the prototype of `current` using Object.getPrototypeOf.
//    3.2 Add the prototype to the `ancestors` array
//    3.3 Assign `current` to the found prototype.
// 4. Return the `ancestors` array.

let bar = Object.create(foo);
bar.name = 'bar';

let baz = Object.create(bar);
baz.name = 'baz';

let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']