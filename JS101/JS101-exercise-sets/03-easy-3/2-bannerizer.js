// Write a function that will take a short line of text,
// and write it to the console log within a box.

// function logInBox(str) {
//   let topAndBottom = `+${'-'.repeat(str.length + 2)}+`;
//   let inBetween = `|${' '.repeat(str.length + 2)}|`;
//   let middle = `| ${str} |`;

//   console.log(topAndBottom + '\n' + inBetween + '\n' + middle + '\n' + 
//               inBetween + '\n' + topAndBottom);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// Further exploration

function logInBoxTrunc(msg, boxWidth) {
  if (msg.length > boxWidth - 2) {
    let wordsArray = msg.split(' ');
    let currentRow = '';
    let allRows = [];
    let index = 0;

    while (index < wordsArray.length) {
      if (currentRow.length + wordsArray[index].length + 2 > boxWidth - 2) {
        allRows.push(currentRow);
        currentRow = '';
      } else {
        currentRow += wordsArray[index] + ' ';
        index += 1;
      }

    }
    allRows.push(currentRow.trim());
    // allRows: [ 'To boldly go ', 'where no one ', 'has gone ', 'before.' ]

    let topAndBottom = `+${'-'.repeat(boxWidth - 2)}+`;
    let inBetween = `|${' '.repeat(boxWidth - 2)}|`;

    console.log(topAndBottom);
    console.log(inBetween);

    for (let i = 0; i < allRows.length; i += 1) {
      let padding = ' '.repeat(Math.floor((boxWidth - allRows[i].length) / 2));
      console.log(`|${padding}${allRows[i]}${padding.slice(0, padding.length - 1)}|`);
    }

    console.log(inBetween);
    console.log(topAndBottom);
  }

}

logInBoxTrunc('To boldly go where no one has gone before.', 15);
logInBoxTrunc('Hello there!', 7);