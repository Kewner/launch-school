/* Solution inspired by LS algorithm:

constructor:
- Save the hours and minutes.
- There is no need to validate the arguments.

static at:
- Use a default value of `0` for the minutes if the 2nd argument is omitted.
- Call constructor to create a new object.
- Return the new object.

instance add:
- Compute minutes since midnight for `Clock` object: use helper method
  "compute minutes since midnight".
- Add minutes argument to minutes since midnight.
- While (minutes since midnight >= 24 * 60):
  - Subtract 24 * 60 from minutes since midnight
- Determine time represented by minutes since midnight: use helper method
  "compute time from minutes since midnight"
- Return value returned by previous step.

instance subtract:
- Compute minutes since midnight for `Clock` object: use helper method
  "compute minutes since midnight".
- Subtract minutes argument from minutes since midnight.
- While (minutes since midnight < 0)
  - Add 24 * 60 from minutes since midnight.
- Determine time represented by minutes since midnight: use helper method
  "compute time from minutes since midnight"
- Return value returned by previous step.

instance isEqual:
- If both `Clock` objects have the same hours and minutes values, return true.
- Otherwise, return false.

instance toString:
- Format hours and minutes as `HH:MM` where `HH` and `MM` are both two digit
  numbers. If necessary, they should have leading zeros.

helper instance _minutesSinceMidnight:
- Return `60 * hours + minutes` where `hours` and `minutes` are from the
  current `Clock` object.

helper instance _computeTimeFrom:
- One argument: minutes since midnight.
- See hints for the language of your choice.
- Return a new Clock object representing the computed time.
*/

class Clock {
  static MINUTES_IN_HOUR = 60;
  static MINUTES_IN_DAY = 24 * 60;

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  add(minutes) {
    let minutesSinceMidnight = this._minutesSinceMidnight(minutes) + minutes;

    while (minutesSinceMidnight >= Clock.MINUTES_IN_DAY) {
      minutesSinceMidnight -= Clock.MINUTES_IN_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  subtract(minutes) {
    let minutesSinceMidnight = this._minutesSinceMidnight(minutes) - minutes;

    while (minutesSinceMidnight < 0) {
      minutesSinceMidnight += Clock.MINUTES_IN_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  _minutesSinceMidnight() {
    return (this.hours * Clock.MINUTES_IN_HOUR) + this.minutes;
  }

  _computeTimeFrom(minutesSinceMidnight) {
    let hours = Math.floor(minutesSinceMidnight / Clock.MINUTES_IN_HOUR);
    let minutes = minutesSinceMidnight % Clock.MINUTES_IN_HOUR;
    return Clock.at(hours, minutes);
  }

  toString() {
    let hour = this.hours > 9 ? `${this.hours}` : `0${this.hours}`;
    let minute = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;
    return `${hour}:${minute}`;
  }

  isEqual(clock2) {
    return this.hours === clock2.hours && this.minutes === clock2.minutes;
  }
}

module.exports = Clock;