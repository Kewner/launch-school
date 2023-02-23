// Write a program that prints the longest sentence in a string based on the
// number of words. Sentences may end with periods (.), exclamation points (!),
// or question marks (?). You should treat any sequence of characters that are
// not spaces or sentence-ending characters as a word. Thus, -- should count as
// a word. Log the longest sentence and its word count to the console. Pay
// attention to the expected output, and be sure you preserve the punctuation
// from the end of the sentence. Note that this problem is about manipulating
// and processing strings. As such, every detail about the string matters (e.g.,
// case, punctuation, tabs, spaces, etc.).


// Understanding the problem
// =========================
// input: a string
// output: two strings:
//            - the longest sentence from the input string
//            - a sentence telling the user the length of the longest sentence
// rules:
// explicit
//    - sentences may end with . or ! or ?
//    - the longest sentence is the sentence with the most words
//    - any sequence of characters that are not spaces or sentence-ending
//      characters should be treated as a word
//    - the longest sentence, as well as its length, should be logged to console
//    - punctuation etc. must be preserved
// implicit:
//    - log the length of the sentence in this format: "The longest sentence has 30 words."
// questions:
//    - is the input always a string?
//    - what if it isnt?
//    - what if the input is an empty string?

// Data structures
// ===============
// we will work with strings and arrays

// Algorithm
// =========
// 1. declare 'sentences' with empty array
// 2. declare 'startIdx' with 0
// 3. separate the string into sentences        
// 4. count the amount of words in each sentence
// 5. log the sentence with the greatest amount of words
// 6. log the amount of words in that sentence

// Sub-problem step 1:
// 1. iterate through all of the elements (characters)
//      - if the char is a ! or . or ? slice part of the string, from startIdx
//        to (and including) current index
//      - add this part of the string to 'sentences' array
//      - set startIdx to current loop index + 1
//    end of loop

// Sub-problem step 4:
// 1. iterate through all of the elements (sentences)
//      - split the sentence into words by using ' ' as separator
//      - count the elements of the resulting array

function longestSentence(text) {
  let sentences = [];
  let startIdx = 0;

  for (let idx = 0; idx < text.length; idx += 1) {
    let char = text[idx];

    if (char === '!' || char === '?' || char === '.') {
      sentences.push(text.slice(startIdx, idx + 1).trim());
      startIdx = idx + 1;
    }
  }

  sentences.sort((a, b) => {
    a = a.split(' ').length;
    b = b.split(' ').length;

    return b - a;
  })

  let wordCount = sentences[0].split(' ').length;
  console.log(sentences[0]);
  console.log(`The longest sentence has ${wordCount} words.\n`)
}

// Second try, months later:
function longestSentence(str) {
  let sentences = [];
  let startSlice = 0;
  
  for (let idx = 0; idx < str.length; idx += 1) {
    if ('!?.'.includes(str[idx])) {
      sentences.push(str.slice(startSlice, idx + 1).split(' '));
      startSlice = idx + 2;
    }
  }

  sentences.sort((a, b) => b.length - a.length);
  console.log(sentences[0].join(' '))
  console.log('\n' + `The longest sentence has ${sentences[0].length} words.`);
}

// Examples
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

longestSentence("What's up, Doc? Where do you think you're going?");