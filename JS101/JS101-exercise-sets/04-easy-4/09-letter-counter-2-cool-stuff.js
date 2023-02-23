// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of "it's"
// is 3, not 4.

// Cool solution by Bob, using RegEx \W to remove
// non-roman characters whencalculating the length:

function wordSizes(words) {
  const sizes = {};

  words.split(' ').forEach((word) => {
    let l = word.replace(/\W/g, '').length;
    if (l) sizes[l] = (sizes[l] || 0) + 1;
  });

  return sizes;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

// Cool stuff from LS solution:

function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

// In this for loop, line 36 leverages short-circuit evaluation. If the first
// value is falsey, the OR operator returns the value of the second operand;
// otherwise it returns the value of the first operand.

// In this example, count[cleanWordSize] will be assigned the value of
// count[cleanWordSize] if it is "truthy" value; otherwise, 0 will be
// assigned to it. This guarantees that count[cleanWordSize] has a numeric
// value, so that 1 can be added on the next line.