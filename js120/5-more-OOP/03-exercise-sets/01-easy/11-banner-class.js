// Behold this incomplete class for constructing boxed banners.

// Complete this class so that the test cases shown below work as intended. You
// are free to add any properties you need.

// You may assume that the input will always fit in your terminal window.

// Further exploration
// Modify this class so that constructor will optionally let you specify a
// fixed banner width at the time the Banner object is created. The message
// in the banner should be centered within the banner of that width. Decide
// for yourself how you want to handle widths that are either too narrow
// or too wide.

class Banner {
  constructor(message, width) {
    this.message = message;
    this.width = width || this.message.length + 4;
  }

  displayBanner() {
    if (this.isWidthTooSmall()) {
      console.log("I'm sorry, the given width is too narrow for these words!");
      return;
    }

    console.log([this.horizontalRule(),this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  isWidthTooSmall() {
    let msgWords = this.message.split(' ').sort((a, b) => b.length - a.length);
    return this.width < (msgWords[0].length + 4);
  }

  horizontalRule() {
    return '+' + '-'.repeat(this.width - 2) + '+';
  }

  emptyLine() {
    return '|' + ' '.repeat(this.width - 2) + '|';
  }

  messageLine() {
    if (this.width >= this.message.length + 4) {
      return this.formatSingleLineMsg(this.message);
    } else {
      return this.formatMultiLineMsg();
    }
  }

  formatMultiLineMsg() {
    let msgLines = this.createMultiLineArray();

    msgLines.forEach((msgLine, idx) => {
      msgLine = this.formatSingleLineMsg(msgLine);
      msgLines[idx] = msgLine;
    });

    return msgLines.join('\n');
  }

  createMultiLineArray() {
    let words = this.message.split(' ');
    let phrase = '';
    let msgLines = [];

    while (words.length > 0) {
      if (`${phrase} ${words[0]}`.length <= (this.width - 4)) {
        phrase += `${words[0]} `; // include space to separate from next word
        words.shift();
      } else {
        msgLines.push(phrase.slice(0, phrase.length - 1)); // remove space before adding
        phrase = '';
      }
    }

    msgLines.push(phrase.slice(0, phrase.length - 1)); // add remaining word to msgLines
    return msgLines;
  }

  formatSingleLineMsg(msgLine) {
    let leftPad;
    let rightPad;

    if ((this.width % 2 !== 0 && msgLine.length % 2 !== 0) ||
        (this.width % 2 === 0 && msgLine.length % 2 === 0)) {
      leftPad = ' '.repeat((this.width - 2 - msgLine.length) / 2);
      rightPad = leftPad;
    } else {
      leftPad = ' '.repeat(Math.floor((this.width - 2 - msgLine.length) / 2));
      rightPad = leftPad + ' ';
    }

    return `|${leftPad}${msgLine}${rightPad}|`;
  }
}

// Program should work with all combinations of:
// - msg length is even
// - msg length is odd
// - msg length > width
// - msg length < width
// - width is even
// - width is odd

// Test Cases:
let banner0 = new Banner('To boldly go where no one has gone before.', 5);
banner0.displayBanner(); // width too small for longest word in message

let banner = new Banner('To boldly go where no one has gone before.');
banner.displayBanner();

let banner1 = new Banner('To boldly go where no one has gone before.', 20);
banner1.displayBanner();

let banner2 = new Banner('To boldly go where no one has gone before.', 21);
banner2.displayBanner();

let banner3 = new Banner('To boldly go where no one has gone before.', 46);
banner3.displayBanner(); // minimal width to display single line message

let banner4 = new Banner('To boldly go where no one has gone before.', 71);
banner4.displayBanner();

/* Output:

'I'm sorry, the given width is too small for these words!'

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
+------------------+
|                  |
|   To boldly go   |
|   where no one   |
|     has gone     |
|     before.      |
|                  |
+------------------+
+-------------------+
|                   |
|   To boldly go    |
| where no one has  |
|   gone before.    |
|                   |
+-------------------+
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
+---------------------------------------------------------------------+
|                                                                     |
|             To boldly go where no one has gone before.              |
|                                                                     |
+---------------------------------------------------------------------+
*/