// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAge = Object.values(ages).sort()[0];

console.log(minAge);


// LS solution using spread syntax:

let agesArr = Object.values(ages);

// We can use Math.min() on multiple arguments:
console.log(Math.min(3, 1, 5)); // logs 1

// Or use the spread operator to convert the array to a list of arguments:
Math.min(...agesArr); // => 10