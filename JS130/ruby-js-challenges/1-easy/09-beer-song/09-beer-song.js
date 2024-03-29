// Write a program that can generate the lyrics of the 99 Bottles of Beer song.
// See the test suite for the entire song.

/* PEDAC
Understanding the problem
=========================
- input: a number indicating the number of bottles of beer in the verse
- output: a string representing the correct verse of 99 Bottles of Beer,
  which is a song with 100 verses, starting with 99 bottles and decreasing
  towards 0 ('no more')

Examples/test cases
===================
from the tests we can derive that:
- we need a BeerSong class with these methods:
  - static `verse`: accepts a number as its argument and returns the
    99 Bottles of Beer verse with that number of beer bottles
  - static `verses`: accepts two numbers, the first one being the starting
    point, the second one being the verse on which to end - the method returns
    a string with all verses in this range, inclusive, separated by \n
  - static `lyrics`: returns a string of the entire song
  - possibly some helper methods

also:
- verse lines are separated by a newline
- verses are separated by a blank line (two newlines)
- be mindful of grammatical changes:
  - 'bottles' vs 'bottle'
  - '# bottles of beer' vs 'no more bottles of beer'

Data structures
===============
- numbers
- strings

Algorithm for verse(num)
========================
- if `num` is 0, return:
  "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n"
- if `num` is 1, return:
  "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles " +
  "of beer on the wall.\n";
- else, return:
  "{num} bottles of beer on the wall, {num} bottles of beer.\n" +
  "Take one down and pass it around, {num -1} bottles of beer " +
  "on the wall.\n"

Algorithm for verses(num1, num2)
================================
- initialize `selectedVerses` to empty string
- iterate starting at num1, decreasing to num2 (inclusive):
  - call verse, passing it the current number
  - add the return value + /n to `selectedVerses`
- return `selectedVerses` (but without the leading \n)

Algorithm for `lyrics`
======================
- return the return value of calling verses, passing it 99 and 0
*/

class BeerSong {
  static verse(num) {
    const bottles = (num - 1 === 1) ? '1 bottle' : `${num - 1} bottles`;

    switch(num) {
      case 0:
        return "No more bottles of beer on the wall, no more bottles of beer." +
        "\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
      case 1:
        return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down" +
        " and pass it around, no more bottles of beer on the wall.\n";
      default:
        return `${num} bottles of beer on the wall, ${num} bottles of beer.` +
        `\nTake one down and pass it around, ${bottles} of beer on the wall.\n`
    }
  }

  static verses(num1, num2) {
    let selectedVerses = '';

    for (let num = num1; num >= num2; num -= 1) {
      selectedVerses += ('\n' + this.verse(num));
    }

    return selectedVerses.trimStart(); // remove leading newline
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;