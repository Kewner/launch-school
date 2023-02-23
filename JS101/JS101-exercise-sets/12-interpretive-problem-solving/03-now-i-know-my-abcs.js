// A collection of spelling blocks has two letters per block,
// as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument, and returns true
// if the word can be spelled using the set of blocks, or false otherwise. You
// can consider the letters to be case-insensitive when you apply the rules.

// Understanding the problem
// =========================
// Rules:
// - Return true if the input word can be spelled using these blocks.
// - Return false otherwise.
// - You can use one letter from each block.
// - You can use each block only once.
// - The function is case insensitive.

// Data structures/algorithm
// =========================
// 1. Create array 'blocks' with strings representing the spelling blocks
// 2. Create variable 'letterCount' with empty array
// 3. Iterate through all characters of the input string
//      - For each character, iterate through elements of 'blocks'
//            - If 'block' contains current char, remove 'block' from 'blocks',
//              adding it to 'letterCount', and continue to next iteration
// 4. If 'letterCount' equals length of input string, return true; otherwise,
//    return false

function isBlockWord(str) {
  let letterCount = [];
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE',
                'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  str.split('').forEach(char => {
    for (let block = 0; block < blocks.length; block += 1) {
      if (blocks[block].includes(char.toUpperCase())) {
        letterCount.push(blocks.splice(block, 1));
        continue;
      }
    }
  });

  return letterCount.length === str.length;
} 



// Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true