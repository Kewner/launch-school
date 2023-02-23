// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm). Your method should work with any
// integer input.

// You may not use javascript's Date class methods.

function timeOfDay(num) {
  let minutes = num % 60;
  let hours = (num - minutes) / 60;

  if (num % 60 === 0 || (hours > 23 || hours < -23)) {
    hours = hours % 24;
  }

  if (minutes < 0 || hours < 0) {
    hours = 24 + hours - 1;
    minutes = 60 + minutes;
  }

  // console.log(`${addZero(hours)}:${addZero(minutes)}`);
  return `${addZero(hours)}:${addZero(minutes)}`;
}

function addZero(num) {
  return String(num).length < 2 ? '0' + num : num;
}

console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");

// timeOfDay(-3);
// timeOfDay(-1437);
// timeOfDay(-4231);
// timeOfDay(0);
// timeOfDay(35);
// timeOfDay(3000);
// timeOfDay(800);

// The tests above should log true.
// Disregard Daylight Savings and Standard Time and other complications.