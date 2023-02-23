// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's
// name and Barney's number: [ 'Barney', 2 ]

// Using Object.entries()
let barney = Object.entries(flintstones)[2];

console.log(barney);

// Using for...in
let barneyArr = [];

for (const prop in flintstones) {
  if (prop === 'Barney') {
    barneyArr.push(prop, flintstones[prop]);
  }
}

console.log(barneyArr);

// LS solution: using Object.entries() and filter()
Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();

// shift() removes the first element from an array and returns that element.