// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// [undefined, undefined, undefined]: because there is no explicit return 
// statement, while using curly brackets, each iteration returns 'undefined'.

// 'map' looks at the return value of the callback function to decide the elements
// in the returned array. Each element in the original array is replaced by what
// the callback returns for that element. In this case, there's no explicit
// return statement in the callback function, which means that the callback
// returns 'undefined' each time.