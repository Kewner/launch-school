class Robot {
  static _robotNames = [];

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
    this.robotName = Robot._generateName();

    while (Robot._robotNames.includes(this.robotName)) {
      this.robotName = Robot._generateName();
    }

    Robot._robotNames.push(this.robotName);
    return this.robotName;
  }

  reset() {
    Robot._robotNames.splice(Robot._robotNames.indexOf(this.robotName), 1);
    this.robotName = null;
  }
}

module.exports = Robot;