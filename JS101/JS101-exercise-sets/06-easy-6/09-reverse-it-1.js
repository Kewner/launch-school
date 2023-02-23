// Write a function that takes a string argument containing one or more words,
// and returns a new string containing the words from the string argument. All
// five-or-more letter words should have their letters in reverse order. The
// string argument will consist of only letters and spaces. Words will be
// separated by a single space.

// input: string of one or more words
// output: new string with all the words, all => 5 letter words reversed

function reverseWords(str) {
  let strArray = str.split(' ');
  let resultArray = [];

  for (let idx = 0; idx < strArray.length; idx += 1) {
    if (strArray[idx].length < 5) {
      resultArray.push(strArray[idx]);
    } else {
      resultArray.push(strArray[idx].split('').reverse().join(''));
    }
  }

  console.log(resultArray.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

// Further Exploration
// Did you solve this problem in different way?
// Try to solve it using map() method.

function reverseWords1(str) {
  return str.split(' ').map(word => word.length >= 5 ?
                                    reverseWord(word) : word).join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

reverseWords1('Professional');             // "lanoisseforP"
console.log(reverseWords1('Walk around the block'));    // "Walk dnuora the kcolb"
reverseWords1('Launch School');            // "hcnuaL loohcS"