// ListNode class represents a node in a linked list.
class ListNode {
  constructor(value) {
    this.value = value; // The value stored in the node.
    this.next = null; // Reference to the next node in the list.
  }
}

// LinkedList class represents a singly linked list.
export class LinkedList {
  constructor() {
    this.head = null; // The head (first node) of the linked list.
  }

  // Method to insert a value at the end of the linked list.
  insert(value) {
    const newNode = new ListNode(value); // Create a new node with the given value.
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head.
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next; // Traverse to the end of the list.
    }
    current.next = newNode; // Set the new node as the next of the last node.
  }

  // Method to delete the first occurrence of a value in the linked list.
  delete(value) {
    if (!this.head) {
      return; // If the list is empty, there is nothing to delete.
    }

    if (this.head.value === value) {
      this.head = this.head.next; // If the head is the node to be deleted, update the head.
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next; // Traverse the list to find the node to delete.
    }

    if (current.next) {
      current.next = current.next.next; // Remove the node by updating the next reference.
    }
  }

  // Method to search for a value in the linked list.
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true; // Return true if the value is found.
      }
      current = current.next; // Traverse to the next node.
    }
    return false; // Return false if the value is not found.
  }

  // Method to detect if the linked list has a cycle.
  hasCycle() {
    let slow = this.head; // Initialize the slow pointer.
    let fast = this.head; // Initialize the fast pointer.

    while (fast && fast.next) {
      slow = slow.next; // Move slow pointer one step.
      fast = fast.next.next; // Move fast pointer two steps.

      if (slow === fast) {
        return true; // Cycle detected if slow and fast pointers meet.
      }
    }

    return false; // No cycle if fast pointer reaches the end of the list.
  }
}
