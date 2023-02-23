// Determine whether a given string ends with an exclamation mark (!).

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// Several solutions:
str1.slice(-1) === '!'; // true
str2.slice(-1) === '!'; // false

str1.charAt(str1.length - 1) === '!'; // true
str2.charAt(str2.length - 1) === '!'; // false

str1.substring(str1.length - 1) === '!';  // true
str2.substring(str2.length - 1) === '!';  // false

str1[str1.length - 1] === '!';  // true
str2[str2.length - 1] === '!';  // false

str1.endsWith('!'); // true
str2.endsWith('!'); // false