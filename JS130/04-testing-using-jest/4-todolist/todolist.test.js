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
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);

    // expect(list.shift()).toEqual(todo1);
    // expect(list.size()).toBe(2);
  });

  test('pop() removes and returns the last todo item', () => {
    const todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone() checks if all todos are done, returns true or false', () => {
    expect(list.isDone()).toBe(false);
    // list.markAllDone();
    // expect(list.isDone()).toBe(true);
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
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);

    // list.markDoneAt(0);
    // expect(list.allDone().todos).toContain(todo1);
    // expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });
});
