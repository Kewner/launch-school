// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time.
// Use the readlineSync.prompt method to collect user input.

// Example:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:')
let lengthMeters = Number(rlSync.question());

console.log('Enter the width of the room in meters:');
let widthMeters = Number(rlSync.question());

let areaMeters = (lengthMeters * widthMeters).toFixed(2);
let areaFeet = (areaMeters * 10.7639).toFixed(2);

console.log(`The area of the room is ${areaMeters} square meters` + 
            `(${areaFeet} square feet).`);

// Further Exploration
// Modify the program so that it asks the user for the input type (meters
// or feet). Compute for the area accordingly, and log it and its conversion
// in parentheses.

let rlSync = require('readline-sync');

// Ask the user for input type (meters or feet)
console.log('Would you like to use meters or feet?');
let metersOrFeet = rlSync.question();

// Validate user's input
while (metersOrFeet !== ('meters' || 'feet')) {
  console.log("Please enter 'meters' or 'feet'.");
  metersOrFeet = rlSync.question();
}

// Ask user for length and width
console.log('Enter the length of the room:')
let length = Number(rlSync.question());

console.log('Enter the width of the room:');
let width = Number(rlSync.question());

// Calculate area
let area = (length * width).toFixed(2);

// Log area of the room in meters or feet
console.log(`The area of the room is ${area} square ${metersOrFeet}.`);