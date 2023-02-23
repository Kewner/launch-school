// What will the following code output?
// Try to answer without running the code.

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];

let arr2 = arr1.slice();

arr2[0].first = 42;

console.log(arr1);

// This will output:
// [{ first: "42" }, { second: "value2" }, 3, 4, 5]

// LS:
// The slice() method copies all the elements of the array and returns a new
// array. However, it performs a shallow copy rather than a deep copy. Thus,
// arr1[0] and arr2[0] point to the same object, { first: "value1" }. Thus,
// when we replace the value of first in that object by using arr2, the
// change shows up in arr1 as well.

arr2[1] = 23;

console.log(arr1);  // arr1 remains unchanged

// https://masteringjs.io/tutorials/fundamentals/shallow-copy
// - Shallow copying