// This was my first solution, with waaaay to much code. Before going all
// in on the first direction you think of, think about alternative options,
// and making use of built-in methods!!!

class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(length) {
    if (length > this.digits.length) this.lengthError(this.digits.length);
    let series = [];

    for (let idx = 0; idx < this.digits.length; idx += 1) {
      const subArray = this.digits.split('').slice(idx);
      const currentSeries = this.series(subArray, length);
      if (currentSeries.length === length) series.push(currentSeries);
    }

    return series;
  }

  series(digits, length) {
    const currentSeries = [];

    for (let idx = 0; idx < digits.length; idx += 1) {
      if (currentSeries.length === length) break;
      const digit = Number(digits[idx]);
      if (Number(digit) === digit) currentSeries.push(digit);
    }

    return currentSeries;
  }

  lengthError(length) {
    throw new Error(`Length cannot exceed number of digits: ${length}`);
  }
}
