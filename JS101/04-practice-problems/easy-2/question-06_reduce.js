// Suppose we build an array like this:

// let flintstones = ["Fred", "Wilma"];

// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

let flintstones =
['Fred', 'Wilma', [ 'Barney', 'Betty' ], [ 'Bambam', 'Pebbles' ]]

// Create a new array that contains all of the above values,
// but in an un-nested format.

let flatFlintstones = flintstones.reduce((arr, cur) => arr.concat(cur), []);

console.log(flatFlintstones); // ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']

// 2 arguments are being passed to the reduce method: a callback function and
// the initialValue. The initialValue is used as the first argument to the
// first call of the callback (the 'arr' parameter).

// So, the first call of the callback function looks like this:

// ([], 'Fred') => [].concat('Fred')
// (['Fred'], 'Wilma') => ['Fred'].concat('Wilma')
// (['Fred', 'Wilma'], 'Barney') => ['Fred', 'Wilma'].concat('Barney')
// etc.