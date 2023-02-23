function afterMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let mins = Number(time.slice(3, 5));
  let result = (hours * 60) + mins;

  return result === 1440 ? 0 : result;
}

function beforeMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let mins = Number(time.slice(3, 5));
  let result = ((23 - hours) * 60) + (60 - mins);

  return result === 1440 ? 0 : result;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);