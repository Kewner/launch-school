// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

function randomBetween(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

let age = randomBetween(20, 120);

console.log(`Teddy is ${age} years old!`);

// Math.ceil(Math.random() * (max - min + 1) + min);

// 1. Math.random() generates a random number between 0 and 1.
// 2. To turn this into a number in the given distance (101 possible values),
//    it's multiplied by (max - min + 1).
// 3. To get it into the given range (20 - 120), 'min' is then added.
// 4. Using the Math.ceil() method, the number is rounded up to an integer.
//    This also explains the + 1 in step 2.

// Further exploration
// Would it make a difference if the Math.round() method was used instead?
// - Yes, this would make an outcome of 19 possible.

// Also, how can we make the function more robust? What if the user
// inadvertently gave the inputs in reverse order (i.e., the value passed to min
// was greater than max)?

function randomBetween2(min, max) {
  // let realMin;
  // let realMax;

  // if (min > max) {
  //   realMin = max;
  //   realMax = min;
  // }

  if (min > max) {
    // ES6+ destructuring assignment array matching
    [min, max] = [max, min];
  }
  
  return Math.ceil (Math.random() * (max - min + 1) + min);
}

randomBetween2(120, 20);

let age2 = randomBetween(120, 20);

console.log(`Teddy is ${age2} years old!`);