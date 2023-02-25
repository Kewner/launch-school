// What will the following code output?
// Try to determine the results without running the code.

function func() {
  return this;
}

let context = func();

console.log(context);

// func() is a regular function call, so the execution context is the global
// object, which the context variable is assigned to. So global will be logged.

// What will the following code output? Explain the difference, if any,
// between this output and that of problem 1.

let obj = {
  func: function() {
    return this;
  },
};

let exContext = obj.func();

console.log(exContext);

// This is a method call, so the object before the dot is the execution context.
// Therefore, exContext is assigned to obj, which is then logged.

// What will the following code output?
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

// First we use a regular function call to call deliverMessage. The implicit
// execution context is the global object, so 'Hello from the global scope!'
// will be logged.
// deliverMessage is then called as a method, so foo is the execution context.
// foo.message's value, 'Hello from the function scope!', will be logged.

// What built-in methods have we learned about that we can use to specify a
// function's execution context explicitly?

// call, apply, and bind

// Take a look at the following code snippet. Use call to invoke the add
// method but with foo as execution context. What will this return?

let fee = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(fee));

// This will return 3 (foo.a + foo.b).
