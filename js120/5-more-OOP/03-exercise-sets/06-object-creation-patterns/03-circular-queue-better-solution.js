// Superior solution by Alexander Kiselev:
class CircularQueue {
  constructor(size) {
    this.data = [];
    this.size = size;
  }

  enqueue(element) {
    this.data.push(element);
    if (this.data.length > this.size) this.data.shift();
  }

  dequeue() {
    return this.data.shift() || null;
  }
}

// Not sure if it's actually better: it's more concise, and it does get the
// desired ouput of the test cases, but it doesn't maintain the queues as
// shown in the table in the exercise.

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
console.log(queue.data);

queue.enqueue(2);
console.log(queue.data);

console.log(queue.dequeue() === 1);
console.log(queue.data);

queue.enqueue(3);
console.log(queue.data);

queue.enqueue(4);
console.log(queue.data);

console.log(queue.dequeue() === 2);
console.log(queue.data);

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