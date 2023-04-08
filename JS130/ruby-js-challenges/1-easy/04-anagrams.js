/* PEDAC
Understanding the problem
=========================
- input: a word (string) and a list of words (array)
- output: the correct sublist of the word list that contains all the
  anagrams of the given word
- an anagram of a word is a word that:
  - has the exact same length
  - has the same exact letters
  - have the same exact number of the exact same letters
- an identical word is not an anagram!
- anagrams are case-insensitive

Examples and test cases
=======================
From the given test cases we can conclude that:
- we need an Anagram class with two methods:
  - a constructor method that accepts a word argument
  - a match method that accepts a word list argument and returns a sublist
    containing all anagrams of the given word; if no anagrams are in the
    list, an empty list should be returned
- other methods might be helpful

Data structures
===============
- arrays
- strings

Algorithm of constructor
========================
- define this.word with value of input string

Algorithm of match
==================
- initialize variable anagrams with empty array
- initialize variable sortedWord with this.word's word as its value, but
  with its characters sorted and in lower case
- iterate through wordList:
  - make the word from the list lower case
  - if the word length equals this.word's length, and it's not the same
    word as this.word:
    - sort the characters of the word
    - if the sorted word equals sortedWord, push it to anagrams
- return anagrams
*/

class Anagrams {
  constructor(word) {
    this.word = word;
  }

  match(wordList) {
    const anagrams = [];
    const sortedWord = this.word.split('').sort().join('').toLowerCase();

    wordList.forEach(word => {
      word = word.toLowerCase();
      console.log(word, sortedWord);

      if (word.length === sortedWord.length && word !== this.word.toLowerCase()) {
        const compareWord = word.split('').sort().join('');
        if (compareWord === sortedWord) anagrams.push(word);
      }
    });

    return anagrams;
  }
}

// let testest = new Anagrams('hellothere');
// testest.match();

module.exports = Anagrams;
