# PEDAC

## Understanding the problem

- Input: none; we just call methods to perform actions
- Output: calling Robot with new will create a new, unique robot
- Rules:
  - when creating a new robot, a random name will be generated, like RX837 or BC811
  - the same name may not be used twice
  - calling the name method will return the robot's name
  - calling the reset method will wipe the robot's name
  - calling the name method while a robot has no name, will generate a new name

## Examples/test cases

From the given test cases we can conclude that we need:

- class `Robot`:
  - constructor():
    - creates and returns new `Robot` instance with randomly generated name
  - Robot.prototype.name():
    - if the robot has a name, this name is returned
    - otherwise, a new name is generated and returned
  - Robot.prototype.reset():
    - wipes the robot's name

## Data structures

We will use:

- strings
- numbers

## Algorithm

### Robot._robots

a static property that refers to an array containing all Robot instances

### Robot._createName()

- randomly generate a name in this format: RX837 or BC811 (2 letters, 3 numbers)
- check if the name already exists in any other robot (`Robot._robots`)
  - if so, generate a new name
- return this name

### constructor()

- call method to create new random name
- define property `robotName` on Robot instance, assign it to returned name
- add new robot to `Robot._robots`

### Robot.prototype.name()

- if the robot instance has a name, return it
- otherwise, call method to create new random name and return this name

### Robot.prototype.reset()

- reassign robot's property `robotName` to null