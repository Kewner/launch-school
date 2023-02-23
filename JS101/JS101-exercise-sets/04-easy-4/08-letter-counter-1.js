// Write a function that takes a string consisting of zero or more space
// separated words, and returns an object that shows the number of words of
// different sizes.

// Words consist of any sequence of non-space characters.

function wordSizes(str) {
  let strArray = str.split(' ');
  let wordSizes = strArray.map(word => word.length).filter(num => num > 0);
  let resultObj = {};

  for (let i = 0; i < wordSizes.length; i += 1) {
    resultObj[wordSizes[i]] = 0;
  }

  for (let i = 0; i < wordSizes.length; i += 1) {
    resultObj[wordSizes[i]] += 1;
  }

  console.log(resultObj);
  
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// LS solution
function wordSizes2(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

wordSizes2('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes2('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes2("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes2('');                                            // {}