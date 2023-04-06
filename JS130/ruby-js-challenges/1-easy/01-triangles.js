/* PEDAC
Understanding the problem
=========================
Important details:
- To be a valid triangle, each side length must be greater than 0.
- To be a valid triangle, the sum of the lengths of any two sides must be
  greater than the length of the remaining side.
- An equilateral triangle has three sides of equal length.
- An isosceles triangle has exactly two sides of the equal length.
- A scalene triangle has three sides of unequal length (no two sides have
  equal length).

Examples and test cases
=======================
Indicated by the provided test cases:
- We need a Triangle class with 2 methods:
  - A constructor method that accepts 3 arguments for 3 side lengths.
  - A kind method that returns a string representing the type of triangle.
- Some optional methods might be useful.

Data structures
===============
- Side length arguments are numbers.
- Side lengths will be stored in an array, as the value of a lengths
  property
- The return value of the kind method is a string.

Algorithm for constructor
=========================
- create length property with an array with the 3 lengths as its value
- check if each length is greater than 0; if not, throw error
- check if the sum of the lengths of any two sides is greater than the
  length of the remaining side; if not, throw error

Algorithm for kind method
=========================
- if all side lengths are equal, return 'equilateral'
- if two exactly two side lengths are equal, return 'isosceles'
- if all side lengths are different, return 'scalene'
*/

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sides = [...arguments];
    this._validateSides();
    this._validateTriangle();
  }

  kind() {
    const numberOfUniques = this._numberOfUniques();

    switch (numberOfUniques) {
      case 1: return 'equilateral';
      case 2: return 'isosceles';
      default: return 'scalene';
    }
  }

  _validateSides() {
    if (this.sides.filter(length => length <= 0).length > 0) {
      throw new Error('All side lengths must be greater than 0');
    }
  }

  _validateTriangle() {
    const invalidTriangle = new Error('Sum of lengths of any two sides must be greater than length of remaining side');
    const [ side1, side2, side3 ] = this.sides;

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      throw invalidTriangle;
    }
  }

  _numberOfUniques() {
    return this.sides.filter((side, idx, arr) => {
      return arr.indexOf(side) === idx;
    }).length;
  }
}

module.exports = Triangle;
