// Without calling the Cat constructor, create an object that looks and acts
//  like a Cat instance that doesn't have a defined name.

class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

// Requirements?
// Cat.prototype should be in fakeCat's prototype chain.
// fakeCat should not have a defined name.
// fakeCat should inherit the speaks method.

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.
