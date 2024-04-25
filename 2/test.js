import {
  addValues,
  coerceToType,
  stringifyValue,
  invertBoolean,
  convertToNumber,
  concatenateStrings,
  coerceToTypeinsideObjectOrArray,
  convertToArray,
  convertToObject,
  fitObjectToInterface,
} from "./myLib.mjs";

console.log("addValues");
console.log(addValues(0.1, 0.2));
console.log(addValues(123, 456));
// console.log(addValues('123', '456'));
// console.log(addValues(123, NaN));
console.log("------------------");

console.log("stringifyValue");
console.log(stringifyValue(123456));
console.log(stringifyValue(Symbol("r")));
console.log(stringifyValue([1, 2, 3]));
console.log(stringifyValue({ a: 1, b: 1 }));
console.log("------------------");

console.log("invertBoolean");
console.log(invertBoolean(true));
// console.log(invertBoolean('true'));
console.log("------------------");

console.log("convertToNumber");
console.log(convertToNumber(1));
console.log(convertToNumber("1.23"));
console.log(convertToNumber("123nnm"));
console.log(convertToNumber(null));
// console.log(convertToNumber('lll23nnm'));
// console.log(convertToNumber({}));
console.log("------------------");

console.log("coerceToType");
console.log(coerceToType(1, "string"));
console.log(coerceToType([1, 2, 3], "string"));
console.log(coerceToType(undefined, "string"));
console.log(coerceToType("1", "number"));
// console.log(coerceToType('erew', 'number'))
// console.log(coerceToType({}, 'number'))
console.log(coerceToType(1342, "bigint"));
// console.log(coerceToType({}, 'bigint'))
console.log(coerceToType(1, "boolean"));
console.log(coerceToType(null, "boolean"));
console.log(coerceToType("1,2,3", "array"));
// console.log(coerceToType(34, 'array'))
console.log(coerceToType('{"a":1, "b":2}', "object"));
console.log(coerceToType("[1,2,3]", "object"));
console.log(coerceToType([1, 2, 3], "object"));
// console.log(coerceToType(null, 'object'))
// console.log(coerceToType(34, 'object'))
console.log(coerceToType([1, 2, 3], "array"));
console.log(coerceToType("1,2,3", "array"));
// console.log(coerceToType(34, 'array'))
console.log("------------------");

console.log("concatenateStrings");
console.log(concatenateStrings("a", "b"));
// console.log(concatenateStrings('a',3));
console.log("------------------");

console.log("coerceToTypeinsideObjectOrArray");
console.log(coerceToTypeinsideObjectOrArray([1, 2, 3], "string"));
console.log(coerceToTypeinsideObjectOrArray([0, 1, 2, 3, null, {}], "boolean"));
console.log(coerceToTypeinsideObjectOrArray({ a: 1, b: 2 }, "string"));
// console.log(coerceToTypeinsideObjectOrArray({a:1, b:{}}, 'number'));
console.log("------------------");

console.log("convertToArray");
console.log(convertToArray("1,2,3"));
// console.log(convertToArray({}));
console.log("------------------");

console.log("convertToObject");
console.log(convertToObject([1, 2, 3]));
console.log(convertToObject('{"a":1,"b":2}'));
// console.log(convertToObject('lolik'));
console.log("------------------");

console.log("fitObjectToInterface");
console.log(fitObjectToInterface({a: 1, b: 2, c: 3}, {a: 'string', b: 'number', c: 'boolean'}));
console.log(fitObjectToInterface({a: 1, b: 2, c: 3, d: 4}, {a: 'string', b: 'number', c: 'boolean'}));
// console.log(fitObjectToInterface({a: 1, b: 2, c: 3}, {a: 'string', b: 'number', c: 'boolean', d: 'number'}));
console.log(fitObjectToInterface([1,2,3],['number', 'string','boolean']));
console.log(fitObjectToInterface([1,2,3,4,5,6],['number', 'string','boolean']));
// console.log(fitObjectToInterface([1,2,3],['number', 'string','boolean', 'boolean']));
// console.log(fitObjectToInterface(['zozik',2,3],['number', 'string','boolean']));
console.log("------------------");
