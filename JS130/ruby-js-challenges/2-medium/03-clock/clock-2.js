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
    let minutesSinceMidnight = this._minutesSinceMidnight(minutes);

    while (minutesSinceMidnight >= Clock.MINUTES_IN_DAY) {
      minutesSinceMidnight -= Clock.MINUTES_IN_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  _minutesSinceMidnight(minutesToAdd) {
    return (this.hours * Clock.MINUTES_IN_HOUR) + this.minutes + minutesToAdd;
  }

  _computeTimeFrom(minutesSinceMidnight) {
    let hours = Math.floor(minutesSinceMidnight / Clock.MINUTES_IN_HOUR);
    let minutes = 733 % Clock.MINUTES_IN_HOUR;
    return Clock.at(hours, minutes);
  }

  toString() {
    let hour = this.hours > 9 ? `${this.hours}` : `0${this.hours}`;
    let minute = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;
    return `${hour}:${minute}`;
  }
}

let clock = Clock.at(10, 13);
console.log(clock);
console.log(clock.add(3000));
console.log(clock.toString());