/* PEDAC
Understanding the problem
=========================
- We need to count the differences between two strands of DNA.
- If two sequences have unequal length, we should use the shorter length.

Examples and test cases
=======================
- We need a DNA class with 2 methods:
  - A constructor method that accepts a string argument representing a
    DNA strand.
  - A hammingDistance accepts a string argument representing a DNA strand,
    and returns the Hamming distance between both strands.
- Some optional methods might be useful.

Data structures
===============
- DNA strands are represented by string values.
- Arrays might be useful.

Algorithm for hammingDistance
=============================
- get the length of the shortest strand
- slice the longer strand to that length
- declare variable hamming with value of 0
- iterate through the characters of one of the strands
  - if a character is not the same as the character at this index in the
    other strand, increment hamming by 1
- return hamming
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand2) {
    let length = Math.min(this.strand.length, strand2.length);
    let hamming = 0;

    for (let idx = 0; idx < length; idx += 1) {
      if (this.strand[idx] !== strand2[idx]) hamming += 1;
    }

    return hamming;
  }
}

module.exports = DNA;
