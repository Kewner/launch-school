// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? Try fixing
// this problem by taking advantage of JavaScript lexical scoping rules.

let franchise = {
  name: 'How to Train Your Dragon',

  allMovies: function() {
    // add a context variable that:
    const that = this;

    return [1, 2, 3].map(function(number) {
      return that.name + ' ' + number;
    });
  },
};

// It doesn't work because map calls its return function 3 times with a
// regular function call, which means that the execution context is global,
// not franchise. We could solve this in several ways:

// - a context variable
// - bind on the callback
// - an arrow function as callback
// - a thisArg argument to map

// By solving it with a context variable, were taking advantage of JS
// lexical scoping rules.
