// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that each
// string contains nothing but words and spaces, and that there are no leading,
// trailing, or repeated spaces.

function swap(str) {
  let wordsArray = str.split(' ');
  let swappedArray = [];

  wordsArray.forEach(word => {
    let newFirstChar = word[word.length - 1];
    let newLastChar = word[0];

    for (let idx = 1; idx < word.length - 1; idx += 1) {
      newFirstChar += word[idx];
    }
    
    word.length === 1 ? swappedArray.push(newFirstChar) :
                        swappedArray.push(newFirstChar + newLastChar);
  })

  return swappedArray.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

// split string into an array of words
// initiate new, empty result array
// iterate through the words in the array:
      // initiate newLastChar variable: value of index 0 of word
      // initiate newFirstChar variable: value of index word.length - 1 of word
      // iterate through chars of word > index 0 and < index word.length - 1
            // concatenate char with newFirstChar variable
      // if word length = 1: add newFirstChar to result array
      // otherwise: add newFirstChar + newLastChar to result array
// join result array and return it


// Further Exploration
// How can you refactor this problem using the Array.prototype.map method instead?

function swap2(str) {
  let wordsArray = str.split(' ');

  let newArray = wordsArray.map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, -1) + word[0]
    }
  });

  return newArray;
}

swap2('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap2('Abcde');                          // "ebcdA"
swap2('a');                              // "a"