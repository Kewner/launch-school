// Notice that our solution to the previous problem lets us access the
// array of items through the items property: list.todos returns ['corn'].

// That wasn't the case in the single-function implementation, where
// list.todos returned undefined: it wasn't accessible from outside the
// function because it was within a closure.

// Update the implementation from problem 3 so that it retains the use
// of an object with methods but prevents outside access to the items
// the object stores internally.

function makeList() {
  const todos = [];

  return {
    list() {
      if (todos.length === 0) {
        console.log('This list is empty.');
      } else {
        todos.forEach(todo => console.log(todo));
      }
    },

    add(todo) {
      if (!todos.includes(todo)) {
        todos.push(todo);
        console.log(`${todo} added!`);
      }
    },

    remove(todo) {
      let index = todos.indexOf(todo);

      if (index !== -1) {
        todos.splice(index, 1);
        console.log(`${todo} removed!`);
      }
    },
  }
}

// Examples
let list = makeList();

list.add("peas"); // peas added!
list.add("corn"); // corn added!
list.list();
// peas
// corn

console.log(list.todos); // undefined (not accessible)
