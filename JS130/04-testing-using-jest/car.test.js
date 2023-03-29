const Car = require('./car');

describe('The Car class', () => {
  // first test passes
  test('has four wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });

  // second test fails
  test('bad wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(3);
  });

  // third test gets skipped using test.skip
  test.skip('no wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(0);
  });

  // fourth test gets skipped using xtest
  xtest('too many wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(5);
  });
});

/* What happens?

Line 1:
Import car module from car.js, which loads the Car class.

Line 3:
Call describe, which groups our tests and helps structure them into
logical units. We pass describe a string and a callback:
  - The string describes the group of tests.
  - The callback contains all tests related to the Car class.

Line 4:
Call test. Each invocation of test defines a new test. Like describe, it
takes a description and a callback. Within each test, we need to make one
or more assertions that confirm the behavior we're trying to verify.

Line 6:
Each assertion, or expectation, begins with calling expect, passing it the
value we want to assert - this is often called the actual value. The expect
method returns an object that includes a variety of matcher methods.
Matchers compare the actual value passed to expect with the expected value,
but don't return a meaningful value (no boolean); instead, they inform Jest
of the results, and Jest takes care of treating that result as a success
or a failure.

toBe, a matcher method, checks for equality: if the value passed to expect
equals the value passed to toBe, toBe informs Jest about a successful
assertion.

Some notes:
- The describe and test methods are provided by Jest: when running the
  Jest CLI, it makes all the necessary Jest library methods available.
- Using the describe method is optional, but helpful when running more than
  a few tests: the grouping and description will help identify which tests
  are failing.
- It's sometimes useful to have multiple assertions within one test.*/
