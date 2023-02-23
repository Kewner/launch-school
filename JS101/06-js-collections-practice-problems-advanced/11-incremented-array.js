// Given the following data structure, use the map method to return a new array
// identical in structure to the original but, with each number incremented by 1.
// Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// using for..in
let newArr = arr.map(obj => {
  let objCopy = Object.assign({}, obj);

  for (const prop in objCopy) {
    objCopy[prop] += 1;
  }

  return objCopy;
});

console.log(newArr);
console.log(arr);

// using forEach
let newArr1 = arr.map(obj => {
  let objCopy = Object.assign({}, obj);

  Object.keys(objCopy).forEach(key => objCopy[key] += 1);

  return objCopy;
});

console.log(newArr1);
console.log(arr);

// LS solution is slightly different from the first solution:
arr.map(obj => {
  let incrementedObj = {}; // create an empty object instead of a copy

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1; // use original object to create keys
  }

  return incrementedObj;
});

arr;