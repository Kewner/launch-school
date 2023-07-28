/* PEDAC
Understanding the problem
=========================
- input:
- output:

Examples/test cases
===================
From the given tests we can conclude that:
- We need a Robot class that:
  - returns a robot object with a unique robot.robotName that:
    - consists of 2 uppercase letters followed by 3 numbers
    - has not been taken by another robot
  - has a name() instance method that returns robot.name
  - has a reset() instance method that:
    - removes the robot's robotName from the allRobotNames array?
    - wipes the robot's robotName
    - gives the robot a new random name

Data structures
===============
- an allRobotNames array to keep track of the taken names
- object for Robot instances
- numbers and letters for robot name generation

Algorithm
=========
generateName()
- intialize variable `name` with return value of randomLetters()
  concatenated with the return value of randomNumbers()
- while Robot.allRobotNames includes `name`, generate a new name and
  assign `name` to it
- add `name` to Robot.allRobotNames
- return `name`

randomLetters()
- call map on an array with 2 elements and replace each element with
  a random letter from A-Z
- join the return value into a string and return it

randomNumbers()
- call map on an array with 3 elements and replace each element with
  a random letter from 0-9
- join the return value into a string and return it

reset()
- find robot.robotName in Robot.allRobotNames and remove it from array
- replace robot.robotName with a new robotName by calling generateName()
*/

class Robot {
  constructor() {
    this.robotName = this.generateName();
  }

  static allRobotNames = [];

  generateName() {
    let name = this.randomLetters() + this.randomNumbers();

    while (Robot.allRobotNames.includes(name)) {
      name = this.randomLetters() + this.randomNumbers();
    }

    Robot.allRobotNames.push(name);
    return name;
  }

  randomLetters() {
    return [0, 0].map(_ => {
      const charCode = Math.floor(Math.random() * 26) + 65;
      return String.fromCharCode(charCode);
    }).join('');
  }

  randomNumbers() {
    return [0, 0, 0].map(_ => {
      return Math.floor(Math.random() * 10);
    }).join('');
  }

  reset() {
    let nameIdx = Robot.allRobotNames.indexOf(this.name());
    Robot.allRobotNames.splice(nameIdx, 1);
    this.robotName = this.generateName();
  }

  name() {
    return this.robotName;
  }
}

module.exports = Robot;
