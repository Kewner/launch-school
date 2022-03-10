// Rewrite these two object types to use the class keyword, instead of direct
// prototype manipulation. Person exposes method greeting which when called
// logs the provided greeting text. Shouter is a subtype of Person and is a bit
// loud so whatever he says is uppercased.

function Person() {
}

Person.prototype.greeting = function(text) {
  console.log(text);
}

function Shouter() {
  Person.call(this);
}

Shouter.prototype = Object.create(Person.prototype)

Shouter.prototype.greeting = function(text) {
  Person.prototype.greeting.call(this, text.toUpperCase());
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// `Person` exposes method `greeting`.
// When called, `greeting` logs the provided greeting text.
// `Shouter` is a subtype of `Person`

class Person1 {
  greeting(text) {
    console.log(text);
  }
}

class Shouter1 extends Person1 {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person1 = new Person1();
let shouter1 = new Shouter1();

person1.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter1.greeting("Hello my friend."); // HELLO MY FRIEND.