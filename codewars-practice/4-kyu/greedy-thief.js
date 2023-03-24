// https://www.codewars.com/kata/58296c407da141e2c7000271/train/javascript

// Please complete the function greedyThief, to help the thief to make the
// best choice. Two arguments will be given: items(an array that contains
// all items) and n(the maximum weight of the package can be accommodated).

// The result should be a list of items that the thief can take away and
// has the maximum total price.

// Notes: If more than one valid solutions exist, you should return one
// of them; If no valid solution should return []; You should not modify
// argument items; In the end, you need a good algorithm ;-)

// Algorithm
// - initialize baggedItems as empty array
// - initialize firstSorting as a copy of items
// - sort the items in firstSorting by price/weight ratio, largest to smallest
// - sort all items with the same ratio by price, largest to smallest
// - iterate through secondSorting:
//     - if weight of current item + total weight in baggedItems is
//       smaller or equal to n, add item to baggedItems
// - return baggedItems

// sort all items with the same ratio by price, largest to smallest
// - initialize secondSorting to empty array
// - initialize currentRatio to -1
// - iterate through firstSorting:
//     - if the item's ratio is not currentRatio:
//         - assign currentRatio to item's ratio
//         - use filter to get an array of all items with this ratio
//         - sort this new array by price, largest to smallest
//         - add each item of this new array to secondSorting

function greedyThief(items, n) {
  const baggedItems = [];



  return baggedItems;
}

// examples
const items1 = [       // price/weight:
 {weight:2, price:6},  // 3
 {weight:2, price:3},  // 1.5
 {weight:6, price:5},  // 0.83
 {weight:5, price:4},  // 0.8
 {weight:4, price:6},  // 1.5
 {weight:8, price:12}, // 1.5
];

console.log(greedyThief(items1, 10));

const items2 = [      // price/weight:
 {weight:2, price:6}, // 3
 {weight:2, price:3}, // 1.5
 {weight:6, price:5}, // 0.83
 {weight:5, price:4}, // 0.8
 {weight:4, price:6}, // 1.5
];

console.log(greedyThief(items2, 10));
// [
//  {weight:2,price:6},
//  {weight:2,price:3},
//  {weight:4,price:6}
// ]
