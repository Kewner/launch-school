// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];

flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

// Create a new array that contains all of the above values,
// but in an un-nested format.

let flatFlintstones = [].concat(...flintstones);
console.log(flatFlintstones);
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

let notFlatFlintstones = [].concat(flintstones);
console.log(notFlatFlintstones);
// ['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']]


// Without spread syntax it doesn't work: there's still nested arrays. Why?
// What does the spread syntax do that makes it work?

// Using spread syntax, this is what happens:
// [].concat('Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles'])

// Without spread syntax, this is what happens:
// [].concat(['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']])

// So, with spread syntax there's no nested arrays being passed as arguments; just strings and arrays.
// Without spread syntax, an array with nested arrays is passed as the argument.
// Remember: concat() does not recurse into nested arrays