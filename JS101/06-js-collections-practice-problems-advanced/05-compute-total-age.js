// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

let totalAge = 0;

for (const person in munsters) {
  if (munsters[person]['gender'] === 'male') {
    totalAge += munsters[person]['age'];
  }
}

console.log(totalAge);

// Another way to do it would be to use the Object.values
// function along with forEach or a loop:

let totalAge2 = 0;

Object.values(munsters).forEach(personProps => {
  if (personProps.gender === 'male') {
    totalAge2 += personProps.age;
  }
})

console.log(totalAge2);

// Since we don't need the key (each family member's name) from the key-value
// pairs in the outer object, we can use Object.values in this way.