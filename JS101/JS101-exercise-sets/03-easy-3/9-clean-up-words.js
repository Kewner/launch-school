// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with all
// of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space in
// the result (i.e., the result string should never have consecutive spaces).

function cleanUp(str) {
  let result = '';

  for (let index = 0; index < str.length; index += 1) {

    if (isAlphabetic(str[index])) {
      result += str[index];
    } else if (!result.endsWith(' ')) {
       result += ' ';
    }
  }

  return result;
}

function isAlphabetic(char) {
  let charCode = char.charCodeAt();
  return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123);
}

cleanUp("---what's my +*& line?");    // " what s my line "

// LS short solution:
function cleanUp2(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

cleanUp2("---what's my +*& line?");    // " what s my line "


// Ned Nguyen solution:
function cleanUp3(text) {
    console.log(text.replace(/[^a-z]+/gi,' '));
}

cleanUp3("---what's my +*& line?");    // " what s my line "