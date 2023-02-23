// Write a function that takes a string as argument, and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.

function isBalanced(str) {
let parentheses = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(' || str[idx] === ')') parentheses.push(str[idx]);
  }

  console.log(parentheses[0]);

  if (parentheses[0] !== '(' || parentheses.length % 2 !== 0) return false;



  return true;
}

console.log(isBalanced("What (is) this?"));
console.log(isBalanced("What is) this?"));
console.log(isBalanced("((What) (is this))?"));
console.log(isBalanced("((What)) (is this))?"));

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);