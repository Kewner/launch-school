// Further Exploration
// ===================
// Modify this class so that constructor will optionally let you specify
// a fixed banner width at the time the Banner object is created. The
// message in the banner should be centered within the banner of that
// width. Decide for yourself how you want to handle widths that are
// either too narrow or too wide.

class Banner {
  constructor(message, width) {
    this.message = message;
    this.width = width || this.message.length + 4;
  }

  displayBanner() {
    if (this.width < (this.longestWordLength() + 4)) {
      this.displaySmallWidth();
    } else if (this.width < (this.message.length + 4)) {
      this.logBanner(this.multiLineMessage());
    } else {
      this.logBanner(this.singleLineMessage());
    }
  }

  logBanner(message) {
    console.log([this.horizontalRule(), this.emptyLine(), message, this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  singleLineMessage(line = this.message) {
    let leftMargin = this.getMargin(line);
    let rightMargin = leftMargin;
    if (this.isUneven()) rightMargin += ' ';

    return `|${leftMargin}${line}${rightMargin}|`;
  }

  getMargin(line = this.message) {
    return ' '.repeat((this.width - line.length - 2) / 2);
  }

  isUneven() {
    return (this.message.length + this.width) % 2 !== 0;
  }

  multiLineMessage() {
    let result = [];
    let currentLine = '';
    const maxLength = this.width - 4;

    this.message.split(' ').forEach((word) => {
      if ((currentLine.length + word.length + 1) <= maxLength) {
        currentLine += ' ' + word;
      } else {
        result.push(currentLine);
        currentLine = word;
      }
    });

    result.push(currentLine);
    return this.formatMultiLineMessage(result);
  }

  formatMultiLineMessage(linesArray) {
    return linesArray.filter(line => line !== '').map(line => {
      return this.singleLineMessage(line);
    }).join('\n');
  }

  longestWordLength() {
    const sortedArray = this.message.split(' ').sort((a, b) => {
      return a.length - b.length;
    });

    return sortedArray[sortedArray.length - 1].length;
  }

  displaySmallWidth() {
    console.log("The given width is too small for this message!");
    return;
  }

  horizontalRule() {
    return `+${'-'.repeat(this.width - 2)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.width - 2)}|`;
  }
}

// Test Cases

let banner1 = new Banner('This is even', 7);
banner1.displayBanner();
// The given width is too small for this message!

let banner2 = new Banner('This is even', 8);
banner2.displayBanner();
// +------+
// |      |
// | This |
// |  is  |
// | even |
// |      |
// +------+

let banner3 = new Banner('This is uneven!', 34);
banner3.displayBanner();
// +--------------------------------+
// |                                |
// |        This is uneven!         |
// |                                |
// +--------------------------------+

let banner4 = new Banner('To boldly go where no one has gone before.', 31);
banner4.displayBanner();
// +-----------------------------+
// |                             |
// |  To boldly go where no one  |
// |      has gone before.       |
// |                             |
// +-----------------------------+

let banner5 = new Banner('To boldly go where no one has gone before.');
banner5.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
