class Robot {
  constructor() {
    this.robotName = Robot._getName();
  }

  static _allRobotNames = [];

  static _getName() {
    let robotName = this._generateName();

    while (this._allRobotNames.includes(robotName)) {
      robotName = this._generateName();
    }

    this._addName(robotName);
    return robotName;
  }

  static _addName(robotName) {
    Robot._allRobotNames.push(robotName);
  }

  static _generateName() {
    let robotName = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let idx = 0; idx < 2; idx += 1) {
      robotName += alphabet[Math.floor(Math.random() * 26)];
    }

    for (let idx = 0; idx < 3; idx += 1) {
      robotName += Math.floor(Math.random() * 10);
    }

    return robotName;
  }

  name() {
    if (this.robotName) return this.robotName;
    this.robotName = Robot._getName();
    return this.robotName;
  }

  reset() {
    Robot._allRobotNames.splice(Robot._allRobotNames.indexOf(this.robotName), 1);
    this.robotName = null;
  }
}

module.exports = Robot;