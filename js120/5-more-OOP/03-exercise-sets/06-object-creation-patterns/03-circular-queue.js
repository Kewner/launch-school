/*
A circular queue is a collection of objects stored in a buffer that is
treated as though it is connected end-to-end in a circle. When an object
is added to this circular queue, it is added to the position that
immediately follows the most recently added object, while removing an
object always removes the object that has been in the queue the longest.

This works as long as there are empty spots in the buffer. If the buffer
becomes full, adding a new object to the queue requires getting rid of an
existing object; with a circular queue, the object that has been in the
queue the longest is discarded and replaced by the new object.

Assuming we have a circular queue with room for 3 objects, the circular
queue looks and acts like this: https://launchschool.com/exercises/1becc424

Your task is to write a CircularQueue class that implements a circular queue
for arbitrary objects. The class should obtain the buffer size with an
argument provided to the constructor, and should provide the following methods:

- enqueue to add an object to the queue
- dequeue to remove (and return) the oldest object in the queue. It should
  return null if the queue is empty.

You may assume that none of the values stored in the queue are null (however,
null may be used to designate empty spots in the buffer).

- enqueue: add to position immediately after the most recently added object
  - if queue full: remove object that has been in the queue the longest
- dequeue: remove object that has been in the queueu the longest
           return removed object
           return null if queueu is empty


- Create `this.history` array to keep track of the order in which item are added.

enqueue()
1. If `buffer` is full, call dequeue to remove oldest item.
2. If `buffer` is empty:
   - Replace the first null in `buffer` with the item.
   - Add the new item to `history`; if history exceeds `bufferSize`, remove first item.
3. Else, add new item to the position immediately after the most recently added item:
   - Get the `buffer` index of the last item in `history` (which is the most recent item)
   - Starting at this index, iterate through `buffer` to find the first empty slot.
   - If not found, iterate through `buffer` starting at index 0 to find the empty slot.
   - Add the item to `buffer` at the empty slot index.
   - Add the new item to `history`; if history exceeds `bufferSize`, remove first item.

dequeue()
1. If `buffer` is empty, return null.
2. Find the index of the `buffer` item that is the first item in `history`.
3. Remove the first item from `history`.
4. Replace the `buffer` item at `idxToRemove` with null, return removed item.

*/

class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = new Array(bufferSize).fill(null);
    this.history = [];
  }

  enqueue(item) {
    if (this.buffer.filter(item => item).length === this.bufferSize) {
      this.dequeue();
    }

    let emptySlot;
    let latestIdx = this.buffer.indexOf(this.history[this.history.length - 1]);

    if (latestIdx === -1) {
      emptySlot = 0;
    } else {
      emptySlot = this.findEmptySlot(latestIdx) || this.findEmptySlot(0);
    }

    this.buffer[emptySlot] = item;
    this.addToHistory(item);
  }

  addToHistory(item) {
    this.history.push(item);
    if (this.history.length > this.bufferSize) this.history.shift();
  }

  findEmptySlot(startIdx) {
    for (let idx = startIdx; idx < this.buffer.length; idx++) {
      if (this.buffer[idx] === null) return idx;
    }
  }

  dequeue() {
    if (this.buffer.filter(item => item).length === 0) return null;
    const idxToRemove = this.buffer.indexOf(this.history[0]);
    this.history.shift();
    return this.buffer.splice(idxToRemove, 1, null)[0];
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);