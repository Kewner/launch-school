// Write a function that returns true if its integer argument is palindromic,or
// false otherwise. A palindromic number reads the same forwards and backwards.

function isPalindromicNumber(num) {
  // if (num !== parseInt(num, 8)) {
  //   num = Number(num.toString(8));
  // }

  return num.toString() === num.toString().split('').reverse().join('');
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
isPalindromicNumber(03003);        // true  ...still false

// Further Exploration
// Suppose the number argument begins with one or more 0s. Will the solution
// still work? Why or why not? Is there any way to address this?