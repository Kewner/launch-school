// Building a forEach method

function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx += 1) {
    callback.call(thisArg, array[idx], idx, array);
  }
}

// forEach accepts a thisArg argument:
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);

// Item:  1
// Item:  2
// Item:  3

// forEach can pass value, index, and array arguments to callback:
forEach([1, 2, 3], (value, index, arr) => {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

// After 1 comes 2
// After 2 comes 3
// After 3 comes undefined
