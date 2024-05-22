class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Method to enqueue a value with a priority.
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort(); // Sort the queue based on priorities.
  }

  // Method to dequeue the value with the highest priority.
  dequeue() {
    return this.values.shift(); // Remove and return the first element.
  }

  // Method to check if the queue is empty.
  isEmpty() {
    return this.values.length === 0;
  }

  // Method to sort the queue based on priorities.
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

export class Graph {
  constructor() {
    // Initialize an empty Map to store the adjacency list of the graph.
    this.adjacencyList = new Map();
  }

  // Method to add a vertex to the graph.
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      // If the vertex does not exist in the adjacency list, add it with an empty array as its value.
      this.adjacencyList.set(vertex, []);
    }
  }

  // Method to add an edge between two vertices in the graph.
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      // If both vertices exist in the adjacency list, add each vertex to the other's adjacency list.
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  // Method to perform a depth-first search (DFS) starting from a given vertex.
  depthFirstSearch(start) {
    const visited = new Set(); // Set to keep track of visited vertices.

    const dfs = (vertex) => {
      if (!vertex) return; // If vertex is null, return.
      visited.add(vertex); // Mark the current vertex as visited.
      console.log(vertex); // Visit the current vertex.

      // Recursively visit all unvisited neighbors.
      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });
    };

    dfs(start); // Start the DFS from the given vertex.
  }

  // Method to perform a breadth-first search (BFS) starting from a given vertex.
  breadthFirstSearch(start) {
    const visited = new Set(); // Set to keep track of visited vertices.
    const queue = [start]; // Queue to manage the vertices to visit next.
    visited.add(start); // Mark the start vertex as visited.

    while (queue.length) {
      const vertex = queue.shift(); // Dequeue the front vertex.
      console.log(vertex); // Visit the current vertex.

      // Visit all unvisited neighbors and add them to the queue.
      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark the neighbor as visited.
          queue.push(neighbor); // Enqueue the neighbor.
        }
      });
    }
  }

  // Method to find the shortest path between two vertices using BFS.
  findShortestPathBFS(start, end) {
    const queue = [[start]]; // Queue to manage the paths.
    const visited = new Set(); // Set to keep track of visited vertices.
    visited.add(start); // Mark the start vertex as visited.

    while (queue.length) {
      const path = queue.shift(); // Dequeue the front path.
      const vertex = path[path.length - 1]; // Get the last vertex in the current path.

      if (vertex === end) {
        return path; // If the end vertex is reached, return the path.
      }

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark the neighbor as visited.
          const newPath = [...path, neighbor]; // Create a new path including the neighbor.
          queue.push(newPath); // Enqueue the new path.
        }
      });
    }

    return null; // If no path is found, return null.
  }

  // Method to find the shortest path between two vertices using Dijkstra's algorithm.
  findShortestPathDijkstra(start, end) {
    const distances = {}; // Object to store the shortest distance to each vertex.
    const previous = {}; // Object to store the previous vertex in the shortest path.
    const pq = new PriorityQueue(); // Priority queue to manage the vertices to be explored.

    this.adjacencyList.forEach((_, vertex) => {
      distances[vertex] = vertex === start ? 0 : Infinity; // Initialize distances.
      pq.enqueue(vertex, distances[vertex]); // Enqueue vertices with their distances.
      previous[vertex] = null; // Initialize previous vertices.
    });

    while (!pq.isEmpty()) {
      const { value: vertex } = pq.dequeue(); // Dequeue the vertex with the shortest distance.

      if (vertex === end) {
        const path = [];
        let current = vertex;

        while (current) {
          path.unshift(current); // Construct the shortest path by tracing previous vertices.
          current = previous[current];
        }

        return path; // Return the shortest path.
      }

      if (vertex || distances[vertex] !== Infinity) {
        this.adjacencyList.get(vertex).forEach((neighbor) => {
          const distance = distances[vertex] + neighbor.weight;

          if (distance < distances[neighbor.node]) {
            distances[neighbor.node] = distance; // Update the shortest distance.
            previous[neighbor.node] = vertex; // Update the previous vertex.
            pq.enqueue(neighbor.node, distance); // Enqueue the neighbor with the updated distance.
          }
        });
      }
    }

    return null; // If no path is found, return null.
  }
}
