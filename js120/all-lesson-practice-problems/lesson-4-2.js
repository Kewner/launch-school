// Suppose we have the following classes:

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

// What would happen if we added a play method to the Bingo class, keeping in
// mind that there is already a method of this name in the Game class from
// which the Bingo class inherits? Explain your answer. What do we call it when
// we define a method like this?

// When calling the play method on an instance of Bingo, the play method on
// Bingo.prototype will be called: JS first looks on the instance object itself,
// doesn't find the method there, and then keeps looking up the prototype chain.
// It finds it first on Bingo.prototype, so Game.prototype is not called.

// When a class redefines a method that a superclass defines, we call this
// "method overriding."



// Let's practice creating a class hierarchy.

// Create a class named Greeting that has a single method named greet. The
// method should take a string argument, and it should print that argument to
// the console.

// Now, create two more classes that inherit from Greeting: one named Hello,
// and the other Goodbye. The Hello class should have a hi method that takes
// no arguments and logs "Hello". The Goodbye class should have a bye method
// that logs "Goodbye". Use the greet method from the Greeting class when
// implementing Hello and Goodbye; don't call console.log from either Hello
// or Goodbye.

class Greeting {
  greet(greeting) {
    console.log(greeting);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
    // super.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
    // super.greet('Goodbye');
  }
}

const greeting = new Greeting();
const hello = new Hello();
const goodbye = new Goodbye();

greeting.greet('Hey');
hello.hi();
goodbye.bye();

// 1. When calling hello.hi, JS first looks for the method on the instance itself.
//    It doesn't find it there.
// 2. So JS looks at its prototype, Hello.prototype, and does find it there.
// 3. The hi method is called, with the hello object as the execution context.
// 4. The hi method calls this.greet. The value of this is the hello object, so
//    JS tries to find the greet method there first, but doesn't find it.
// 5. JS looks for it on Hello.prototype, but it's not there either.
// 6. JS looks at Greeting.prototype, finds it, and calls it. It logs 'Hello'.
