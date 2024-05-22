# Data Structures and Algorithms Library

## Table of Contents

This library provides implementations of several fundamental data structures and algorithms, including stack, queue, binary tree, graph, and linked list, as well as some advanced features like MinMaxStack.

## Table of Contents

[Stack](#stack)
[Queue](#queue)
[BinaryTree](#bintree)
[Graph](#graph)
[LinkedList](#linkedlist)

## Classes

### Stack <a name = "stack"></a>

A simple stack data structure with basic operations.

**Constructor:**

```
new Stack()
```

Initializes an empty stack.

**Methods:**

- `push(element)`: Adds an element to the top of the stack.
- `pop()`: Removes and returns the top element from the stack. Returns null if the stack is empty.
- `peek()`: Returns the top element without removing it. Returns null if the stack is empty.

### MinMaxStack

A stack data structure that supports retrieving the minimum and maximum values in constant time. Inherits from Stack.

**Constructor:**

```
new MinMaxStack()
```

Initializes an empty MinMaxStack.

**Methods:**

- `push(element)`: Adds an element to the top of the stack and updates the min and max stacks.
- `pop()`: Removes and returns the top element from the stack and updates the min and max stacks. Returns "Underflow" if the stack is empty.
- `getMin()`: Returns the minimum element in the stack. Returns "No elements in Stack" if the stack is empty.
- `getMax()`: Returns the maximum element in the stack. Returns "No elements in Stack" if the stack is empty.

## Queue <a name = "queue"></a>

A simple queue data structure with basic operations.

**Constructor:**

```
new Queue()
```

Initializes an empty queue.

**Methods:**

- `enqueue(element)`: Adds an element to the end of the queue.
- `dequeue()`: Removes and returns the first element of the queue. Returns null if the queue is empty.
- `peek()`: Returns the first element without removing it. Returns null if the queue is empty.

## BinaryTree <a name = "bintree"></a>

A binary tree data structure with basic operations.

**Constructor:**

```
new BinaryTree()
```

Initializes an empty binary tree.

**Methods:**

- `insert(value)`: Inserts a value into the binary tree.
- `search(value)`: Searches for a value in the binary tree. Returns true if the value is found, false otherwise.
- `inOrderTraversal(node)`: Performs in-order traversal of the binary tree.
- `preOrderTraversal(node)`: Performs pre-order traversal of the binary tree.
- `postOrderTraversal(node)`: Performs post-order traversal of the binary tree.
- `isBST()`: Checks if the binary tree is a binary search tree (BST).

## Graph <a name = "graph"></a>

A graph data structure implemented using an adjacency list.

**Constructor:**

```
new Graph()
```

Initializes an empty graph.

**Methods:**

- `addVertex(vertex)`: Adds a vertex to the graph.
- `addEdge(vertex1, vertex2)`: Adds an edge between two vertices in the graph.
- `depthFirstSearch(start)`: Performs depth-first search (DFS) starting from a given vertex.
- `breadthFirstSearch(start)`: Performs breadth-first search (BFS) starting from a given vertex.
- `findShortestPathBFS(start, end)`: Finds the shortest path between two vertices using BFS. Returns the path as an array of vertices or null if no path is found.
- `findShortestPathDijkstra(start, end)`: Finds the shortest path between two vertices using Dijkstra's algorithm. Returns the path as an array of vertices or null if no path is found.

## LinkedList <a name = "linkedlist"></a>

A singly linked list data structure with basic operations.

**Constructor:**

```
new LinkedList()
```

Initializes an empty linked list.
**Methods:**

- `insert(value)`: Inserts a value at the end of the linked list.
- `delete(value)`: Deletes the first occurrence of a value in the linked list.
- `search(value)`: Searches for a value in the linked list. Returns true if the value is found, false otherwise.
- `hasCycle()`: Detects if the linked list has a cycle. Returns true if a cycle is detected, false otherwise.

### Example Usage

```
// Create a new MinMaxStack
const minMaxStack = new MinMaxStack();
minMaxStack.push(3);
minMaxStack.push(5);
console.log(minMaxStack.getMin()); // Output: 3
console.log(minMaxStack.getMax()); // Output: 5

// Create a new Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2

// Create a new BinaryTree
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
console.log(binaryTree.search(5)); // Output: true

// Create a new Graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
graph.depthFirstSearch('A'); // Output: A B

// Create a new LinkedList
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.delete(1);
console.log(linkedList.search(2)); // Output: true
```
