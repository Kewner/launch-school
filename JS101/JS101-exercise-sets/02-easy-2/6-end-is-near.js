// Write a function that returns the next to last word in the String passed
// to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

function penultimate(string) {
  let stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate('hello there, how are you?')); // logs 'are'

// Further Exploration
// Our solution ignored a couple of edge cases because we explicitly stated
// that you didn't have to handle them: strings that contain just one word,
// and strings that contain no words.

// Suppose we need a function that retrieves the middle word of a
// phrase/sentence. What edge cases need to be considered? How would you
// handle those edge cases without ignoring them? Write a function that
// returns the middle word of a phrase or sentence. It should handle all
// of the edge cases you thought of.

function middleWord(string) {
  if (typeof string !== 'string') return 'This is not a string!';
  let stringArr = string.split(' ');

  if (stringArr.length > 1 && stringArr.length % 2 !== 0) {
    return stringArr[stringArr.length - Math.ceil(stringArr.length / 2)];
  } else {
    return 'There is no middle word!';
  }
}

console.log(middleWord('hello there how are you')); // how
console.log(middleWord('hello there how are you over there'));  // are
console.log(middleWord('hey how are you')); // There is no middle word!
console.log(middleWord('hello')); // There is no middle word!
console.log(middleWord(''));  // There is no middle word!
console.log(middleWord());  // There is no middle word!
console.log(middleWord(15));  // This is not a string!