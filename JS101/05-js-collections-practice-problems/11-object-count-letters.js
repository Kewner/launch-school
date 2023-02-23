// Create an object that expresses the frequency with which each letter
// occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let letterFrequency = {};

statement.split('')
         .filter(char => char.toLowerCase() >= 'a' && char <= 'z')
         .forEach(letter => {
            if (!letterFrequency[letter]) {
              letterFrequency[letter] = 0;
            }

            letterFrequency[letter] += 1;
          });

console.log(letterFrequency);


// LS solution:

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;  // value is incremented by 1
});

result;

// Explanation of short-circuit evaluation:
// line 31: if key exists (truthy), current value is reassigned
//          if key doesn't exist (undefined = falsy), value is set to 0
// line 32: value of current key is increased by 1

// We can also code up the same logic without using the || operator:

let charsInStatement1 = statement.split('').filter(char => char !== ' ');
let result1 = {};

charsInStatement1.forEach(char => {
  if (Object.keys(result1).includes(char)) {
    result1[char] += 1;
  } else {
    result1[char] = 1;
  }
});

// Note that we don't have to convert the string to an array to solve the
// problem. We're doing so here only so that we can use the forEach method. We
// could've used a simple for loop to iterate over the string directly:

let result2 = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result2[char] = result2[char] || 0;
  result2[char] += 1;
}