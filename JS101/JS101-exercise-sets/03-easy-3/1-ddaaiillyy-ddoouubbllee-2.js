// Using a for loop:
function crunch1(str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === str[idx + 1]) continue;
    result += str[idx];
  }

  return result;
}

// Using map:
function crunch2(str) {
  let arr = str.split('').map((char, idx) => {
    if (char !== str[idx + 1]) {
      return char;
    }
  });

  return arr.join('');
}

// Using reduce:
function crunch3(str) {
  return str.split('').reduce((acc, cur, idx) => {
    if (cur !== str[idx + 1]) {
      acc += cur;
    }
    return acc;
  }, '');
}

console.log(crunch1('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch1('4444abcabccba'));              // "4abcabcba"
console.log(crunch1('ggggggggggggggg'));            // "g"
console.log(crunch1('a'));                          // "a"
console.log(crunch1(''));                           // ""