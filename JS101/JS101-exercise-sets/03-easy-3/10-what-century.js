// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

function century(year) {
  let century = Math.ceil(year / 100);
  let result = '';

  if (century % 100 >= 4 && century % 100 <= 20 || century % 10 === 0) {
    result += century + 'th';
  } else if (century % 100 === 1 || century % 10 === 1) {
    result += century + 'st';
  } else if (century % 100 === 2) {
    result += century + 'nd';
  } else if (century % 100 === 3) {
    result += century + 'rd';
  }

  console.log(result);
}


century(2000);        // "20th"
century(3000);        // "30th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


// 01st
// 02nd
// 03rd

// 04th
// 05th
// 06th
// 07th
// 08th
// 09th
// 10th
// 11th
// 12th
// 13th
// 14th
// 16th
// 17th
// 18th
// 19th
// 20th

// 21st