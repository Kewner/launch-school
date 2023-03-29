# The SEAT approach
In larger projects, we use the SEAT approach:
1. **S**et up the necessary objects.
2. **E**xecute the code against the object we're testing.
3. **A**ssert the results of execution.
4. **T**ear down and clean up any lingering artifacts.

In the previous `car.test.js` file, we've only used steps 2 and 3. We created a car object in each test to perform some assertion on it. This causes redundant code which, with many tests, can add up.

## Set up the necessary objects
We should extract it to a setup step that runs before each test. In Jest, we can use the `beforeEach` function to do that. The callback we pass to `beforeEach` is called before running each test.

## Tear down and clean up any lingering artifacts
Similarly, we can use the `afterEach` function to call its callback after running each test. In `car.test.js`, however, we don't have any need for a teardown. In other cases, we may need a teardown to clean up files, log some information, or close a database connection.

## Do we need steps 1 and 4?
In the case of `car.test.js`, it would also work to initialize the `car` variable at the top of the `describe` callback and assign it a new `Car` object. However, in most cases, you need to make changes to your object and experiment with it. If you don't use the `beforeEach` callback, the `car` object won't get reset for each test. It's better to create a new object for each test so that you have one with a known state.

In the simplest cases, we don't need either setup or teardown. However, keep in mind that there are 4 steps to running a test: SEAT. At the minimum, you need EA, even when the E is just a simple instantiation.
