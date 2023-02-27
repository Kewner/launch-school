// Implement an ancestors method that returns the prototype chain
// (ancestors) of a calling object as an array of object names. Here's
// an example output:

// name property added to make objects easier to identify
let foo = {name: 'foo'};

foo.ancestors = function() {
  // pseudocode:
  // - initialize variable 'ancestors' with empty array
  // - initialize variable 'obj' with value of `this`
  // - while prototype of obj is not Object.prototype:
  //    - add value of name property of prototype of obj to ancestors
  //    - reassign obj to prototype of obj
  // - add 'Object.prototype' to ancestors
  // - return ancestors

  const ancestors = [];
  let obj = this;

  while (Object.getPrototypeOf(obj) !== Object.prototype) {
    ancestors.push(Object.getPrototypeOf(obj).name);
    obj = Object.getPrototypeOf(obj);
  }

  ancestors.push('Object.prototype');
  return ancestors;
}

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
