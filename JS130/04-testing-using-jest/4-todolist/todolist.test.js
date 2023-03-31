const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray() returns the list as an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first() returns the first todo item', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last() returns the last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift() removes and returns the first todo item', () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);

    // expect(list.shift()).toEqual(todo1);
    // expect(list.size()).toBe(2);
  });
});
