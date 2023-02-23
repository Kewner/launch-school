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
  let corAngle = correctAngle(angle);
  let degrees;
  let minutes;
  let seconds;

  if (corAngle % Math.floor(corAngle) === 0 || corAngle === 0) {
    degrees = String(Math.floor(corAngle));
    minutes = '00';
    seconds = '00';
  } else {
    degrees = String(Math.floor(corAngle));
    minutes = String(Math.floor((corAngle % degrees) * 60));
    seconds = String(Math.floor((((corAngle % degrees) * 60) % minutes) * 60));
  }

  return `${degrees}°${addZeroes(minutes)}'${addZeroes(seconds)}"`;
}

// helper function to return correct angle within 0-360 range
function correctAngle(angle) {
  let newAngle;

  if (angle < 0) {
    newAngle = 360 + angle;
  } else if (angle > 360) {
    newAngle = angle - 360;
  } else {
    newAngle = angle;
  }

  if (newAngle < 0) newAngle = -newAngle;
  return newAngle;
}

// helper function to add a '0' if necessary
function addZeroes(numStr) {
  return numStr.length < 2 ? ('0' + numStr) : numStr;
}

dms(-1);        // 359°00'00"
dms(400);       // 40°00'00"
dms(-40);       // 320°00'00"
dms(-420);      // 300°00'00"

dms(76.73);     // 76°43'48"
dms(30);        // 30°00'00"
dms(254.6);     // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0);         // 0°00'00"
dms(360);       // 360°00'00" or 0°00'00"