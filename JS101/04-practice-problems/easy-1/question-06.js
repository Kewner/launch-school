// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

// Create an array containing the additional key/value pairs
let additionalEntries = Object.entries(additionalAges);

// Iterate through the array to add the key/value pairs to the ages object
additionalEntries.forEach(entry => {
  ages[entry[0]] = entry[1];
})

console.log(ages);

// LS solution:
let agesTwo = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAgesTwo = { Marilyn: 22, Spot: 237 };

Object.assign(agesTwo, additionalAgesTwo);

console.log(agesTwo);