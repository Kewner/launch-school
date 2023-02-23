// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of "it's"
// is 3, not 4.

// Applied to my solution:
function wordSizes(str) {
  let resultObj = {};
  let wordSizes = str.toLowerCase().split(' ').map(word => {
    return word.split('').filter(char => char >= 'a' && char <= 'z');
  }).map(word => word.length).filter(num => num > 0);


  for (let i = 0; i < wordSizes.length; i += 1) {
    resultObj[wordSizes[i]] = 0;
  }

  for (let i = 0; i < wordSizes.length; i += 1) {
    resultObj[wordSizes[i]] += 1;
  }

  return resultObj;  
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

// Applied to LS solution:
function wordSizes2(words) {
  let count = {};
  let wordsArray = words.toLowerCase().split(' ').map(word => {
    return word.split('').filter(char => char >= 'a' && char <= 'z');
  })

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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}