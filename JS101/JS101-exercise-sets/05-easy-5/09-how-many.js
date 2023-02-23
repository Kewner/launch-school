// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Further Exploration
// Try to solve the problem when words are case insensitive, e.g. "suv" and
// "SUV" represent the same vehicle type.

function countOccurrences(array) {
  array = array.map(val => val.toLowerCase());
  let counter = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (!counter[array[idx]]) {
      counter[array[idx]] = 1;
    } else {
      counter[array[idx]] += 1;
    }
  }

  for (let prop in counter) {
    console.log(`${prop} => ${counter[prop]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// LS solution:
// uses a helper function to log occurrences
// leverages short-circuit evaluation to decide what to do with each property

function countOccurrences2(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    // if the property already exists, that's what's returned;
    // if not, 0 is returned, so that the new value - now a number - can
    // be increased by 1
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}

countOccurrences2(vehicles);