export class Stack {
  constructor() {
    // Initialize an empty array to store stack elements.
    this.items = [];
  }

  // Method to add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack.
  // Returns null if the stack is empty.
  pop() {
    if (this.isEmpty()) {
      return null; // Return null if there are no elements to pop.
    }
    return this.items.pop(); // Remove and return the top element.
  }

  // Method to view the top element of the stack without removing it.
  // Returns null if the stack is empty.
  peek() {
    if (this.isEmpty()) {
      return null; // Return null if there are no elements to peek.
    }
    return this.items[this.items.length - 1]; // Return the top element.
  }

  // Method to check if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }
}

// MinMaxStack class represents a stack data structure that supports retrieving the minimum and maximum values in constant time.
// MinMaxStack extends the Stack class and adds functionality to track minimum and maximum elements
export class MinMaxStack extends Stack {
  constructor() {
    super(); // Call the constructor of the parent class (Stack)
    this.minStack = []; // Initialize an empty array to store minimum elements
    this.maxStack = []; // Initialize an empty array to store maximum elements
  }

  // Override the push method to update minStack and maxStack accordingly
  push(element) {
    if (this.isEmpty()) {
      // If stack is empty
      this.minStack.push(element); // Add element to minStack
      this.maxStack.push(element); // Add element to maxStack
    } else {
      let currentMin = this.getMin(); // Get current minimum element in the stack
      let currentMax = this.getMax(); // Get current maximum element in the stack
      this.minStack.push(Math.min(currentMin, element)); // Add the smaller of currentMin and element to minStack
      this.maxStack.push(Math.max(currentMax, element)); // Add the larger of currentMax and element to maxStack
    }
    super.push(element); // Call the push method of the parent class (Stack) to add the element to the stack
  }

  // Override the pop method to update minStack and maxStack accordingly
  pop() {
    if (this.isEmpty()) {
      // If stack is empty
      return "Underflow"; // Return Underflow
    }
    this.minStack.pop(); // Remove the top element from minStack
    this.maxStack.pop(); // Remove the top element from maxStack
    return super.pop(); // Call the pop method of the parent class (Stack) to remove and return the element from the stack
  }

  // Get the minimum element in the stack
  getMin() {
    if (this.isEmpty()) {
      // If stack is empty
      return "No elements in Stack"; // Return No elements in Stack
    }
    return this.minStack[this.minStack.length - 1]; // Return the top element of minStack
  }

  // Get the maximum element in the stack
  getMax() {
    if (this.isEmpty()) {
      // If stack is empty
      return "No elements in Stack"; // Return No elements in Stack
    }
    return this.maxStack[this.maxStack.length - 1]; // Return the top element of maxStack
  }
}
