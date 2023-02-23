// Write a function that takes a string argument, and returns a list of all
// substrings that start from the beginning of the string, ordered from shortest
// to longest.

function leadingSubstrings(str) {
  let result = [];

  for (let idx = 1; idx <= str.length; idx++) {
    result.push(str.slice(0, idx))
  }

  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Further Exploration
// Rewrite leadingSubstrings using list processing functions. That is, convert
// the string into an array of some sort and use functions like map, filter, or
// reduce to get the desired substrings. (You will also need to use join.) Try
// not to use forEach as that is too similar to the for loop approach.

// map, filter, reduce; no forEach

function leadingSubstrings1(str) {
  let strArray = str.split('');     // ['a', 'b', 'c']

  let result = strArray.map((value, index, array) => {
    EEEEEEEEEEEEEEEEEEH
  })
}

leadingSubstrings1('abc');      // ["a", "ab", "abc"]
leadingSubstrings1('a');        // ["a"]
leadingSubstrings1('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]