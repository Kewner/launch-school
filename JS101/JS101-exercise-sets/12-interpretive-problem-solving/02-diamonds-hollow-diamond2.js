// Inspired by Jourden Riley's beautiful solution for solid diamonds, I wrote
// another hollowDiamond function.

// - The different iterations of idx in the for loop are: 1, 3, 5, 7, 5, 3, 1.
// - If idx is 1 (width of the first row), it will print the preceding spaces
//   and just one *.
// - For the other indices, the necessary spaces in between the asterisks are
//   calculated by subtracting 2 (because of the 2 asterisks) from idx.

function hollowDiamond(n) {
  let increment = 2;

  for (let idx = 1; idx > 0; idx += increment) {
    if (idx === 1) {
      console.log(' '.repeat((n - idx) / 2) + '*');
    } else {
      console.log(' '.repeat((n - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*');
    }

    if (idx === n) increment = -2;
  }
}

hollowDiamond(19);