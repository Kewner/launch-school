// Write a function that takes a string argument and returns a new
// string that contains the value of the original string with all
// consecutive duplicate characters collapsed into a single character.

function crunch(str) {
  let strArray = str.split('');
  let newStrArray = [];

  for (let index = 0; index < strArray.length - 1; index += 1) {
    if (strArray[index] !== strArray[index + 1]) {
      newStrArray.push(strArray[index]);
    }
  }

  return newStrArray.join('');
}

console.log(crunch('hheell'));
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// LS solution:
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

// Further Exploration
// You may have noticed that the solution continues iterating until index
// points past the end of the string. As a result, on the last iteration,
// text[index] is the last character in text, while text[index + 1] is
// undefined. Why does it do this? What happens if it stops iterating
// when index is equal to text.length - 1?

// The last character will be omitted: the first character of the last
// pair of characters will not be added to the array, since the one
// after that is the same. Then it quits the loop before checking the
// last character.

// It's also possible to solve this using regular expressions. For a nice
// challenge, give this a try with regular expressions. Can you think of
// any other solutions that don't use regular expressions?

function crunch(text) {
  
}