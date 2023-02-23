// Write a program that will ask for user's name. The program will then greet
// the user. If the user writes "name!" then the computer yells back to the
// user.

// Examples:
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const rlSync = require('readline-sync');

let name = rlSync.question("What's your name? ");

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}