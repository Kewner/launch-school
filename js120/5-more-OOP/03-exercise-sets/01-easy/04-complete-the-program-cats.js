// Consider the following program.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, colors) {
    super(name, age);
    this.colors = colors;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

// Update this code so that when you run it, you see the following output:
// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

// An alternative approach to this problem would be to modify the Pet
// class to accept a colors parameter:

class Pet1 {
  constructor(name, age, colors) {
    this.name = name;
    this.age = age;
    this.colors = colors;
  }
}

class Cat1 extends Pet1 {
  // constructor(name, age, colors) {
  //   super(name, age, colors);
  // }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`;
  }
}

let pudding1 = new Cat1('Pudding', 7, 'black and white');
let butterscotch1 = new Cat1('Butterscotch', 10, 'tan and white');

console.log(pudding1.info());
console.log(butterscotch1.info());

/* Now we don't need to supply the `constructor` method for `Cat`; under the
hood, JS would create one and call it, including the `super` keyword.

Would it be a good idea to modify `Pet` in this way?

How might you deal with some of the problems that might arise from modifying `Pet`?

*/