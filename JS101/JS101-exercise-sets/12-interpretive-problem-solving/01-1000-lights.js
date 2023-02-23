// You have a bank of switches before you, numbered from 1 to count. Every
// switch is connected to exactly one light that is initially off. You walk down
// the row of switches and toggle every one of them, that is, you flip every
// switch. All the lights are now on. You walk back to the beginning of the row
// and start another pass. On this second pass, you toggle switches 2, 4, 6, and
// so on. Now, every other light is on. On the third pass, you go back to the
// beginning again, this time toggling switches 3, 6, 9, and so on. You continue
// to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

// Understanding the problem
// =========================
// input: an integer
// output: an array, containing the number (not index!) of the lights that are on
// rules:
//    explicit:
//    - start with a bank of switches numbered 1 to 'count'
//    - each switch is connected to exactly one light that is initially off
//    - the first pass starts at light 1 (the first light) and flips every
//      switch up to 'count', so each iteration, it jumps up 1 index
//    - the second pass starts at light 2 and flips every switch it encounters
//      while jumping up 2 index at each iteration
//    - 3rd pass starts at 3, jumps up 3, etc.
//    - an array containing the light numbers (not indexes) that are on must be
//      returned
//    implicit:
//    - the input is always an integer
//    - the output is always an array

// Data structures
// ===============
// an array representing the bank of switches
// a result array containing the lights that are on after all passes
// a 'startIdx' and 'interval' variable, each assigned to a number

// Algorithm
// =========
// 1. create an array 'switchBank' with 'switches' string elements with value 'off'
// 2. declare 'startLight' variable with value of 0
// 3. declare 'increment' variable with value of 1
// 4. iterate for 'switches' rounds
//      - iterate over elements of 'switchBank', starting at idx 'startLight',
//        incrementing index by 'increment'
//            - if light at current index is off, turn on
//            - if light at current index is on, turn off
//    increment 'startLight' with 1
//    increment 'increment' with 1
// 5. 
// 3. iterate over 'switchBank'
//      - for each element, if value is 'on', save its index in array + 1 to new
//        array; discard the rest
// 4. return new array

function lightsOn(switches) {
  let switchBank = Array.from(Array(switches)).map(val => val = 'off');
  let startLight = 0;
  let increment = 1;

  for (let round = 0; round < switches; round += 1) {
    for (let idx = startLight; idx < switchBank.length; idx += increment) {
      switchBank[idx] = flipSwitch(switchBank[idx]);
    }

    startLight += 1;
    increment += 1;
  }

  return lightsOnArray(switchBank);
}

function flipSwitch(onOrOff) {
  if (onOrOff === 'off') {
    return 'on';
  } else {
    return 'off';
  }
}

function lightsOnArray(array) {
  return array.map((val, idx) => {
    if (val === 'on') {
      return idx + 1;
    }
  }).filter(val => val);
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// ============================================================================

// LS solution
function lightsOn2(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    // rounds: 1..count
    lights = toggleLights(lights, switchNum);
  }

  let result = [];

  for (let idx = 0; idx < count; idx += 1) {
    // indices: 0..count-1
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result;
}

// return [false, false, false] with count of 3
function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights;
}

// flip switch if light number is a multiple of round number
function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });
}

console.log(initializeLights(3)) // [false, false, false]
console.log(toggleLights([false, false, false, false, false], 2));
// [false, true, false, true, false]


console.log(lightsOn2(5));        // [1, 4]
console.log(lightsOn2(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]