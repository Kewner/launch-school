/* PEDAC
Understanding the problem
=========================
- a clock object should keep track of its hours and minutes
- to a clock object's time we can add or subtract minutes
- adding or subtracting minutes should not mutate a clock object,
  but return a new clock object
- two clock objects with the same time are considered equal

Examples/test cases
===================
from the given tests we can conclude that:
- we need a Clock class with:
  - a constructor method that accepts 2 arguments representing
    hours and minutes
  - a static method at() that:
    - returns a new Clock object that represents the time according
      to the given arguments; if no minutes argument is given, 0 will
      be used as the default value
  - an instance method add() that:
    - returns a new Clock object that represents the time of the
      calling clock, but with the given amount of minutes added to it
  - an instance method subtract()
  - an instance method toString() that returns a the time of the clock
    object as a string in hh:mm format
  - an instance method isEqual() that tests is 2 Clock objects
    represent the same time and returns a boolean

Data structures
===============
we will use:
- numbers to calculate the time; arguments are also numbers
- strings to return a string representation of a clock's time

Algorithm
=========
constructor:
- use value of `hours` argument to define hours property
- use value of `minutes` argument to defined minutes property

at:
- calls Clock to return a new Clock object, passing hours and minutes
  arguments (minutes argument's default parameter is 0)
- returns the new Clock object

add:

*/

class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    let hours = String(this.hours);
    let minutes = String(this.minutes);
    if (hours.length === 1) hours = 0 + hours;
    if (minutes.length === 1) minutes = 0 + minutes;

    return `${hours}:${minutes}`;
  }

  add() {

  }

  isEqual() {

  }
}

// let clock = Clock.at(8);
// console.log(clock.toString());

module.exports = Clock;