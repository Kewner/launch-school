// A double number is an even-length number whose left-side digits are exactly
// the same as its right-side digits. For example, 44, 3333, 103103, and 7676
// are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied
// by two, unless the argument is a double number; return double numbers as-is.

function twice(num) {
  let numStr = num.toString();

  if (numStr.slice(0, numStr.length / 2) === numStr.slice(numStr.length / 2)) {
    return Number(numStr);
  } else {
    return Number(numStr * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// LS solution:

function twice2(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

twice2(37);          // 74
twice2(44);          // 44
twice2(334433);      // 668866
twice2(444);         // 888
twice2(107);         // 214
twice2(103103);      // 103103
twice2(3333);        // 3333
twice2(7676);        // 7676