// We wrote a neutralize function that removes negative words from sentences.
// However, it fails to remove all of them. What exactly happens?

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach((word, idx) => {
    console.log(idx, word);
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// The forEach method never iterates over 'boring'. When removing 'dull' from
// the array, each subsequent word is shifted one position to the left. forEach
// then moves on to index 2, which now represents 'cards', while 'boring' is
// now at index 1.

// A way to fix this using the filter method:
function neutralize(sentence) {
  let words = sentence.split(' ');

  return words.filter(word => !isNegative(word)).join(' ');
}

// Or using a new array:
function neutralize(sentence) {
  let words = sentence.split(" ");
  let result = [];

  words.forEach((word, idx) => {
    if (!isNegative(word)) {
      result.push(word);
    }
  });

  return result.join(" ");
};