// Consider the following program.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  info() {
    console.log(`My cat ${this.name} is ${this.age} years old and has` +
                ` ${this.color} fur.`);
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

// Update this code so that when you run it, you see the following output:
// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

// Further Exploration
// An alternative approach to this problem would be to modify the Pet class
// to accept a colors parameter. If we did this, we wouldn't need to supply
// an constructor method for Cat.

// Why would we be able to omit the constructor method? Would it be a good
// idea to modify Pet in this way? Why or why not? How might you deal with
// some of the problems, if any, that might arise from modifying Pet?

// Answer:
// We would be able to omit the constructor method because JS would call
// constructor automatically, passing all arguments we provided to it.

// It would generally not be a good idea to add a color parameter to Pet:
// adding local variable parameters to a superclass makes it less useful
// as a base that many subclasses can inherit from. If we were to do it,
// the superclass could set optional parameters to null or undefined by
// default. Its methods would then need to account for these values to
// not throw errors.
