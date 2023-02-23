// Write a function that takes a grocery list (a two-dimensional array) with
// each element containing a fruit and a quantity, and returns a one-dimensional
// array of fruits, in which each fruit appears a number of times equal to its
// quantity.

// Understanding the problem
// =========================
// Input: a two-dimensional array, each element containing a fruit and a quantity
// Output: a one-dimensional array, with each fruit appearing a number of times
// equal to its quantity

// Algorithm
// =========
// 1. Declare 'fruitList' variable and assign it to empty array.
// 2. Iterate to 'groceries'
//      - for each sub-array, iterate as many times as the second element
//          - each iteration, add the first element to 'fruitList'
// 3. Return 'fruitList'

function buyFruit(groceries) {
  let fruitList = [];

  groceries.forEach(fruit => {
    for (let idx = 0; idx < fruit[1]; idx += 1) {
      fruitList.push(fruit[0]);
    }
  });

  return fruitList;
}

// Cool solution by Rafiq Kamal
function buyFruit(array) {
  let filledArray = array.map(arr => {
    return Array.from({length:arr[1]}, () => (arr[0]))
  });

  return filledArray.flat();
}

// Array.from({length:3})                    [undefined, undefined, undefined]
// Array.from({length:3}, () => ('hello'))   ['hello', 'hello', 'hello']

// LS solution:
function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}

// Example:
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]