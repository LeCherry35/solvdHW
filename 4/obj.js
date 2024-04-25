// Task 1: Object Property Manipulation
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

Object.keys(person).forEach((key) => {
  Object.defineProperty(person, key, {
    writable: false, // make all properties read-only and non-writable
  });
});

person.updateInfo = function (newInfo) {
  Object.keys(newInfo).forEach((key) => {
    if (this.hasOwnProperty(key)) {
      Object.defineProperty(this, key, {
        value: newInfo[key],
        writable: false,
        configurable: false,
      });
    }
  });
};

// create a non-enumerable and non-configurable property called address
Object.defineProperty(person, "address", {
  value: {},
  enumerable: false,
  configurable: false,
});

console.log(person.firstName);
person.updateInfo({ firstName: "Jane", age: 32 });
console.log(person.firstName);
person.address.city = "New York";
console.log(person.address.city);

// Task 2: Object Property Enumeration and Deletion

const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

// make price and quantity non-enumerable and non-writable
Object.defineProperties(product, {
  price: { enumerable: false, writable: false },
  quantity: { enumerable: false, writable: false },
});

function getTotalPrice(productObj) {
  const priceDescriptor = Object.getOwnPropertyDescriptor(productObj, "price");
  const quantityDescriptor = Object.getOwnPropertyDescriptor(
    productObj,
    "quantity"
  );

  return priceDescriptor.value * quantityDescriptor.value;
}

function deleteNonConfigurable(obj, propName) {
  const propDescriptor = Object.getOwnPropertyDescriptor(obj, propName);

  if (!propDescriptor) {
    throw new Error(`Property '${propName}' does not exist in the object.`);
  }

  if (!propDescriptor.configurable) {
    throw new Error(`Cannot delete non-configurable property '${propName}'.`);
  }

  delete obj[propName];
}

console.log(getTotalPrice(product));
deleteNonConfigurable(product, "name");
deleteNonConfigurable(product, "price");

// Task 3: Object Property Getters and Setters
const bankAccount = {
  balance: 1000,

  get formattedBalance() {
    return `$${this.balance}`;
  },

  set setBalance(newBalance) {
    this.balance = newBalance;
  },

  transfer(targetAccount, amount) {
    if (this.balance >= amount) {
      this.setBalance = this.balance - amount;
      targetAccount.setBalance = targetAccount.balance + amount;
    } else {
      throw new Error("Insufficient balance for transfer.");
    }
  },
};

console.log(bankAccount.formattedBalance);
bankAccount.setBalance = 1500;
console.log(bankAccount.formattedBalance);

const targetAccount = {
  balance: 500,
  get formattedBalance() {
    return `$${this.balance}`;
  },
  set setBalance(newBalance) {
    this.balance = newBalance;
  },
};

bankAccount.transfer(targetAccount, 300);
console.log(bankAccount.formattedBalance);
console.log(targetAccount.formattedBalance);
// bankAccount.transfer(targetAccount, 2300);

// Task 4: Advanced Property Descriptors
function createImmutableObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const immutableObj = {};

  Object.keys(obj).forEach((key) => {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (
      propertyDescriptor &&
      propertyDescriptor.value &&
      typeof propertyDescriptor.value === "object"
    ) {
      immutableObj[key] = createImmutableObject(propertyDescriptor.value); // handle nested structures using recursion
    } else {
      Object.defineProperty(immutableObj, key, {
        value: obj[key],
        writable: false,
        enumerable: true,
        configurable: false,
      });
    }
  });

  return immutableObj;
}

const personImmutable = createImmutableObject(person);

personImmutable.firstName = "Kira";
console.log(personImmutable.firstName);

//Task 5: Object Observation

function observeObject(obj, func) {
  return new Proxy(obj, {
    get(target, property, receiver) { // intercept property accessing
      func(property,action = 'get'); // call function
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) { // intercept property modifying
      func(property, action = 'set');
      return Reflect.set(target, property, value, receiver);
    },
  });
}

const observedPerson = observeObject(person, (property, action) => {
  console.log(`Property '${property}' was ${action}`);
});

console.log(observedPerson.firstName);
observedPerson.age = 32;

//Task 6: Object Deep Cloning

function deepCloneObject(obj, visited = new Map()) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // to handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // create a new object or array based on the input object's type
  const newObj = Array.isArray(obj) ? [] : {};

  // store the new object in the visited map to handle circular references
  visited.set(obj, newObj);

  // iterate through the object's keys and deep clone each property using recursion
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepCloneObject(obj[key], visited);
    }
  }

  return newObj;
}

const obj = {
  a: 1,
  b: [2, 3],
  c: { d: 4 },
};

obj.circ = obj;

console.log(deepCloneObject(obj));

//Task 7: Object Property Validation

function validateObject(obj, schema) {
  for (let key in schema) {
    // check if the property exists in the object
    if (!obj.hasOwnProperty(key)) {
      return false;
    }

    // check if the property type matches
    const expectedType = schema[key].type;
    if (typeof obj[key] !== expectedType) {
      return false;
    }

    // check additional validation rules if there are any
    if (schema[key].validator) {
      if (!schema[key].validator(obj[key])) {
        return false;
      }
    }
  }

  return true;
}

const schema = {
  name: { type: "string" },
  age: { type: "number" },
  email: { type: "string", validator: (value) => value.includes("@") },
};

const obj1 = { name: "John", age: 30, email: "john@example.com" };
const obj2 = { name: "Jack", age: "30", email: "john@example.com" };
const obj3 = { name: "Jane", age: 30, email: "invEmail" };

console.log(validateObject(obj1, schema));
console.log(validateObject(obj2, schema));
console.log(validateObject(obj3, schema));
