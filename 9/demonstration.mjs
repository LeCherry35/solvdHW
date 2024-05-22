import { Stack, MinMaxStack } from './dataStructures/stack.mjs';
import { Queue } from './dataStructures/queue.mjs';
import { LinkedList } from './dataStructures/linkedList.mjs';
import { Graph } from './dataStructures/graph.mjs';
import { BinaryTree } from './dataStructures/binaryTree.mjs';

// Create a Stack instance and perform basic operations
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element after pushes:", stack.peek()); // Output: 30
console.log("Element popped:", stack.pop()); // Output: 30
console.log("Top element after pop:", stack.peek()); // Output: 20

// Create a MinMaxStack instance and perform operations to get min and max values
const minMaxStack = new MinMaxStack();
minMaxStack.push(5);
minMaxStack.push(1);
minMaxStack.push(10);
console.log("Current min:", minMaxStack.getMin()); // Output: 1
console.log("Current max:", minMaxStack.getMax()); // Output: 10
minMaxStack.pop();
console.log("Min after pop:", minMaxStack.getMin()); // Output: 1
console.log("Max after pop:", minMaxStack.getMax()); // Output: 5


// Create a Queue instance and perform basic operations
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front element after enqueues:", queue.peek()); // Output: 10
console.log("Element dequeued:", queue.dequeue()); // Output: 10
console.log("Front element after dequeue:", queue.peek()); 

// Create a LinkedList instance and perform basic operations
const linkedList = new LinkedList();
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
console.log("Search 20 in list:", linkedList.search(20)); // Output: true
linkedList.delete(20);
console.log("Search 20 after delete:", linkedList.search(20)); // Output: false

// Demonstrate cycle detection
linkedList.insert(40);
linkedList.head.next.next.next = linkedList.head.next; // Creating a cycle
console.log("Cycle detected:", linkedList.hasCycle()); // Output: true
linkedList.head.next.next.next = null; // Breaking the cycle
console.log("Cycle detected after breaking:", linkedList.hasCycle()); // Output: false

// Create a Graph instance and perform basic operations
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// Perform depth-first search (DFS)
console.log("Depth-First Search starting from A:");
graph.depthFirstSearch('A'); // Output: A, B, D, C (order may vary)

// Perform breadth-first search (BFS)
console.log("Breadth-First Search starting from A:");
graph.breadthFirstSearch('A'); // Output: A, B, C, D

// Find shortest path using BFS
console.log("Shortest path from A to D using BFS:");
console.log(graph.findShortestPathBFS('A', 'D')); // Output: ['A', 'B', 'D'] or ['A', 'C', 'D']

// Assume graph.findShortestPathDijkstra has been implemented properly with weights
console.log("Shortest path from A to D using Dijkstra:");
console.log(graph.findShortestPathDijkstra('A', 'D')); // Output: ['A', 'C', 'D'] or any other valid shortest path

// Create a BinaryTree instance and perform basic operations
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);

// Perform tree traversals
console.log("In-order traversal:");
binaryTree.inOrderTraversal(); // Output: 2, 5, 7, 10, 12, 15, 20
console.log("Pre-order traversal:");
binaryTree.preOrderTraversal(); // Output: 10, 5, 2, 7, 15, 12, 20
console.log("Post-order traversal:");
binaryTree.postOrderTraversal(); // Output: 2, 7, 5, 12, 20, 15, 10

// Check if the tree is a BST
console.log("Is the tree a BST?", binaryTree.isBST()); // Output: true