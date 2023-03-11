// exporting multiple items at once
let greeting = 'Hello';

function greet(name) {
  console.log(`${greeting} ${name}`);
}

function setGreeting(newGreeting) {
  greeting = newGreeting;
}

module.exports = {
  greet,
  setGreeting,
};
