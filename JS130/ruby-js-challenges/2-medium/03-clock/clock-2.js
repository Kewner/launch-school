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

    while (-minutesSinceMidnight >= Clock.MINUTES_IN_DAY) {
      minutesSinceMidnight += Clock.MINUTES_IN_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  _minutesSinceMidnight(minutesToAdd) {
    return (this.hours * Clock.MINUTES_IN_HOUR) + this.minutes;
  }

  _computeTimeFrom(minutesSinceMidnight) {
    if (minutesSinceMidnight < 0) {
      minutesSinceMidnight += Clock.MINUTES_IN_DAY;
    }

    let hours = Math.floor(minutesSinceMidnight / Clock.MINUTES_IN_HOUR);
    let minutes = minutesSinceMidnight % Clock.MINUTES_IN_HOUR;
    return Clock.at(hours, minutes);
  }

  toString() {
    let hour = this.hours > 9 ? `${this.hours}` : `0${this.hours}`;
    let minute = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;
    return `${hour}:${minute}`;
  }
}

module.exports = Clock;