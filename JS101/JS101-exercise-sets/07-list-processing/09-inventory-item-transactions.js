// Write a function that takes two arguments, inventoryItem and transactions,
// and returns an array containing only the transactions for the specified
// inventoryItem.

// Input:
//    - a number representing an inventory item id
//    - an array with objects containing item id's and their transactions
// Rules:
//    - don't mutate the original array; return a new array

// Algorithm
// 1. Declare 'itemTransactions' array and assign it to empty array.
// 2. Iterate through elements of 'transactions'
//      - if element.id equals 101, push element to 'itemTransactions'
// 3. Return 'itemTransactions'

function transactionsFor(inventoryItem, transactions) {
  let itemTransactions = [];

  transactions.forEach(transaction => {
    if (transaction.id === 101) {
      itemTransactions.push(transaction);
    }
  });

  return itemTransactions;
}

// LS solution: The shape of this problem is that of filtering.
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}

// Example
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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]