// TreeNode class represents a node in a binary tree.
class TreeNode {
  constructor(value) {
    this.value = value; // The value stored in the node.
    this.left = null; // Reference to the left child node.
    this.right = null; // Reference to the right child node.
  }
}

// BinaryTree class represents a binary tree structure.
export class BinaryTree {
  constructor() {
    this.root = null; // The root node of the binary tree.
  }

  // Method to insert a value into the binary tree.
  insert(value) {
    const newNode = new TreeNode(value); // Create a new node with the given value.
    if (this.root === null) {
      this.root = newNode; // If the tree is empty, set the new node as the root.
      return;
    }

    let queue = [this.root]; // Initialize a queue with the root node for level-order traversal.
    while (queue.length) {
      let current = queue.shift(); // Dequeue the front node.

      if (!current.left) {
        current.left = newNode; // If left child is null, insert the new node here.
        return;
      } else {
        queue.push(current.left); // Otherwise, enqueue the left child.
      }

      if (!current.right) {
        current.right = newNode; // If right child is null, insert the new node here.
        return;
      } else {
        queue.push(current.right); // Otherwise, enqueue the right child.
      }
    }
  }

  // Method to search for a value in the binary tree.
  search(value) {
    if (this.root === null) {
      return false; // If the tree is empty, return false.
    }

    let queue = [this.root]; // Initialize a queue with the root node for level-order traversal.
    while (queue.length) {
      let current = queue.shift(); // Dequeue the front node.
      if (current.value === value) {
        return true; // If the current node's value matches the search value, return true.
      }
      if (current.left) {
        queue.push(current.left); // Enqueue the left child if it exists.
      }
      if (current.right) {
        queue.push(current.right); // Enqueue the right child if it exists.
      }
    }
    return false; // If the value is not found, return false.
  }

  // Method for in-order traversal of the binary tree.
  inOrderTraversal(node = this.root) {
    if (node) {
      this.inOrderTraversal(node.left); // Traverse the left subtree.
      console.log(node.value); // Visit the current node.
      this.inOrderTraversal(node.right); // Traverse the right subtree.
    }
  }

  // Method for pre-order traversal of the binary tree.
  preOrderTraversal(node = this.root) {
    if (node) {
      console.log(node.value); // Visit the current node.
      this.preOrderTraversal(node.left); // Traverse the left subtree.
      this.preOrderTraversal(node.right); // Traverse the right subtree.
    }
  }

  // Method for post-order traversal of the binary tree.
  postOrderTraversal(node = this.root) {
    if (node) {
      this.postOrderTraversal(node.left); // Traverse the left subtree.
      this.postOrderTraversal(node.right); // Traverse the right subtree.
      console.log(node.value); // Visit the current node.
    }
  }

  // Method to determine if the binary tree is a binary search tree (BST).
  isBST() {
    return this._isBST(
      this.root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  }

  // Helper method to check if the binary tree is a BST.
  _isBST(node, min, max) {
    // Base case: an empty node is a BST.
    if (node === null) {
      return true;
    }

    // If the current node's value does not satisfy the BST property, return false.
    if (node.value <= min || node.value >= max) {
      return false;
    }

    // Recursively check the left and right subtrees with updated ranges.
    return (
      this._isBST(node.left, min, node.value) &&
      this._isBST(node.right, node.value, max)
    );
  }
}
