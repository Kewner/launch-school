// What does the following code log to the console? Try to answer without
// running the code. Can you explain why the code produces the output it does?

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); // NaN
console.log(rect1.perimeter); // NaN

// This will log NaN twice: when calling area on RECTANGLE, RECTANGLE is the
// execution context. RECTANGLE doesn't have width and height properties, so
// the methods try to do calculations using undefined.

// How would you fix the problem in the code from problem 1?

let RECTANGLE1 = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle1(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE1.area.call(this);
  this.perimeter = RECTANGLE1.perimeter.call(this);
}

let rect2 = new Rectangle1(2, 3);

console.log(rect2.area); // 6
console.log(rect2.perimeter); // 10

// Write a constructor function called Circle that takes a radius as an
// argument. You should be able to call an area method on any objects
// created by the constructor to get the circle's area.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius * this.radius);
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

// What will the following code log to the console and why?

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

// This will log true: we call swingSword on ninja, so ninja is the execution
// context. Therefore, this.swung refers to ninja.swung, which is true.

// What will the following code output and why?
// Try to answer without running the code.

function Ninja1() {
  this.swung = true;
}

let ninja1 = new Ninja1();

Ninja1.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

// console.log(ninja1.swingSword()); // TypeError

// We first created a Ninja1 instance object, with Ninja1.prototype as its
// prototype. However, then we reassigned Ninja1.prototype to a new object;
// the internal [[Prototype]] property of ninja1 still points to the original
// prototype object, so it won't have access to the new Ninja1.prototype.
// Therefore this code will cause a TypeError.

// Implement the method described in the comments below:

function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

// In this problem, we'll ask you to create a new instance of an object,
// without having direct access to the constructor function:

let ninjaC;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaC = new Ninja();
}

// create a `ninjaD` object here; don't change anything else
let ninjaD = new ninjaC.constructor()
console.log(ninjaC.constructor === ninjaD.constructor); // => true

// Since a constructor is just a function, you can call it without the new
// operator. However, that can lead to unexpected results and errors,
// especially for inexperienced programmers. Write a constructor function
// that you can use with or without the new operator. The function should
// return the same result with either form.

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  // other solutions:
  // if (Object.getPrototypeOf(this) !== User.prototype) {
  //   return new User(first, last);
  // }

  // if (this.constructor !== User) {
  //   return new User(first, last);
  // }

  this.name = `${first} ${last}`;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
