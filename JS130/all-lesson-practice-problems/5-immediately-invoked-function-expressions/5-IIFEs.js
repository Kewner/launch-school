// Is the named function inside in this IIFE accessible in the global scope?

(function foo() {
  console.log('Bar');
})();

foo() // ?

// No, this will raise a ReferenceError. Function foo is an immediately
// invoked function, which means that it's in a private scope.
