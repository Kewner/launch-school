// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this without using for, while, or do...while loops -
// instead, use a series of method calls to perform the sum.

const sum = num => String(num).split('').map(str => Number(str))
                                        .reduce((acc, cur) => acc + cur);

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// LS solution:
function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}

// initialValue 0 is need in this case: otherwise, the first element in the
// array would be used as the initial accumulator value and skipped as
// currentValue. That value would still be a string, so all the other values,
// which will be turned into numbers first, will be coerced into back into
// strings as soon as they're concatenated with the existing array element.