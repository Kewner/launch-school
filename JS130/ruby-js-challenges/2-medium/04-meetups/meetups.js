/* PEDAC
Understanding the problem
=========================
- input: 
- output: 

Examples/test cases
===================
from the given tests we can conclude that:
- We need a Meetup class with:
  - constructor
    - year (number)
    - month (number)
    * returns new Meetup object
  - day
    - weekday (string)
    - schedule (string)
    * returns date of the meeting based on:
      - the day of the week
      - the `schedule`th time the weekday occurs in this.month

Data structures
===============
- an object for converting weekday names to corresponding numbers
- string arguments representing weekdays and schedules
- numbers representing years, months, and days
- Date objects

Algorithm for day
=================
- reassign `schedule` to same value but in lowercase
- reassign `weekday` to number corresponding to that day
- initialize `weekdayOccurence` to 0
- iterate through numbers 1 through 31 as `monthDay`:
  - initialize `date` to a date object of the instance's year,
    month -1, and `monthDay`
  - if `getDay()` of `date` equals `weekday`:
    - if `schedule` equals `Meetup.scheduleNumbers[weekdayOccurence]`, return `date`
    - increment `weekdayOccurence` by 1

next:
- pass toBeNull tests
- add `last` and `teenth` features

teenth:
- every month has 7 days that end in 'teenth': 13, 14, 15, 16, 17, 18, 19
- so each month as a mo, tu, we, th, fr, sa, and su ending in 'teenth'
- with meetup.day('Tuesday', 'teenth'), we need to find the Tuesday that ends in 'teenth'
*/

'use strict';

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    weekday = Meetup.weekDays[weekday.toLowerCase()]; // monday => 1
    schedule = schedule.toLowerCase(); // FIRst => first
    let weekdayOccurence = 0;

    for (let monthDay = 1; monthDay <= 31; monthDay += 1) {
      const date = new Date(this.year, this.month - 1, monthDay);

      if (date.getDay() === weekday) {
        if (schedule === Meetup.scheduleNumbers[weekdayOccurence]) return date;
        weekdayOccurence += 1;
      }
    }
  }

  static weekDays = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
  };

  static scheduleNumbers = ['first', 'second', 'third', 'fourth',
                            'fifth', 'sixth', 'seventh'];
}

module.exports = Meetup;