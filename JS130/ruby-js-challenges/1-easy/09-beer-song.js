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
- we need a Beersong class with these methods:
  - static `verse`: accepts a number as its argument and returns the
    99 Bottles of Beer verse with that number of beer bottles
  - static `verses`: accepts two numbers, the first one being the starting
    point, the second one being the verse on which to end - the method returns
    a string with all verses in this range, inclusive, separated by \n
  - static `lyrics`: returns a string of the entire song
  - possibly some helper methods

also:
- each verse line is separated by a newline
- verses are separated by a blank line (two newlines)
- be mindful of grammatical changes:
  - 'bottles' vs 'bottle'
  - '# bottles of beer' vs 'no more bottles of beer'

Data structures
===============
- numbers
- strings

Algorithm for `verse`
=====================


Algorithm for `verses`
======================


Algorithm for `lyrics`
======================

*/