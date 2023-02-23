// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

function crunch(string) {
  let index = 0;
  let crunched = '';

  while (index < string.length) {
    if (string[index] !== string[index + 1]) {
      crunched += string[index];
    }

    index += 1;
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// It's also possible to solve this using regular expressions. For a nice
// challenge, give this a try with regular expressions. Can you think of any
// other solutions that don't use regular expressions?