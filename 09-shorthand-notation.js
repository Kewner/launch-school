// Assume that you have some code that looks like this:

'use strict';

function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code:
  return {type: animalType, age, colors};
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// Using shorthand notation, what is the missing code?

// qux has to return an object with properties named type, age, and colors,
// so that this is how our variables are declared and initialized:

// let { type, age, colors } = {type: 'cat', age: 9, colors: ['black', 'white']};
