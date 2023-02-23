// Write a function that will take a short line of text, and write it to the
// console log within a box.

function logInBox(str) {
  let topAndBottom = '+' + '-'.repeat(str.length + 2) + '+';
  let emptyLine = '|' + ' '.repeat(str.length + 2) + '|';

  console.log(topAndBottom);
  console.log(emptyLine);
  console.log(`| ${str} |`);
  console.log(emptyLine);
  console.log(topAndBottom)
}


logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// Further Exploration
// Modify this function so that it truncates the message if it doesn't fit inside
// a maximum width provided as a second argument (the width is the width of the
// box itself). You may assume no maximum if the second argument is omitted.

// For a challenging but fun exercise, try word wrapping messages that are too
// long to fit, so that they appear on multiple lines but are still contained
// within the box. This isn't an easy problem, but it's doable with basic
// JavaScript.

function logInBox1(str, width) {
  let words = str.split(' ');
  let parts = [];
  let wordsIdx = 0;
  let partsIdx = 0;

  // create an array with string parts of the right length to fit in the box
  while (wordsIdx < words.length) {
    if (!parts[partsIdx]) {
      parts.push(words[wordsIdx]);
      wordsIdx += 1;
    } else if (parts[partsIdx].length + words[wordsIdx].length < width - 4) {
      parts[partsIdx] += ' ' + words[wordsIdx];
      wordsIdx += 1;
    } else {
      partsIdx += 1;
    }
  }

  let topAndBottom = '+' + '-'.repeat(width - 2) + '+';
  let emptyLine = '|' + ' '.repeat(width - 2) + '|';
  let leftPadding;
  let rightPadding;

  console.log(topAndBottom);
  console.log(emptyLine);

  // print each of the sentence parts correctly inside the box
  parts.forEach(part => {
    leftPadding = ' '.repeat(Math.floor((width - 2 - part.length) / 2));
    rightPadding = ' '.repeat(Math.ceil((width - 2 - part.length) / 2));
    console.log(`|${leftPadding}${part}${rightPadding}|`);
  });

  console.log(emptyLine);
  console.log(topAndBottom)
}

logInBox1('To boldly go where no one has gone before.', 20);
// +------------------+
// |                  |
// |   To boldly go   |
// | where no one has |
// |   gone before.   |
// |                  |
// +------------------+

logInBox1('hello there', 9);
// +-------+
// |       |
// | hello |
// | there |
// |       |
// +-------+