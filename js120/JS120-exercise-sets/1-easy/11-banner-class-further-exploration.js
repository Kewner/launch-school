// Further Exploration
// Modify this class so that constructor will optionally let you specify
// a fixed banner width at the time the Banner object is created. The
// message in the banner should be centered within the banner of that
// width. Decide for yourself how you want to handle widths that are either
// too narrow or too wide.

class Banner {
  constructor(message, width) {
    this.message = message;
    this.width = width || this.message.length + 4;
  }

  displayBanner() {
    if (this.width < (this.longestWordLength() + 4)) {
      this.displaySmallWidthMessage();
    } else if (this.width < (this.message.length + 4)) {
      this.displayMultilineBanner();
    } else {
      this.displaySingleLineBanner();
    }
  }

  displaySingleLineBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  displayMultilineBanner() {
    // TODO:
    console.log('-- display multi-line banner here --');
  }

  longestWordLength() {
    const sortedArray = this.message.split(' ').sort((a, b) => {
      return a.length - b.length;
    });

    return sortedArray[sortedArray.length - 1].length;
  }

  displaySmallWidthMessage() {
    console.log("The given width is too small for this message!");
    return;
  }

  horizontalRule() {
    return `+${'-'.repeat(this.width - 2)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.width - 2)}|`;
  }

  messageLine() {
    let leftMargin = this.getMargin();
    let rightMargin = leftMargin;
    if (this.isUneven()) rightMargin += ' ';

    return `|${leftMargin}${this.message}${rightMargin}|`;
  }

  getMargin() {
    return ' '.repeat((this.width - this.message.length - 2) / 2);
  }

  isUneven() {
    return (this.message.length + this.width) % 2 !== 0;
  }
}

// Test Cases
let banner1 = new Banner('This is even', 7);
banner1.displayBanner(); // The given width is too small for this message!

let banner2 = new Banner('This is even', 8);
banner2.displayBanner(); // -- display multi-line banner here --

let banner3 = new Banner('This is uneven!', 34);
banner3.displayBanner();
// +--------------------------------+
// |                                |
// |        This is uneven!         |
// |                                |
// +--------------------------------+
