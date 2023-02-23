// Write a function that takes a sentence string as an argument, and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

// Understanding the problem
// =========================
// - input: string (sentence)
// - output: same string, but with all number words replace by numbers
// explicit rules:
//    - each number word in the sentence must be replaced by the corresponding number
// implicit rules: none
// questions:
//    - is the input always a string?
//    - what to return if the string is empty?
//    - what if the input is not a string?
//    - what if there's no argument?

// Examples/test cases: see below

// Data structures
// ===============
// we can use an object to refer to the corresponding number with the number word
// we can split the sentence up into an array of words so that we can iterate
// through them and replace if necessary

// Algorithm
// =========
// 1. loop through the words of the sentence
// 2. if the word is a number word, replace it by the corresponding number
// 3. return the new string

// 1. create an object 'numberWords' with all number words as keys, and numbers as values
// 2. create 'stringArray' with sentence splitted up into words
// 3. loop through the words of 'stringArray'
// 4. if the word is a number word, replace it by the corresponding value in 'numberWords'
// 5. join the array, seperated by spaces, and return the string

function wordToDigit(sentence) {
  let stringArray = sentence.split(' ');
  const numberWords = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  stringArray.forEach((word, wordIdx) => {
    let keys = Object.keys(numberWords);

    // since 'four.' is not one of the keys, '.' must be seperated from 'four':
    word.split('').forEach((char, charIdx) => {
      let currentSlice = word.slice(0, charIdx + 1);
      let leftoverSlice = word.slice(charIdx + 1);

      // replace each numeric word with the number (plus possible '.' etc):
      if (keys.includes(currentSlice)) {
        stringArray[wordIdx] = numberWords[currentSlice] + leftoverSlice;
      }
    });
  });

  return stringArray.join(' ');
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('The weight is done.'); 


// I could've just used replace()! Solution by Sam:
// ================================================
function wordToDigit2(str) {
  const numericWords = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten'];

  // use while loop because replace() only replace first instance!
  numericWords.forEach((word, idx) => {
    while (str.includes(word)) str = str.replace(word, idx.toString());
  });

  return str;
}

wordToDigit2('Please call me at five five five one two three four. Thanks.');

// Further Exploration
// Can you refactor the function so that it does not use a loop?

function wordToDigit3(str) {

}

wordToDigit3('Please call me at five five five one two three four. Thanks.');