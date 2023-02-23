// Madlibs is a simple game where you create a story template with "blanks" for
// words. You, or another player, then construct a list of words and place them
// into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and
// an adjective, and injects them into a story that you create.

let rlSync = require('readline-sync');

function prompt(message) {
  return rlSync.question(message);
}

let noun = prompt('Enter a noun: ');
let verb = prompt('Enter a verb: ');
let adjective = prompt('Enter an adjective: ');
let adverb = prompt('Enter an adverb: ');

console.log(`Let's ${verb} that ${adjective} ${noun} very, very ${adverb}!`);