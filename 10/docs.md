# FNV Hash Function And Hash Table With Separate Chaining

The HashTable class implements a hash table with FNV hashing function. It uses separate chaining for collision resolution. It includes methods for inserting, retrieving, and deleting key-value pairs.

+ [FNV Hash Function](#hashfn)
+ [Hash Table](#hashtbl)

## FNV Hash Function <a name = "hashfn"><a>
We start with an initial hash value, known as the offset basis. For 32-bit FNV-1a, the offset basis is 2166136261 (in hexadecimal: 0x811c9dc5). Then for each character in the string key, convert it to its ASCII value and perform the following steps:
1.XOR the hash with the ASCII value of the character.
2.Multiply the hash value by a prime number known as the FNV prime. For 32-bit FNV-1a, the prime is 16777619 (in hexadecimal: 0x01000193).

The time complexity is O(k) where `k` is the length of the key, as it processes each character of the key once, this can be treated as O(1) due to the constant time complexity for typical short keys

## Hash Table <a name = "hashtbl"><a>

**Constructor**

```
new HashTable()
```

**Methods:**

- `set(key, value)`
  Adds a key-value pair to the hash table.
Computing the index using `_hash` can be treated as O(1).
Average Case Time Complexity for insertion is O(1), assuming a good distribution of hash values and a load factor that keeps the average linked list length short. In the worst case, if many keys hash to the same index, the time complexity could degrade to O(n), where `n` is the number of elements in the hash table.

Parameters:
key (string): The key for the value.
value (\*): The value to store.

```
set(key, value)
```

- `get(key)`
  Retrieves the value associated with a key from the hash table.
Computing the index using `_hash` can be treated as O(1).
On average, retrieving a value is O(1) but in the worst case, if all keys hash to the same index, it may require traversing a linked list of length n, making the time complexity O(n).

Parameters:
key (string): The key to search for.
Returns:
The value associated with the key, or undefined if not found.

```
get(key)
```

- `delete(key)`
  Removes a key-value pair from the hash table.
Computing the index using `_hash` can be treated as O(1).
On average, deleting a key-value pair is O(1) but in the worst case, if all keys hash to the same index, it may require traversing a linked list of length n, making the time complexity O(n).

Parameters:
key (string): The key of the pair to remove.
Returns:
true if the pair was removed, false if the key was not found.

```
delete(key)
```
