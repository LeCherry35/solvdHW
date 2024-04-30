// Task 1: Advanced Array Filtering
function customFilterUnique(array, callback) {
  const uniqVals = new Set(); // set for unique callback function call results
  const res = [];

  array.forEach((item) => {
    const value = callback(item);

    if (!uniqVals.has(value)) {
      uniqVals.add(value);
      res.push(item);
    }
  });

  return res;
}
const data = [
  { id: 1, num: 2 },
  { id: 2, num: 3 },
  { id: 3, num: 2 },
  { id: 4, num: 1 },
  { id: 5, num: 4 },
  { id: 6, num: 4 },
];

const filterCallback = (item) => item.num + 1;

console.log(customFilterUnique(data, filterCallback));

//  Task 2: Array Chunking

function chunkArray(arr, chunkSize = 3) {
  //use default chunk value to measure perfomance in task 5
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const res = [];
  let currentIndex = 0;

  while (currentIndex < arr.length) {
    res.push(arr.slice(currentIndex, currentIndex + chunkSize));
    currentIndex += chunkSize;
  }

  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunkArray(arr, 2));

// Task 3: Array Shuffling

function customShuffle(array) {
  const shuffledArray = arr.slice(); // make a copy of the original array

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i (inclusive)
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ]; // swap elements
  }

  return shuffledArray;
}

console.log(customShuffle(arr));

// Task 4: Array Intersection and Union

function getArrayIntersection(array1, array2) {
  const set = new Set(array1);
  return array2.filter((item) => set.has(item));
}

console.log(getArrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

function getArrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(getArrayUnion([1, 2, 2, 3, 4], [3, 4, 5, 6]));

// Task 5: Array Performance Analysis

function measureArrayPerformance(func, arr) {
  const startTime = performance.now();
  func(arr);
  const endTime = performance.now();
  const executionTime = endTime - startTime; // calculate the time of execution
  return executionTime;
}

const mapPerformance = measureArrayPerformance(
  (arr) => arr.map((el) => el + 1),
  arr
);

console.log("map performance:", mapPerformance);

const forEachPerformance = measureArrayPerformance(
  (arr) => arr.forEach((el) => el + 1),
  arr
);

console.log("forEach performance", forEachPerformance);

const reducePerformance = measureArrayPerformance(
  (arr) => arr.reduce((acc, curVal) => acc + curVal, 0),
  arr
);

console.log("reduce performance", reducePerformance);

const chunkArrayPerformance = measureArrayPerformance(chunkArray, arr);

console.log("chunkArray performance:", chunkArrayPerformance);

const customShufflePerformance = measureArrayPerformance(customShuffle, arr);

console.log("customShuffle performance:", customShufflePerformance);
