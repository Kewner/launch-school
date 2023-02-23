// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.

// Further Exploration
// Modify this function so the caller can determine whether non-alphabetic
// characters should be counted when determining the upper/lowercase state.
// That is, you want a function that can perform the same actions that this
// function does, or that operates like the previous version.

function staggeredCase(str, countNonAlpabetic = true) {
  if (countNonAlpabetic) {
    return str
      .split('')
      .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
      .join('');
  } else {
    let upperCase = false;

    return str
      .split('')
      .map(char => {
        if (!(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) {
          return char;
        } else {
          upperCase ? upperCase = false : upperCase = true;
          return upperCase ? char.toUpperCase() : char.toLowerCase();
        }
      })
      .join('');
  }
}

staggeredCase("I Love Launch School!");  // 'I LoVe lAuNcH ScHoOl!'
staggeredCase("I Love Launch School!", false); // 'I lOvE lAuNcH sChOoL!'