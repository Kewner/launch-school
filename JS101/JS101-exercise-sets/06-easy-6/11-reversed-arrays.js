// Write a function that takes an Array as an argument, and reverses its elements
// in place; that is, mutate the Array passed into this method. The return value
// should be the same Array object.

// You may not use Array.prototype.reverse().

function reverse(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {

  }
}

// splice can be used to delete an item AND to add an item at a specific index!

// let array = [1, 2, 3, 4];
// array.splice(1, 0, 'hello'); // returns empty array (0 items deleted)
// array  // returns [1, 'hello', 2, 3, 4]

// formule bedenken voor:
// index 0 moet naar index 3
// index 1 moet naar index 2
// index 2 moet naar index 1
// index 3 moet naar index 0

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true