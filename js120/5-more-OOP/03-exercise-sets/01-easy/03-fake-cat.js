// Without calling the Cat constructor, create an object that looks
// and acts like a Cat instance that doesn't have a defined name.

class Cat {
  constructor(name) {
    this.name = name;
  }

  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype); // your implementation
console.log(fakeCat instanceof Cat);        // logs true
console.log(fakeCat.name);                  // logs undefined
console.log(fakeCat.speaks());              // logs undefined says meowwww.

// The instanceof operator checks if the right-hand operand constructor is
// ANYWHERE in the left-hand object's prototype chain. So IT DOES NOT USE THE
// CONSTRUCTOR PROPERTY to do this. For example:

class Subcat extends Cat {
  constructor(name) {
    super(name);
  }
}

let subcat = new Subcat(3);
console.log(subcat.constructor);    // Subcat
console.log(subcat instanceof Cat); // true