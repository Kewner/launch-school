// Function.prototype.bind is a method on all function objects that
// allows us to hard-bind a function to a particular object. The way
// this works is that you pass a context object to the bind method and
// it returns a new function that is essentially the same function but
// hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function
// to bind, 2) The context object, and returns a new function that's
// hard-bound to the passed in context object.

function myBind(func, context) {
  return function(...args) {     // rest syntax: collect unknown number of args into array
    func.call(context, ...args); // spread syntax: pass args to function separately
  }
}

const person = { name: 'Frank' };

const sayHi = function(age, mood) {
  console.log(`Hi ${this.name}! I'm ${age} years old and I'm feeling ${mood}.`);
}

const hiFrank = myBind(sayHi, person);

hiFrank(49, 'pissed off'); // Hi Frank!

// hiFrank is permanently bound to the person object, which it still has
// access to because it's included in the function's closure.
