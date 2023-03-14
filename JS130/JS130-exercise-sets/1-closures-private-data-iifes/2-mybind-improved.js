// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides
// hard-binding functions to context objects. It's called partial function
// application. Read this assignment and the MDN documentation to learn
// more about partial function application.

// Alter the myBind function written in the previous exercise to support
// partial function application of additional arguments to the original
// function.

function myBind(func, context, ...firstArgs) {
  return function(...args) {
    return func.call(context, ...firstArgs,  ...args);
  }
}

function addNumbers(a, b) {
  return a + b;
}

const addEleven = myBind(addNumbers, null, 11);
console.log(addEleven(9));

/*
- ...firstArgs in the myBind function uses rest syntax to collect all the
  remaining arguments passed to myBind into an array.
- ...args in the returned function uses rest syntax to collect all the
  arguments passed to the returned function into an array.

When calling func using call, we pass the following arguments to it:
- the execution context
- the arguments passed to myBind (that came after func and context),
  using spread syntax to pass them separately
- the arguments passed to the returned function, using spread syntax
  to pass them separately

The function returned by myBind returns the return value of calling func, so
that we can use it when calling the new function (addEleven in this case).

Also, the function returned by myBind and assigned to addEleven keeps
access to func, context, and ...firstArgs because of its closure.
*/

// LS solution concatenates both argument arrays and uses apply:

function myBind(func, ctx, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);
    return func.apply(ctx, fullArgs);
  };
}
