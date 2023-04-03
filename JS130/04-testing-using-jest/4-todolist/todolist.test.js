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

  test('size() returns 3, the length of the todolist', () => {
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
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
  });

  test('pop() removes and returns the last todo item', () => {
    const todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone() checks if all todos are done, returns true or false', () => {
    expect(list.isDone()).toBe(false);
  });

  test('add() throws error when non todo item is added', () => {
    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add(5)).toThrow(TypeError);
    expect(() => list.add('hello')).toThrow(TypeError);
    expect(() => list.add(new TodoList(''))).toThrow(TypeError);
  });

  test('itemAt() returns item at given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test('markDoneAt() marks item at given index as done', () => {
    list.markDoneAt(0);
    expect(list.allDone().todos).toContain(todo1);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });

  test('markAllDone() marks all todo items as done', () => {
    expect(list.allDone().todos).toEqual([]);
    list.markAllDone();
    expect(list.allDone().todos).toEqual([todo1, todo2, todo3]);
  });

  test('removeAt() removes todo item at given index', () => {
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
    expect(list.removeAt(1)).toEqual(todo2);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString() returns a string representation of the list', () => {
    let str = `---- ${list.title} ----`;
    [todo1, todo2, todo3].forEach(todo => str += '\n' + todo.toString());
    expect(list.toString()).toBe(str);
  });

  test('toString() returns different string for done todo', () => {
    todo1.markDone();
    let str = `---- ${list.title} ----`;
    [todo1, todo2, todo3].forEach(todo => str += '\n' + todo.toString());
    expect(list.toString()).toBe(str);
  });

  test('toString() returns different string for all done todos', () => {
    list.markAllDone();
    let str = `---- ${list.title} ----`;
    [todo1, todo2, todo3].forEach(todo => str += '\n' + todo.toString());
    expect(list.toString()).toBe(str);
  });

  test('forEach() iterates over all todos', () => {
    let todoArray = [];
    list.forEach(todo => todoArray.push(todo));
    expect(todoArray).toEqual([todo1, todo2, todo3]);
  });

  test('filter() returns new TodoList object with filtered todos', () => {
    todo1.markDone();
    const newList = list.filter(todo => todo.isDone());
    const testList = {title: "Today's Todos", todos: [{ title: 'Buy milk', done: true }]};
    expect(newList).toEqual(testList);
  });
});
