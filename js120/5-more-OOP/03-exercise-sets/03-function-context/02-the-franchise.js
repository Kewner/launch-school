// Explain why this method will not return the desired object? Try fixing this
// problem by taking advantage of JavaScript lexical scoping rules.

let franchise = {
  name: 'How to Train Your Dragon',

  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

/* Each iteration of map, map calls its callback function with a regular
function call. Therefore, the execution context is the global object, while
the name property is on the franchise object.

It was fixed by defining the self variable in the callback function's outer
scope, which is also available to its inner scope.

Desired output:
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

*/