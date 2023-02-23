// Write a function that takes an array of integers between 0 and 19, and
// returns an array of those integers sorted based on the English word for
// each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

function alphabeticNumberSort(array) {
  const nums = {
    0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
    6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten', 11 : 'eleven',
    12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen',
    16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen'
  };

  return array.map(num => nums[num]).sort()
              .map(numStr => Object.keys(nums) 
              .find(key => nums[key] === numStr));
}

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// Alternative (way too complicated) solution ----------------------------------
function alphabeticNumberSort1(array) {
  const nums = {
    0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
    6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten', 11 : 'eleven',
    12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen',
    16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen'
  };

  let arr = array.map(num => nums[num]).sort();
  let numWordsEntries = Object.entries(nums);
  let result = [];

  for (let idx = 0; idx < arr.length; idx++) {
    let numString = arr[idx];

    for (let index = 0; index < numWordsEntries.length; index++) {
      if (numString === numWordsEntries[index][1]) {
        result.push(numWordsEntries[index][0]);
      }
    }
  }

  return result;
}


// LS solution -----------------------------------------------------------------
let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// compareFunction below defines the sort order:
function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) { // first to compare: 'zero' and 'one'
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

// - if wordSort returns less than 0, sort() sorts num1 to an index lower than num2.
// - if wordSort returns 0, num1 and num2 are left unchanged with respect to
//   each other, but sorted with respect to all different elements.
// - if wordSort returns greater than 0, sort() sorts num2 to an index lower than num1.

function alphabeticNumberSort2(array) {
  return array.sort(wordSort);
}

alphabeticNumberSort2(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// Further exploration ---------------------------------------------------------
// The Array.prototype.sort method can also take a function expression as an
// argument. If you didn't use one the first time, try refactoring the solution
// using a function expression.

function alphabeticNumberSort3(array) {
  return array.sort((num1, num2) => {
    if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
      return -1;
    } else if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
      return 1;
    } else {
      return 0;
    }
  });
}

alphabeticNumberSort3(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// Caleb Ross Smith solution ---------------------------------------------------
function alphabeticNumberSort4(array) {
  const NUMBERS_AS_WORDS = ['zero', 'one', 'two', 'three', 'four',
                            'five', 'six', 'seven', 'eight', 'nine',
                            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return array.map(num => NUMBERS_AS_WORDS[num])
              .sort()
              .map(word => NUMBERS_AS_WORDS.indexOf(word));
}