// Node class represents each element in the linked list used for separate chaining.
class Node {
  // Constructor for Node, takes a key, value, and an optional next node (default is null).
  constructor(key, value, next = null) {
    this.key = key; // The key of the key-value pair
    this.value = value; // The value of the key-value pair
    this.next = next; // The next node in the linked list (null if this is the last node)
  }
}

// HashTable class uses an array of linked lists to store key-value pairs.
class HashTable {
  // Constructor for HashTable, takes an optional size (default is 50).
  constructor(size = 50) {
    // Create an array of the specified size and fill it with null values.
    this.buckets = Array(size)
      .fill(null)
      .map(() => null);
    this.size = size; // Store the size of the hash table.
  }

  // FNV hash function to hash keys to an index.
  _hash(key) {
    const FNV_PRIME = 0x01000193; // 16777619, a prime number used in FNV-1a hash function
    const OFFSET_BASIS = 0x811c9dc5; // 2166136261, the initial hash value in FNV

    let hash = OFFSET_BASIS; // Start with the offset basis.

    // Process each character of the key.
    for (let i = 0; i < key.length; i++) {
      hash ^= key.charCodeAt(i); // XOR the hash with the current character code.
      hash = (hash * FNV_PRIME) >>> 0; // Multiply by the FNV prime and ensure it's a 32-bit value.
    }

    // Convert hash to hexadecimal, pad it, and reduce to an index within the table size.
    return hash.toString(16).padStart(8, "0") % this.size;
  }

  // Insert a key-value pair into the hash table.
  set(key, value) {
    const index = this._hash(key); // Compute the index for the key.
    let node = this.buckets[index]; // Get the node at the computed index.

    // If there's no node at this index, insert a new node.
    if (!node) {
      this.buckets[index] = new Node(key, value);
      return;
    }

    // Traverse the linked list at this index.
    while (node) {
      if (node.key === key) {
        node.value = value; // Update the value if the key already exists.
        return;
      }
      if (!node.next) {
        // If at the end of the list, insert a new node.
        node.next = new Node(key, value);
        return;
      }
      node = node.next; // Move to the next node.
    }
  }

  // Retrieve a value by its key from the hash table.
  get(key) {
    const index = this._hash(key); // Compute the index for the key.
    let node = this.buckets[index]; // Get the node at the computed index.

    // Traverse the linked list at this index.
    while (node) {
      if (node.key === key) {
        return node.value; // Return the value if the key is found.
      }
      node = node.next; // Move to the next node.
    }

    // Return undefined if the key is not found.
    return undefined;
  }

  // Delete a key-value pair from the hash table.
  delete(key) {
    const index = this._hash(key); // Compute the index for the key.
    let node = this.buckets[index]; // Get the node at the computed index.
    let prev = null; // To keep track of the previous node.

    // Traverse the linked list at this index.
    while (node) {
      if (node.key === key) {
        if (prev) {
          prev.next = node.next; // If not the first node, link the previous node to the next node.
        } else {
          this.buckets[index] = node.next; // If the first node, set the bucket to the next node.
        }
        return true; // Return true when the key is found and deleted.
      }
      prev = node; // Update the previous node.
      node = node.next; // Move to the next node.
    }

    // Return false if the key is not found.
    return false;
  }
}

const hashTable = new HashTable();

console.log("===== Test Inserting Values =====");
hashTable.set("name", "Alice");
console.log(hashTable.get("name") === "Alice" ? "PASS" : "FAIL"); // Expected output: PASS

hashTable.set("age", 25);
console.log(hashTable.get("age") === 25 ? "PASS" : "FAIL"); // Expected output: PASS

hashTable.set("country", "Wonderland");
console.log(hashTable.get("country") === "Wonderland" ? "PASS" : "FAIL"); // Expected output: PASS

console.log("===== Test Updating Values =====");
hashTable.set("age", 26);
console.log(hashTable.get("age") === 26 ? "PASS" : "FAIL"); // Expected output: PASS

console.log("===== Test Deleting Values =====");
hashTable.delete("country");
console.log(hashTable.get("country") === undefined ? "PASS" : "FAIL"); // Expected output: PASS

console.log("===== Test Handling Collisions =====");
hashTable.set("naem", "Bob"); // assuming 'naem' hashes to the same index as 'name'
console.log(hashTable.get("naem") === "Bob" ? "PASS" : "FAIL"); // Expected output: PASS
console.log(hashTable.get("name") === "Alice" ? "PASS" : "FAIL"); // Expected output: PASS

hashTable.set("name", "Charlie");
hashTable.set("naem", "David");
hashTable.set("emna", "Eve"); // Another string with potentially same hash index

console.log(hashTable.get("name") === "Charlie" ? "PASS" : "FAIL"); // Expected output: PASS
console.log(hashTable.get("naem") === "David" ? "PASS" : "FAIL"); // Expected output: PASS
console.log(hashTable.get("emna") === "Eve" ? "PASS" : "FAIL"); // Expected output: PASS

console.log("===== Test Deleting with Collisions =====");
hashTable.delete("naem");
console.log(hashTable.get("naem") === undefined ? "PASS" : "FAIL"); // Expected output: PASS
console.log(hashTable.get("name") === "Charlie" ? "PASS" : "FAIL"); // Expected output: PASS
console.log(hashTable.get("emna") === "Eve" ? "PASS" : "FAIL"); // Expected output: PASS

console.log("===== Test Deleting Head of Linked List =====");
hashTable.delete("name");
console.log(hashTable.get("name") === undefined ? "PASS" : "FAIL"); // Expected output: PASS
console.log(hashTable.get("emna") === "Eve" ? "PASS" : "FAIL"); // Expected output: PASS
