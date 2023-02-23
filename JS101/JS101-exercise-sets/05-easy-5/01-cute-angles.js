// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees, and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double quote
// (") to represent seconds. There are 60 minutes in a degree, and 60 seconds
// in a minute.

// - The integer degrees (d) are equal to the integer part of the decimal degrees.
// - The minutes (m) are equal to the integer part of the decimal degrees
//   (dd) minus integer degrees (d) times 60.
// - The seconds (s) are equal to the decimal degrees (dd) minus integer degrees
//   (d) minus minutes (m) divided by 60 times 3600:

function dms(angle) {
  let posAngle = angle;
  if ((Math.sign(angle)) === -1) posAngle = -angle;

  let degrees;
  let minutes;
  let seconds;

  if (posAngle % Math.floor(posAngle) === 0 || posAngle === 0) {
    degrees = String(Math.floor(posAngle));
    minutes = '00';
    seconds = '00';
  } else {
    degrees = String(Math.floor(posAngle));
    minutes = String(Math.floor((posAngle % degrees) * 60));
    seconds = String(Math.floor((((posAngle % degrees) * 60) % minutes) * 60));
  }

  if (minutes.length === 1) {
    minutes += '0';
  }

  if (seconds.length === 1) {
    seconds += '0'
  }

  if (angle < 0) {
    return `-${degrees}°${minutes}'${seconds}"`;
  } else {
    return `${degrees}°${minutes}'${seconds}"`;
  }
}

// Further Exploration
// The current solution implementation only works with positive numbers in the
// range of 0 to 360 (inclusive). Can you refactor it so that it works with any
// positive or negative number?

dms(-5.43);        // -5°25'47"
dms(-76.73);       // -76°43'48"
dms(76.73);        // 76°43'48"
dms(30);           // 30°00'00"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"