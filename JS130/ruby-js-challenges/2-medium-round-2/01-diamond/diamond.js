class Diamond {
  static makeDiamond(letter) {
    this.letterWidths = this._createWidthsObject(letter);
    this.size = this._calculateSize(letter);

    let diamond = '';
    let index = 0;
    let increment = 1;
    const letterKeys = Object.keys(this.letterWidths);

    while (true) {
      diamond += this._createRow(letterKeys[index]);
      if (index === letterKeys.length - 1) increment = -1;
      index += increment;
      if (index === -1) break;
    }

    return diamond;
  }

  static _calculateSize(letter) {
    return this.letterWidths[letter];
  }

  static _createWidthsObject(letter) {
    let letterWidths = {};
    let width = 3;

    for (let charCode = 65; charCode <= letter.charCodeAt(); charCode += 1) {
      letterWidths[String.fromCharCode(charCode)] = width;
      width += 2;
    }

    return letterWidths;
  }

  static _createRow(letter) {
    const sidePadding = ' '.repeat((this.size - this.letterWidths[letter]) / 2);

    if (letter === 'A') {
      return `${sidePadding}${letter}${sidePadding}\n`;
    }

    const middlePadding = ' '.repeat(this.size - (sidePadding.length * 2) - 2);
    return `${sidePadding}${letter}${middlePadding}${letter}${sidePadding}\n`;
  }
}

module.exports = Diamond;