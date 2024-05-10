// Task 1: Implement `promiseAll` Function

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let resolved = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolved++;

          if (resolved === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promiseAll(promises)
  .then((results) => {
    console.log("All promises resolved:", results); 
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

//   Task 2: Implement `promiseAllSettled` Function

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
    let settled = 0;

    promises.forEach((promise, index) => {
      results[index] = {};
      Promise.resolve(promise)
        .then((value) => {
          results[index].value = value;
          results[index].status = "fulfilled";
          settled++;
          if (settled === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results[index].value = error;
          results[index].status = "rejected";
          settled++;
          if (settled === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

const promises2 = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3),
];

promiseAllSettled(promises2).then((results) => {
  console.log("All promises settled:", results);
});

// Task 3: Implement Chaining of Promises as a Separate Function

function chainPromises(funcArr) {
  return new Promise((resolve, reject) => {
    let next = Promise.resolve();
    for (const func of funcArr) {
      next = next.then(func);
    }
    next.then(resolve).catch(reject);
  });
}

function asyncFunction1() {
  return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
  .then((result) => {
    console.log("Chained promise result:", result);
  })
  .catch((error) => {
    console.error("Chained promise error:", error);
  });

//   Task 4: Implement `promisify` Function

  function promisify(callbackStyleFunction) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        callbackStyleFunction(...args, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
  }
  
  function callbackStyleFunction(value, callback) {
    setTimeout(() => {
      if (value > 0) {
        callback(null, value * 2);
      } else {
        callback("Invalid value", null);
      }
    }, 1000);
  }
  
  const promisedFunction = promisify(callbackStyleFunction);
  
  promisedFunction(3)
    .then(result => {
      console.log("Promised function result:", result);
    })
    .catch(error => {
      console.error("Promised function error:", error);
    });