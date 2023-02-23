// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when N is 7).

// Mental model
// =========================
// Preceding spaces:
//      - 0, 1, 2 until middle row
//      - middle row has 0 preceding spaces, just n asterisks
//      - rest of rows: (n - 3) / 2 spaces, decremented by 1 each row, until 0
// Spaces of first and second gaps between asterisks:
//      - (n - 3 - preceding * 2) / 2 until middle row
//      - middle row has 0 gaps, just n asterisks
//      - rest of rows: (n - 3 - precedingSpaces * 2) / 2 spaces

// Algorithm
// =========
// 1. loop through 0, 1, 2 ... (n - 1) / 2 ... 2, 1, 0
//      - if index is (n - 1) / 2 (midRow), output n times '*'
//      - else, output desired row, with the right amount of padding:
//              - preceding spaces: index times ' '
//              - gaps between asterisks: (n - 3 - preceding * 2) / 2 times ' '

function star(n) {
  let increment = 1;

  for (let idx = 0; idx >= 0; idx += increment) {
    if (idx === (n - 1) / 2) {
      console.log('*'.repeat(n));
      increment = -1;
    } else {
      let spaceGap = ' '.repeat((n - 3 - idx * 2) / 2);
      console.log(' '.repeat(idx) + '*' + spaceGap + '*' + spaceGap + '*');
    }
  }
}

// Examples

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *