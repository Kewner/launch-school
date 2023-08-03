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
we need a Clock class with:
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

at (static):
- calls Clock to return a new Clock object, passing hours and minutes
  arguments (minutes argument's default parameter is 0)
- returns the new Clock object

add (instance):
- reassign `minutes` to `minutes % 1440` (in case minutes >= a day)
- initialize `hours` to `minutes / 60`, rounded down
- reassign `minutes` to `minutes % 60`
- initialize variable `newClock` with return value of calling Clock.at,
  passing it the hours and minutes of the clock add was called on
- increment newClock.hours by `hours` and newClock.minutes by `minutes` 
- if newClock.hours exceeds 23, subtract 24 from it
- if newClock.minutes exceeds 59, subtract 60 from it and add 1 to
  newClock.minutes

subtract (instance):
- reassign `minutes` to `minutes % 1440` (in case minutes >= a day)
- initialize `hours` to `minutes / 60`, rounded down
- reassign `minutes` to `minutes % 60`
- initialize variable `newClock` with return value of calling Clock.at,
  passing it the hours and minutes of the clock add was called on
- decrement newClock.hours by `hours` and newClock.minutes by `minutes` 
- if newClock.minutes is less than 0, reassign it to `60 + newClock.minutes`
  newClock.minutes and subtract 1 from newClock.hours
- if newClock.hours is less than 0, reassign it to `12 + newClock.hours`
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

  add(minutes) {
    minutes = minutes % 1440;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    const newClock = Clock.at(this.hours, this.minutes);
    newClock.hours += hours;
    newClock.minutes += minutes;

    if (newClock.hours > 23) newClock.hours -= 24;

    if (newClock.minutes > 59) {
      newClock.minutes -= 60;
      newClock.hours += 1;
    }

    return newClock;
  }

  subtract(minutes) {
    minutes = minutes % 1440;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    const newClock = Clock.at(this.hours, this.minutes);
    newClock.hours -= hours;
    newClock.minutes -= minutes;

    if (newClock.minutes < 0) {
      newClock.minutes += 60;
      newClock.hours -= 1;
    }

    if (newClock.hours < 0) newClock.hours += 24;

    return newClock;
  }

  isEqual() {

  }
}

module.exports = Clock;