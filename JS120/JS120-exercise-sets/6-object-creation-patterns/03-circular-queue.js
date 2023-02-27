// A circular queue is a collection of objects stored in a buffer that is
// treated as though it is connected end-to-end in a circle. When an
// object is added to this circular queue, it is added to the position
// that immediately follows the most recently added object, while
// removing an object always removes the object that has been in the
// queue the longest.

// This works as long as there are empty spots in the buffer. If the
// buffer becomes full, adding a new object to the queue requires getting
// rid of an existing object; with a circular queue, the object that has
// been in the queue the longest is discarded and replaced by the new
// object.

// Your task is to write a CircularQueue class that implements a circular
// queue for arbitrary objects. The class should obtain the buffer size
// with an argument provided to the constructor, and should provide the
// following methods:

// - enqueue to add an object to the queue.
// - dequeue to remove (and return) the oldest object in the queue.
//   It should return null if the queue is empty.

// You may assume that none of the values stored in the queue are null
// (however, null may be used to designate empty spots in the buffer).

// Assuming we have a circular queue with room for 3 objects, the
// circular queue looks and acts like this:

// . . .  all positions empty
// 1 . .  add 1 to the queue
// 1 2 .  add 2 to the queue
// . 2 .  remove oldest item
// . 2 3  add 3 to the queue
// 4 2 3  add 4 to the queue, queue is now full
// 4 . 3  remove oldest item from queue
// 4 5 3  add 5 to the queue, queue is now full
// 4 5 6  add 6 to the queue, replaces oldest element
// 7 5 6  add 7 to the queue, replaces oldest element
// 7 . 6  remove oldest item from queue
// . . .  remove oldest item from queue
// . . .  remove non-existent item from queue (nil)

// SOLUTION
// =====================================================================

// Methods
// enqueue: - add item to the position that immediately follows the most
//            recently added object.
//          - if queueu is full, remove the oldest object in the queue.
// dequeue: - remove (and return) the oldest object in the queue.
//          - return null if the queue is empty.

class CircularQueue {
  constructor(length) {
    this.queue = new Array(length).fill(null);
    this.newestIdx = 0;       // keep track of newest item
    this.oldestIndexes = [];  // keep track of oldest item
  }

  enqueue(num) {
    // initialize variable itemPlaced with value of false
    // iterate through queue, starting at newestIdx, stopping before newestIdx:
    //   - if value at current idx is null:
    //       - add num at this idx
    //       - assign this.newestIdx to idx
    //       - assign itemPlace to true
    //       - add idx to this.oldestIndexes
    //       - quit the loop
    // if itemPlaced is false:
    //   - call dequeue
    //   - call enqueue again

    let startIdx = this.newestIdx;
    let emptySpotIdx = this.findEmptySpot(startIdx);

    if (emptySpotIdx !== undefined) {
      this.addToQueue(num, emptySpotIdx);
      this.addToOldest(emptySpotIdx);
    } else {
      this.dequeue();
      this.enqueue(num);
    }
  }

  addToOldest(idx) {
    this.oldestIndexes.push(idx);
  }

  findEmptySpot(idx) {
    let emptySpotIdx;

    do {
      if (this.queue[idx] === null) {
        emptySpotIdx = idx;
        break;
      }

      if (idx === this.queue.length - 1) {
        idx = 0;
      } else {
        idx += 1;
      }
    } while (idx !== this.newestIdx);

    return emptySpotIdx;
  }

  addToQueue(num, idx) {
    this.queue[idx] = num;
    this.newestIdx = idx;
  }

  dequeue() {
    // - find oldest: first item of this.oldestIndexes
    // - remove this index number from this.oldestIndexes
    // - remove the item at this index from this.queue, return it

    let oldest = this.oldestIndexes[0];
    this.oldestIndexes.shift();
    return this.queue.splice(oldest, 1, null)[0];
  }
}

// Examples:
let queue = new CircularQueue(3);
console.log(queue.dequeue() === null); // true

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1); // true

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2); // true

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5); // true
console.log(queue.dequeue() === 6); // true
console.log(queue.dequeue() === 7); // true
console.log(queue.dequeue() === null); // true

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null); // true

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1); // true

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2); // true

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4); // true
console.log(anotherQueue.dequeue() === 5); // true
console.log(anotherQueue.dequeue() === 6); // true
console.log(anotherQueue.dequeue() === 7); // true
console.log(anotherQueue.dequeue() === null); // true
