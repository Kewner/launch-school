// Building on the previous exercise, write a function that returns true or
// false based on whether or not an inventory item is available. As before,
// the function takes two arguments: an inventory item and a list of
// transactions. The function should return true only if the sum of the quantity
// values of the item's transactions is greater than zero. Notice that there is
// a movement property in each transaction object. A movement value of 'out'
// will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous
// exercise.

// Input:
//  - a number representing an inventory item id
//  - an array with objects representing a list of transactions
// Output:
//  - true if the sum of the quantity values of the item's transactions is greater than zero
//  - false otherwise
// Rules:
//  - if the movement value is 'out', the item's quantity will be decresed by
//    the corresponding quantity value

// Algorithm
// 1. Declare 'currentItem' variable and assign it the return value of
//    'transactionsFor'.
// 2. Using reduce, calculate the current quantity of the item.
// 3. If the result is greater than zero, return true; otherwise, return false.

// Using reduce:
function isItemAvailable(inventoryItem, transactions) {
  let itemTransactions = transactionsFor(inventoryItem, transactions);

  let quantity = itemTransactions.reduce((quantity, transaction) => {
    if (transaction.movement === 'in') {
      return quantity += transaction.quantity;
    } else {
      return quantity -= transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

// Using forEach:
function isItemAvailable(inventoryItem, transactions) {
  let itemTransactions = transactionsFor(inventoryItem, transactions);
  let quantity = 0;

  itemTransactions.forEach(transaction => {
    if (transaction.movement === 'in') quantity += transaction.quantity;
    if (transaction.movement === 'out') quantity -= transaction.quantity;
  })

  return quantity > 0;
}

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => transaction.id === inventoryItem);
}

// Cool solution by Bilal Dar:
function isItemAvailable(inventoryItem, transaction) {
  let query = transactionsFor(inventoryItem, transaction);
  let inventory = 0;
  query.forEach(el => el.movement === 'in' ? inventory += 1 : inventory -= 1);

  return inventory > 0;
}

// Examples:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true