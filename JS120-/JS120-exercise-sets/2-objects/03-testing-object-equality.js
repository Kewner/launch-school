// In JavaScript, comparing two objects either with == or === checks for
// object identity. In other words, the comparison evaluates as true if
// it's the same object on either side of == or ===. This is a limitation,
// in a sense, because sometimes we need to check if two objects have the
// same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and
// returns true or false depending on whether the objects have the same
// key/value pairs.

// Own solution:
function objectsEqual(obj1, obj2) {
  if (!numberOfKeysMatch(obj1, obj2)) return false;
  if (bothObjectsEmpty(obj1, obj2)) return true;

  let areEqual = true;

  Object.keys(obj1).forEach(key => {
    if (obj1[key] !== obj2[key] || !obj2.hasOwnProperty(key)) {
      areEqual = false;
    }
  });

  return areEqual;
}

function numberOfKeysMatch(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length;
}

function bothObjectsEmpty(obj1, obj2) {
  return Object.keys(obj1).length + Object.keys(obj2).length === 0;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// LS solution:
function objectsEqual1(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

// Further exploration:
// A limitation of this function is that it doesn't look for deep equality.
// In other words, if one of the values is an object in both objects, this
//  will return false unless that object is identical on both objects.
