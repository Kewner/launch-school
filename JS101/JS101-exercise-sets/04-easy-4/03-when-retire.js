// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// 1. Ask user for age, save in variable
// 2. Ask user when he'd like to retire, save in variable
// 3. Calculate difference, save in variable
// 4. Print current year and current year + saved difference
// 5. Print difference

let rlSync = require('readline-sync');

function prompt(msg) {
  return rlSync.question(msg);
}

let age = Number(prompt('What is your age? '));
let retireAge = Number(prompt('At what age would you like to retire? '));
let yearsOfWork = retireAge - age;
let currentYear = new Date().getFullYear();
let retireYear = currentYear + yearsOfWork;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsOfWork} years of work to go!`);

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!



// Further Exploration
// What would happen if the new keyword wasn't used in defining the today
// variable on line 8?

// When Date is called as a function rather than as a constructor, it
// returns a String representing the current time.

// When Date is called as part of a 'new' expression, it is a constructor:
// it initialises the newly created object.

// So, new Date() returns an object such that obj instanceof Date is true,
// whereas Date() basically returns the same as new Date().toString().