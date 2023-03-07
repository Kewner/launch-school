// Write a function named makeMultipleLister that you can call with a
// number as an argument. The function should return a new function that,
// when invoked, logs every positive integer multiple of that number
// less than 100.

function makeMultipleLister(num) {
  return function() {
    for (let multiple = num; multiple < 100; multiple += num) {
      if (multiple < 100) console.log(multiple);
    }
  };
}

// It should work like this:

let lister = makeMultipleLister(17);
lister();
// 17
// 34
// 51
// 68
// 85
