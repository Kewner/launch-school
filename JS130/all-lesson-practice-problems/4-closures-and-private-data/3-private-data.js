// Improving the API
// We resume our discussion of closures and private data by taking another
// look at the makeList function we wrote in the practice problems.

// Our solution provides a concise but somewhat unclear interface for
// developers. The function returned by makeList lets the user perform
// three different actions (adding, removing, and listing) by calling the
// function with appropriate arguments. It works, but the interface isn't
// clear. Astonishingly, the single call list('make breakfast') performs
// two entirely different operations based on the current state of the list!

// We can improve the interface by returning an Object from makeList
// instead of a function. That lets us create an API that is easy to use
// and understand.

function makeList() {
  return {
    todos: [],

    list() {
      if (this.todos.length === 0) {
        console.log('This list is empty.');
      } else {
        this.todos.forEach(todo => console.log(todo));
      }
    },

    add(todo) {
      if (!this.todos.includes(todo)) {
        this.todos.push(todo);
        console.log(`${todo} added!`);
      }
    },

    remove(todo) {
      let index = this.todos.indexOf(todo);

      if (index !== -1) {
        this.todos.splice(index, 1);
        console.log(`${todo} removed!`);
      }
    },
  }
}

// Examples
let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn
