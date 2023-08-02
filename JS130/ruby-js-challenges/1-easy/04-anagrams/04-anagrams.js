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

Algorithm of constructor (word)
===============================
- define this.matchWord with value of input string in lower case

Algorithm of match(wordList)
============================
- use filter to iterate through the words in wordList:
  - if the current word is an isAnagram of this.matchWord, include it
- return the array created by filter

Algorithm of isAnagram(word)
============================
- initialize word1 variable with value of this.matchWord, but sorted
- initialize word2 variable with value of word, but in lower case and sorted
- if word in lower case does not equal this.matchWord, AND
  word1 equals word2, return true; otherwise return false
*/

class Anagrams {
  constructor(word) {
    this.matchWord = word.toLowerCase();
  }

  match(wordList) {
    return wordList.filter(word => this.isAnagram(word));
  }

  isAnagram(word) {
    const word1 = this.matchWord.split('').sort().join('');
    const word2 = word.toLowerCase().split('').sort().join('');
    return (word.toLowerCase() !== this.matchWord) && (word1 === word2);
  }
}

module.exports = Anagrams;
