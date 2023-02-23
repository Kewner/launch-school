// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];

flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

// Create a new array that contains all of the above values,
// but in an un-nested format.

let flatFlintstones = [];

flintstones.forEach((element) => {
  if (Array.isArray(element)) {
    element.forEach(name => flatFlintstones.push(name));
  } else {
    flatFlintstones.push(element);
  }
});

console.log(flatFlintstones);

// LS solution:
let newArr2 = [];

flintstones.forEach(element => {
  newArr2 = newArr2.concat(element);
});

console.log(newArr2);

// Why does line 29 work? When logging each element seperately, the nested
// arrays seem to remain nested; however, line 30 successfully create a
// new array that is flattened.

// It works because non of the elements that forEach() iterates through itself contains a nested array.