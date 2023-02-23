// Some people believe that Fridays that fall on the 13th day of the month are
// considered to be unlucky days. Write a function that takes a year as an
// argument, and returns the number of Friday the 13ths in that year. You may
// assume that the year is greater than 1752, which is when the United Kingdom
// adopted the modern Gregorian Calendar. You may also assume that the same
// calendar will remain in use for the foreseeable future.

// Understanding the problem
// =========================
// input: a number (a year)
// output: a number (amount of Friday the 13ths in that year)
// rules:
//    explicit:
//    - the year is greater than 1752, so we use the gregorian calendar

// Data structures
// ===============
// - numbers

// Algorithm (from LS)
// ===================
// 1. iterate over all the months of the given year
// 2. for each month, get the day that falls on the 13th
// 3. count the 13ths that fall on a friday
// 4. return the count

function fridayThe13ths(year) {
  let unluckies = 0;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

  months.forEach(month => {
    let date = new Date(`${month} 13, ${year}`);
    if (date.getDay() === 5) unluckies += 1;
  });

  return unluckies;
}

// Solution without month array
// ============================
function fridayThe13ths(year) {
  let unluckyDays = 0;

  for (let month = 0; month < 12; month += 1) {
    if (new Date(year, month, 13).getDay() === 5) unluckyDays += 1;
  }

  return unluckyDays;
}

// LS solution
// ===========
function fridayThe13ths(year) {
  let thirteenths = [];

  // push all dates of the thirteenth in the year to the array
  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  // for each date in array, increment 'count' with 1 if date's day is friday
  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

// Cool solution by Wendy Teo
// ==========================
const fridayThe13thss = year => {
  return [...Array(12).keys()]
    .filter(month => {
      return new Date(year, month, 13).getDay() === 5;
    }).length;
};

// Explanation:
// [...Array(12)]        creates [undefined, undefined, undefined ... (12 elements)]
// [...Array(12).keys()] creates [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 

// Examples:
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2021));      // 1