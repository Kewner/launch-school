// Write a function that takes an Array as an argument, and reverses its
// elements in place; that is, mutate the Array passed into this method. The
// return value should be the same Array object.

// You may not use Array.prototype.reverse().

// Understanding the problem
// =========================
// input: an array
// output: that same array, but with its elements reverse in place
// rules:
// - the order of the elements of the input array should be reversed
// - reversing happens in place: the return value should be the same array
// - if the input array is empty, it is returned as an empty array

// Mental model
// ============
// [1, 2, 3, 4]
// [2, 3, 4, 1] 0 moved to last
// [3, 4, 2, 1] 0 moved to last - 1
// [4, 3, 2, 1] 0 moved to last - 2

// Data structures/algorithm
// =========================
// 1. create variable fromLast with value of 0
// 2. iterate for array.length - 1 times:
//       - move first element of arr to the end position of arr minus 'fromLast'
//       - increment fromLast with 1
// 3. return array

function reverse(arr) {
  for (let fromLast = 0; fromLast < arr.length - 1; fromLast += 1) {
    let element = arr.shift();
    arr.splice(arr.length - fromLast, 0, element);
  }

  return arr;
}

// Examples:

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