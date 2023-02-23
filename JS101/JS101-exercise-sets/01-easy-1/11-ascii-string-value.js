// Write a function that determines and returns the ASCII string value of
// a string passed in as an argument. The ASCII string value is the sum of
// the ASCII values of every character in the string. (You may use
// String.prototype.charCodeAt() to determine the ASCII value of a character.)

// Using a for loop:
function asciiValue(string) {
  let result = 0;

  for (let curr = 0; curr < string.length; curr += 1) {
    result += string.charCodeAt(curr);
  }

  return result;
}

// Using a while loop:
function asciiValue(string) {
  let result = 0;
  let current = 0;

  while (current < string.length) {
    result += string.charCodeAt(current);
    current += 1;
  }

  return result;
}

// Using a do/while loop:
function asciiValue(string) {
  let result = 0;
  let current = 0;

  if (string.length === 0) return 0;

  do {
    result += string.charCodeAt(current);
    current += 1;
  } while (current < string.length);

  return result;
}

// Using the reduce() method:
function asciiValue(string) {
  let stringArray = string.split('').map(char => char.charCodeAt());
  return stringArray.reduce((curr, acc) => curr + acc, 0);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0