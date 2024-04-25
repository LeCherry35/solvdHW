export function addValues(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    // only adds numbers
    if(Number.isNaN(num1) || Number.isNaN(num2)) throw new Error("NaN value can't be added")
    //check if there are decimals cause JS cant add decimal numbers correctly
    const dec1 = num1.toString().includes(".")
      ? num1.toString().split(".")[1].length
      : 0;
    const dec2 = num2.toString().includes(".")
      ? num2.toString().split(".")[1].length
      : 0;
    const dec = Math.max(dec1, dec2);
    const multiplier = Math.pow(10, dec); //calculating multiplier to add multiplied numbers without decimal part then divide by multiplier

    return (num1 * multiplier + num2 * multiplier) / multiplier;
  } else throw new Error("This method supports numbers only");
}

export function stringifyValue(val) {
  if (val === null)
    return "null"; // check if value is null cause typeof null === object
  else if (typeof val === "object") return JSON.stringify(val);
  else return String(val);
}

export function invertBoolean(bool) {
  if (typeof bool === "boolean") {
    return !bool;
  } else throw new Error("This method supports booleans only");
}

export function convertToNumber(val) {
  if (val === null) return 0;
  else if (typeof val === "string") {
    if (Number.isNaN(parseFloat(val)))
      throw new Error("Can't convert value to a number");
    //if string is not parsable throw an error
    else return parseFloat(val);
  } else if (Number.isNaN(+val))
    throw new Error("Can't convert value to a number");
  else return +val;
}

export function coerceToType(val, type) {
  switch (type) {
    case "array":
      return convertToArray(val);
    case "object":
      return convertToObject(val);
    case "string":
      return stringifyValue(val);
    case "number":
      return convertToNumber(val);
    case "boolean":
      return Boolean(val);
    case "bigint":
      try {
        return BigInt(val);
      } catch {
        throw new Error("Can't convert value to a bigint");
      }
    default:
      throw new Error("Unsupported type");
  }
}

export function convertToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (typeof val === "string") {
    return val.split(",");
  } else {
    throw new Error("Can't convert value to an array");
  }
}

export function convertToObject(val) {
  if (val === null) throw new Error("Cannot convert null to an object");
  else if (Array.isArray(val)) return { ...val };
  else if (typeof val === "object") {
    return val;
  } else if (Array.isArray(val)) {
    return { ...val };
  } else {
    try {
      const res = JSON.parse(val);
      if (Array.isArray(res)) return { ...res }; //if result is array convert to an object
      if (typeof res === "object") return res;
      else throw new Error("Can't convert value to an object"); //throw an error if we dont get an object
    } catch {
      throw new Error("Can't convert value to an object");
    }
  }
}

export function concatenateStrings(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string")
    return str1 + str2; //only concatinates strings
  else throw new Error("This method supports numbers only");
}

export function coerceToTypeinsideObjectOrArray(obj, type) {
  try {
    if (obj === null) throw new Error("Can't convert null");
    else if (Array.isArray(obj))
      return obj.map((val) => coerceToType(val, type));
    else if (typeof obj === "object") {
      const valArr = Object.keys(obj); // get object keys
      const newObj = {};
      for (let key of valArr) {
        newObj[key] = coerceToType(obj[key], type); // set converted value with same key to new object
      }
      return newObj;
    }
  } catch {
    throw new Error(`Can't convert value to ${type}`);
  }
}

//checks if array has any truthy value
export function checkArray(arr) {
  arr.forEach((val) => {
    if (val) return true;
  });
  return false;
}

//tries to fit object or array into provided interface
export function fitObjectToInterface(obj, type) { 
  if (type === null || obj === null) throw new Error();
  else if (Array.isArray(obj) && Array.isArray(type)) {
    if (obj.length >= type.length) { //check if array has enough length
      const newArr = []
      for (let id = 0; id < type.length; id++) {
        newArr[id] = coerceToType(obj[id], type[id]);
      }
      return newArr;
    } else throw new Error("Array's length is lesser then interface's");
  } else if (typeof obj === "object" && typeof type === "object") {
    const objKeys = Object.keys(obj);
    const typeKeys = Object.keys(type);
    const newObj = {};
    for (let id = 0; id < typeKeys.length; id++) {
      const key = typeKeys[id];
      if (!obj[key]) throw new Error(`Object doesnt have a '${key}' key`); //throw error if object has no corresponding field
      newObj[key] = coerceToType(obj[key], type[key]);
    }
    return newObj
  }
}
