function timeOfDay(mins) {
  const MINUTES_PER_DAY = 1440;
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;

  let totalMinutes = MINUTES_PER_DAY + mins;
  let minutes = totalMinutes % MINUTES_PER_HOUR;
  let hours = (totalMinutes - minutes) / 60;

  if (minutes < 0) {
    minutes = minutes + 60;
  }

  if (hours > 23) {
    hours = hours % HOURS_PER_DAY;
  } else if (hours < 0) {
    hours = HOURS_PER_DAY + (hours % HOURS_PER_DAY - 1);
  }

  return (formatTime(String(hours), String(minutes)));
}

function formatTime(hours, minutes) {
  if (hours.length < 2) {
    hours  = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// console.log(timeOfDay(0));      // "00:00"
// console.log(timeOfDay(-3));     // "23:57"
// console.log(timeOfDay(35));     // "00:35"
// console.log(timeOfDay(-1437));  // "00:03"
// console.log(timeOfDay(3000));   // "02:00"
// console.log(timeOfDay(800));    // "13:20"
// console.log(timeOfDay(-4231));  // "01:29"
// console.log(timeOfDay(-300));   // "19:00"