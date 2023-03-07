
// Consider the following code:

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

// What happens in each of the following cases?
// Try to answer without running the code.

// case 1
let hello1 = new Hello();
hello1.hi(); // Hello!

// case 2
let hello2 = new Hello();
hello2.bye(); // TypeError, because hello2 cannot access bye

// case 3
let hello3 = new Hello();
hello3.greet(); // undefined

// case 4
let hello4 = new Hello();
hello4.greet('Goodbye'); // Goodbye

// case 5
Hello.hi(); // TypeError, because hi is not a static method
