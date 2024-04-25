function calculateDiscountedPrice(prodArr, discount) {
  //   if (typeof discount === "number" && !Number.isNaN(discount)) { // if we need to make sure correct discount is provided
  return prodArr.map((prod) => ({
    ...prod, //spread all remaining properties of product
    price: (prod.price * (100 - discount)) / 100,
  }));
  //   } else throw new Error("Discount is not a number");
}

console.log("calculateDiscountedPrice");
console.log(
  calculateDiscountedPrice(
    [
      { a: 1, price: 100 },
      { a: 2, price: 100 },
      { b: 1, price: 200 },
    ],
    50
  )
);

function calculateTotalPrice(prodArr) {
  let totalPrice = 0;
  prodArr.map((prod) => (totalPrice += prod.price));
  return totalPrice;
}

console.log("calculateTotalPrice");
console.log(
  calculateTotalPrice(
    [
      { a: 1, price: 100 },
      { a: 2, price: 100 },
      { b: 1, price: 200 },
    ],
    50
  )
);

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

console.log("getFullName");
console.log(getFullName({ a: 12, firstName: "Bog", lastName: "Dan" }));

function getWordsOfText(text) {
  // make all words lowercase
  //split by non-letter charectars and word bounds
  return text.toLowerCase().split(/\b\W+\b/);
}

function filterUniqueValues(arr) {
  //make set to filter unique values and convert back to array
  return [...new Set(arr)];
}

function sortAlphabetically(arr) {
  // sort alphabetically
  return arr.sort();
}

function filterUniqueWords(text) {
  if (typeof text === "string")
    return sortAlphabetically(filterUniqueValues(getWordsOfText(text)));
  else throw new Error("input must be text");
}

console.log("filterUniqueWords");
console.log(
  filterUniqueWords(
    "with With this scale of innovation, cloud native needs to keep evolving to be at the cutting edge"
  )
);

function getGrades(students) {
  return students.flatMap((students) => students.grades);
}

function getAverage(arr) {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}
function getAverageGrade(students) {
  students.forEach((student) => {
    student.grades.forEach((grade) => {
      if (typeof grade !== "number")
        throw new Error("grades must be numbers array");
    });
  });
  return getAverage(getGrades(students));
}

console.log("getAverageGrade");
console.log(
  getAverageGrade([
    { name: "Alice", grades: [1, 2, 3] },
    { name: "Bob", grades: [3, 2, 1] },
    { name: "Charlie", grades: [1, 2, 3] },
  ])
);

function createCounter() {
  let count = 0; // initialize count within the closure

  const counter = () => {
    count++; // increment count on each call
    return count; // return the updated count
  };

  return counter; // return the closure
}

console.log("createCounter");
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

function repeatFunction(func, times) {
  if (times < 0) {
    return function (...args) {
      let stop = false;
      const intId = setInterval(() => {
        //invoke function with setinterval and get interval id
        if (stop) {
          clearInterval(intId); //mechanism to stop invoking
          return;
        }
        func(...args);
      }, 0);
      return () => {
        // inside function returns function that activates stopping
        stop = true;
      };
    };
  } else
    return function (...args) {
      for (let i = 0; i < times; i++) {
        func(...args);
      }
    };
}

console.log("repeatFunction");
const rep = repeatFunction((a) => console.log("@@@" + a), 3);
rep("+");
// const repInf = repeatFunction((a) => console.log("###" + a), -1);
// const stop = repInf("?");
// setTimeout(() => stop(), 500);

function calculateFactorial(num, res = 1) {
  if (num === 0) return res; // termination condition
  else {
    return calculateFactorial(num - 1, num * res);
  }
}

console.log("calculateFactorial");
console.log(calculateFactorial(3));

function power(num, exp, res = num) {
  if (exp === 1) return res; // termination condition
  else {
    return power(num, exp - 1, res * num);
  }
}
console.log("power");
console.log(power(5, 4));

function lazyMap(arr, func) {
  let i = 0;
  return {
    next: function () {
      if (i < arr.length) {
        const res = func(arr[i]);
        i++;
        return { value: res, done: false };
      } else {
        // i = 0 //uncomment to make generator count next loop from the starting index
        return { value: null,done: true };
      }
    },
  };
}

const q = lazyMap([1, 2, 3, 4], (i) => i + 1);

console.log("lazyMap");
console.log(q.next());
console.log(q.next());
console.log(q.next());
console.log(q.next());
console.log(q.next());
console.log(q.next());

function fibonacciGenerator() {
  let prev = 0;
  let curr = 1; // we need variables to make closure  in returning function

  return {
    next: () => {
      const next = prev + curr;
      prev = curr;
      curr = next;
      return {value:curr, done: false};
    },
  };
}

console.log("fibonacciGenerator");
const getFibonacciNum = fibonacciGenerator();
console.log(getFibonacciNum.next());
console.log(getFibonacciNum.next());
console.log(getFibonacciNum.next());
console.log(getFibonacciNum.next());
console.log(getFibonacciNum.next());
console.log(getFibonacciNum.next());
console.log(getFibonacciNum.next());
