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

A stack is a collection of elements with two principal operations: push (add an element to the top) and pop (remove the top element). It follows the Last-In-First-Out (LIFO) principle.

**Constructor:**

```
new Stack()
```

Initializes an empty stack.

**Methods:**

- `push(element)`: Adds an element to the top of the stack. Time Complexity: O(1)
- `pop()`: Removes and returns the top element from the stack. Returns null if the stack is empty. Time Complexity: O(1)
- `peek()`: Returns the top element without removing it. Returns null if the stack is empty. Time Complexity: O(1)

### MinMaxStack

Extends a basic stack to allow constant time retrieval of the minimum and maximum values.

**Constructor:**

```
new MinMaxStack()
```

Initializes an empty MinMaxStack.

**Methods:**

- `push(element)`: Adds an element to the top of the stack and updates the min and max stacks. Time Complexity: O(1)
- `pop()`: Removes and returns the top element from the stack and updates the min and max stacks. Returns "Underflow" if the stack is empty. Time Complexity: O(1)
- `getMin()`: Returns the minimum element in the stack. Returns "No elements in Stack" if the stack is empty. Time Complexity: O(1)
- `getMax()`: Returns the maximum element in the stack. Returns "No elements in Stack" if the stack is empty. Time Complexity: O(1)

## Queue <a name = "queue"></a>

A queue is a collection of elements that supports two principal operations: enqueue (add an element to the end) and dequeue (remove the first element). It follows the First-In-First-Out (FIFO) principle.

**Constructor:**

```
new Queue()
```

Initializes an empty queue.

**Methods:**

- `enqueue(element)`: Adds an element to the end of the queue. Time Complexity: O(1)
- `dequeue()`: Removes and returns the first element of the queue. Returns null if the queue is empty. Time Complexity: O(n) due to the shift operation on the array
- `peek()`: Returns the first element without removing it. Returns null if the queue is empty. Time Complexity: O(1)

## BinaryTree <a name = "bintree"></a>

A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.

**Constructor:**

```
new BinaryTree()
```

Initializes an empty binary tree.

**Methods:**

- `insert(value)`: Inserts a value into the binary tree. Time Complexity: O(n)
- `search(value)`: Searches for a value in the binary tree. Returns true if the value is found, false otherwise. Time Complexity: O(n)
-Start from the root and compare the value with the current node.
-Traverse left or right based on the comparison.
- `inOrderTraversal(node)`: Performs in-order traversal of the binary tree. Time Complexity: O(n)
-Traverse the left subtree.
-Visit the node.
-Traverse the right subtree.
- `preOrderTraversal(node)`: Performs pre-order traversal of the binary tree. Time Complexity: O(n)
-Visit the node.
-Traverse the left subtree.
-Traverse the right subtree.
- `postOrderTraversal(node)`: Performs post-order traversal of the binary tree. Time Complexity: O(n)
-Traverse the left subtree.
-Traverse the right subtree.
-Visit the node.
- `isBST()`: Checks if the binary tree is a binary search tree (BST).Uses an in-order traversal to check if the nodes are in ascending order.Time Complexity: O(n)

## Graph <a name = "graph"></a>

A graph is a collection of nodes (vertices) and edges connecting pairs of nodes. It can represent various systems like social networks, transportation networks, etc.

**Constructor:**

```
new Graph()
```

Initializes an empty graph.

**Methods:**

- `addVertex(vertex)`: Adds a vertex to the graph. Time Complexity: O(1)
- `addEdge(vertex1, vertex2)`: Adds an edge between two vertices in the graph. Time Complexity: O(1)
- `depthFirstSearch(start)`: Performs depth-first search (DFS) starting from a given vertex.Use recursion to explore as far down a branch as possible before backtracking.Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges
- `breadthFirstSearch(start)`: Performs breadth-first search (BFS) starting from a given vertex.Use a queue to explore the neighbor nodes level by level. Time Complexity: O(V + E)
- `findShortestPathBFS(start, end)`: Finds the shortest path between two vertices using BFS. Returns the path as an array of vertices or null if no path is found. Time Complexity: O(V + E)
- `findShortestPathDijkstra(start, end)`: Finds the shortest path between two vertices using Dijkstra's algorithm. Returns the path as an array of vertices or null if no path is found. Uses a priority queue to explore the shortest path in a weighted graph.
Time Complexity: O((V + E) log V)

## LinkedList <a name = "linkedlist"></a>

A linked list is a linear data structure where elements are stored in nodes, each containing a value and a reference to the next node. It allows efficient insertion and deletion of elements.

**Constructor:**

```
new LinkedList()
```

Initializes an empty linked list.
**Methods:**

- `insert(value)`: Inserts a value at the end of the linked list. Time Complexity: O(n)
- `delete(value)`: Deletes the first occurrence of a value in the linked list. Time Complexity: O(n)
- `search(value)`: Searches for a value in the linked list. Returns true if the value is found, false otherwise. Time Complexity: O(n)
- `hasCycle()`: Detects if the linked list has a cycle. Returns true if a cycle is detected, false otherwise.Use Floyd’s Cycle-Finding Algorithm (Tortoise and Hare). Time Complexity: O(n)

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
