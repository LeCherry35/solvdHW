export class Queue {
  // The constructor initializes the queue with an empty array.
  constructor() {
    this.items = [];
  }

  // The enqueue method adds a new element to the end of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // The dequeue method removes and returns the first element of the queue.
  // If the queue is empty, it returns null.
  dequeue() {
    if (this.isEmpty()) {
      return null; // If queue is empty, return null.
    }
    return this.items.shift(); // Remove and return the first element.
  }

  // The peek method returns the first element of the queue without removing it.
  // If the queue is empty, it returns null.
  peek() {
    if (this.isEmpty()) {
      return null; // If queue is empty, return null.
    }
    return this.items[0]; // Return the first element.
  }

  // Method to check if the queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }
}
