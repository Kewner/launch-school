// Using the following code, add two methods: static method genericGreeting
// and instance method personalGreeting. The first method should log a
// greeting that's generic to the class. The second method should be an
// instance method and log a greeting that's custom to the object.

class Cat {
  constructor(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting(); // Hello! I'm a cat!
kitty.personalGreeting(); // Hello! My name is Sophie!

// Think of static methods as generic actions a class may perform.
