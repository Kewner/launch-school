// imported
import { shoutGreeting } from "./shout.js";

// exported
export function greet(name) {
  if (name[name.length - 1] === '!') {
    shoutGreeting(greeting, name);
  } else {
    console.log(`${greeting} ${name}`);
  }
}

export function setGreeting(newGreeting) {
  greeting = newGreeting;
}

// not exported
let greeting = 'Hello';
