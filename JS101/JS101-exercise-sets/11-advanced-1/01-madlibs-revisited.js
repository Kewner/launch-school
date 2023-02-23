// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text "template" as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the text
// and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text templates. Choose the right way to
// structure your templates and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something that
// you'll define for yourself.


// Understanding the problem
// =========================
// input: a string, representing a template for the madlibs story
// output: a string, being the template with randomized words plugged into it
// rules:
// explicit:
//    - adjectives, nouns, verbs, and adverbs should be plugged into the template
//    - the result should be returned
// implicit: none.

// Data structures
// ===============
// an object with the word category as the key, and an array of words as the value

// Algorithm
// =========
// 1. create object 'words' with the word category as the key, an array of words as the value
// 2. create 'story' with empty string
// 3. create 'categories' with an array of keys of 'words'
// 4. initialize outer loop
// 5.     - inner loop: iterate through 'categories' array
//              - replace '(currentCategory)' with random word from object.currentCategory:
//                this can be done by using the 'selectWord' helper function
//          end of inner loop
//    end outer loop when 'str' contains no more (adj), (no), (ve), or (adv)
// 6. return 'story'

// Algorithm sub-problem step 3: selecting random word
// Helper function: selectWord, with parameter 'arr'
// 1. generate a random number between 0 and arr.length - 1
// 2. return the element of 'arr' at that index

function madlibs(template) {
  const words = {
    adj : ['quick', 'lazy', 'sleepy', 'noisy','hungry'],
    no : ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    ve : ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adv : ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  const wordCategories = Object.keys(words);

  // loop as long as 'template' still includes (adj), (no), (ve), or (adv)
  while (strIncludesKey(template, wordCategories)) {

    // iterate through all keys of object, replacing (adj), (no), (ve), and (adv)
    for (let idx = 0; idx < wordCategories.length; idx += 1) {
      let category = wordCategories[idx];
      template = template.replace(`(${category})`, selectWord(words[category]));
    }
  }

  console.log(template);
  return template;
}

// select random word from word array
function selectWord(arr) {
  let num = Math.floor(Math.random() * (arr.length));
  return arr[num];
}

// check if 'template' still includes any instance of (adj), (no), (ve), or (adv)
function strIncludesKey(str, arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let element = arr[idx];
    if (str.includes(`(${element})`)) return true;
  }

  return false;
}

// Examples
madlibs("The (no) (ve) the (no).");
madlibs("The (adj) (no) (ve) the (no)'s (no) and (no) (adv).");

// Note: The quotes in the example strings returned by the madlibs function are
// only shown for emphasis. These quotes are not present in the actual output
// strings. The words in quotes come from the list of texts and it is the
// madlibs function that puts them there without quotes.

// These examples use the following list of replacement texts:
//    adjectives: quick lazy sleepy noisy hungry
//    nouns: fox dog head leg tail cat
//    verbs: jumps lifts bites licks pats
//    adverbs: easily lazily noisily excitedly

let template1 = "The (adj) brown (no) (adv) (ve) the (adj) yellow (no), who " + 
                "(adv) (ve) his (no) and looks around.";
let template2 = "The (adj) brown (no) (adv) (ve) the (adj) yellow (no), who " + 
                "(adv) (ve) his (no) and looks around.";

madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".