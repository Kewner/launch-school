// In the modern era under the Gregorian Calendar, leap years occur in
// every year that is evenly divisible by 4, unless the year is also
// divisible by 100. If the year is evenly divisible by 100, then it is
// not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a
// function that takes any year greater than 0 as input, and returns
// true if the year is a leap year, or false if it is not a leap year.

// divisible by 400: true
// divisible by 100: false
// divisible by 4: true

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// Alternative solution using ternary rules:

// function isLeapYear(year) {
//   return year % 400 === 0 ? true :
//          year % 100 === 0 ? false:
//          year %  4  === 0 ? true : false;
// }

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

// Further Exploration
// The order in which you perform tests for a leap year calculation is
// important. For what years will isLeapYear fail if you rewrite it as
// shown below?

// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     return false;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return year % 4 === 0;
//   }
// }

// It will fail for years evenly divisible by 400 - for these years the
// function has already returned false because they are divisible by 100.

// Can you rewrite isLeapYear to perform its tests in the opposite order
// of the above solution? That is, test whether the year is divisible by
// 4 first, then, if necessary, test whether it is divisible by 100, and
// finally, if necessary, test whether it is divisible by 400. Is this
// solution simpler or more complex than the original solution?

function isLeapYearOpposite(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
    }
  }
  return false;
}

// This solution is more complex because of the nested if statements.