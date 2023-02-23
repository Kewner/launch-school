// In this kata, you've to count lowercase letters in a given string and return
// the letter count in a hash with 'letter' as key and count as 'value'. The key
// must be 'symbol' instead of string in Ruby and 'char' instead of string in
// Crystal.

function letterCount(s){
  let letterCount = {};

  for (let idx = 0; idx < s.length; idx++) {
    let currentLetter = s[idx];

    if (!letterCount[currentLetter]) {
      letterCount[currentLetter] = 1;
    } else {
      letterCount[currentLetter] += 1;
    }
  }
  return letterCount;
}

console.log(letterCount('daydreamer')) // {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1}