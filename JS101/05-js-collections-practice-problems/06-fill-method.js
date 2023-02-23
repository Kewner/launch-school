// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]

arr.fill(1, 1, 5);

console.log(arr); // [1, 1, 1, 1, 1], so fill() is destructive

// From MDN:
// The fill() method changes all elements in an array to a static value, from a
// start index (default 0) to an end index (default array.length). It returns
// the modified array.

// Parameters
// ==========
// - value to fill the array with. (all elements will be this exact value)
// - start index, default 0 (optional)
// - end index, default arr.length (optional)

// Return value
// ============
// The modified array, filled with value.

// So, 'fill' takes a value and two indices and replaces the indices in between
// those two given indices with the given value.