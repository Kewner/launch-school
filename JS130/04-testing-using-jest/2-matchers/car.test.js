// Beside toBe, there are many other expectation matchers: https://jestjs.io/docs/expect
// Let's add some common ones:

const Car = require('./car');

describe('The Car class', () => {
  // fails unless actual value === expected value
  test('has four wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });

  // like toBe, but can also test for object equality (compares properties)
  test('two newly created cars are object equal', () => {
    let car1 = new Car();
    let car2 = new Car();

    expect(car1).toEqual(car2);
  });

  // fails unless actual value is undefined, same as toBe(undefined)
  test('a newly created car does not have doors', () => {
    let car = new Car();
    expect(car.doors).toBeUndefined();
  });

  // fails unless expression raises/throws an error
  test('raises an error when called drive on it', () => {
    let car = new Car();
    expect(() => car.drive()).toThrow();
  });
  // car.drive() is wrapped in a function because calling it directly
  // would raise an exception before toThrow could detect it

  // fails unless expression throws TypeError specifically
  test('raises a TypeError when called drive on it', () => {
    let car = new Car();
    expect(() => car.drive()).toThrow(TypeError);
  });

  // fails unless actual value is null, same as toBe(null)
  test('a new car has no mileage info', () => {
    let car = new Car();
    expect(car.mileageInfo).toBeNull();
  });

  // fails unless actual value is truthy
  test('wheels is truthy', () => {
    let car = new Car();
    expect(car.wheels).toBeTruthy();
  });

  // fails unless array includes actual value
  test('array contains car', () => {
    let car = new Car();
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });

  // using the not property on the object returned by expect,
  // we can assert the opposite of a matcher
  test('car has wheels', () => {
    let car = new Car();

    expect(car.wheels).not.toBeUndefined();
  });
});
