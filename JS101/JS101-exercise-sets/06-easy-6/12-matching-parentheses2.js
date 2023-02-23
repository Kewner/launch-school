// Write a function that takes a string as argument, and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.

// Understanding the problem
// =========================
// Input: a string
// Output: true if all parentheses are properly balanced; false otherwise
// Rules
// - Parentheses must occur in matching ( and ) pairs; otherwise, return false.
// - If the order is reversed, ) and (, the parentheses are not propery balanced.
// - If the string doesn't have any parentheses, return true.

// Mental model
// ============
// - Return false if:
//      - The first parentheses in string is ')'
//      - The amount of '(' isn't equal to the amount of ')'
//      - A '(' is nowhere in the string followed by a ')'


// Data structures/algorithm
// =========================
// 1. Create variable 'opening' with value of 0
// 2. Create variable 'closing' with value of 0
// 3. Iterate through characters of input string
//      - if char is '(', increment 'opening' by 1
//      - if char is ')', increment 'closing' by 1
//      - if 'closing' is greater than 'opening', return false
// 4. If 'opening' equals 'closing', return true

function isBalanced(str) {
  let opening = 0;
  let closing = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') {
      opening += 1;
    } else if (str[idx] === ')') {
      closing += 1;
    }

    if (closing > opening) return false;
  }

  return opening === closing;
}

// // Examples:
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// Further Exploration
// There are a few other characters that should be matching as well. Square
// brackets and curly brackets normally come in pairs. Quotation marks(single
// and double) also typically come in pairs and should be balanced. Can you
// expand this function to take into account those characters?

function isBalanced2(str) {
  let balance = {
    parentheses: 0,
    squareBrackets: 0,
    curlyBrackets: 0,
    singleQuotes: 0,
    doubleQuotes: 0
  };

  for (let idx = 0; idx < str.length; idx += 1) {
    updateBalance(str[idx], balance);
    if (Object.values(balance).some(num => num < 0)) return false;
  }

  if (Object.values(balance).slice(0, 3).some(num => num !== 0) ||
      Object.values(balance).slice(3).some(num => num % 2 !== 0)) {
    return false;
  }

  return true;
}

function updateBalance(char, balance) {
  switch (char) {
    case '(':
      balance.parentheses += 1;
      break;
    case ')':
      balance.parentheses -= 1;
      break;
    case '[':
      balance.squareBrackets += 1;
      break;
    case ']':
      balance.squareBrackets -= 1;
      break;
    case '{':
      balance.curlyBrackets += 1;
      break;
    case '}':
      balance.curlyBrackets -= 1;
      break;
    case "'":
      balance.singleQuotes += 1;
      break;
    case '"':
      balance.doubleQuotes += 1;
  }
}

console.log(isBalanced2('Hello )(((you)))) crazy bastard!')); // false
console.log(isBalanced2('Hello {you} crazy bastard!')); // true
console.log(isBalanced2('Hello }you{ crazy bastard!')); // false
console.log(isBalanced2('{Hello} {you {cr[azy}} ba]stard!')); // true

// Explanation I wrote on LS:
// I created an object balance to keep score of the amount of parentheses,
// squarebrackets, curly brackets, single quotes, and double quotes. In the for
// loop the updateBalance function is called, which increments the corresponding
// value with 1 if an 'opening character' occurs, and decrements it with 1 if a
// 'closing character' occurs (for single and double quotes it just increments
//  the value with 1, since there's no opening and closing versions in plain text).

// Then, the for loop checks if any of the values is less than 0. If so, it
// returns false, since a 'closing character' cannot come before an 'opening
// character' in a string.

// When the for loop is done, the if block returns false if any of the values
// corresponding to the parentheses, squareBrackets, and curlyBrackets keys is
// not 0, or if any of the values corresponding to the singleQuotes and
// doubleQuotes keys is not an even number.

// Otherwise, the function returns true.