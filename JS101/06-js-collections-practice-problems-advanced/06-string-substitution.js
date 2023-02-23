// One of the most frequently used real-world string operations is that of
// "string substitution," where we take a hard-coded string and modify it with
// various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of
// each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

for (const person in munsters) {
  let name = person[0].toUpperCase() + person.slice(1);
  let age = munsters[person].age;
  let gender = munsters[person].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
}

// LS solution uses Object.entries, which returns an array containing nested
// arrays with the key and value of each key/value pair (a string and an object).

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});