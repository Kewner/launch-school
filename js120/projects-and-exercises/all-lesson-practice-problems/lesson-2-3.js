// What method can we use to bind a function permanently to a particular
// execution context?

// the bind method

// What will the following code log to the console?
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

// Nothing; foo.bind(obj) returns a new function but doesn't call it.

// What will the following code output?
let object = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(object);

console.log(foo()); // NaN
console.log(bar()); // 5

// What will the code below log to the console?
let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function fii() {
  console.log(this.message);
}

let baz = fii.bind(positivity);

negativity.logMessage = baz;
negativity.logMessage();

// It will log 'JavaScript makes sense!' because the function returned by bind
// is permanently bound to positivity; this fact cannot be changed, not even by
// assigning it to an object property and calling it as a method.

// What will the code below output?
let objo = {
  a: 'Amazebulous!',
};

let otherObjo = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bur = foo.bind(objo);

bur.call(otherObjo);

// This will log 'Amazebulous'; a function returned by bind is permanently
// bound to its execution context, even when calling it with the call method.
