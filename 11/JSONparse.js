// Tokenizes the input string based on JSON syntax
function tokenize(input) {
  // Defines regular expressions for different token types
  const tokenTypes = {
    BraceOpen: /^\{/,
    BraceClose: /^\}/,
    BracketOpen: /^\[/,
    BracketClose: /^\]/,
    String: /^"((?:[^"\\]|\\.)*)"/,
    Number: /^-?\d+(\.\d+)?/,
    True: /^true/,
    False: /^false/,
    Null: /^null/,
    Comma: /^,/,
    Colon: /^:/,
  };

  const tokens = []; // Array to store tokens
  let remainingInput = input.trim(); // Removes leading/trailing whitespace

  // Loop until all input is processed
  while (remainingInput.length > 0) {
    let matched = false; // Flag to track if a token is matched
    for (const [type, regex] of Object.entries(tokenTypes)) {
      const match = remainingInput.match(regex); // Attempt to match token
      if (match) {
        if (type === "String") {
          const stringValue = match[1]; // Extract string content without outer quotes
          tokens.push({ type, value: stringValue }); // Add token to array without outer quotes
        } else {
          tokens.push({ type, value: match[0] }); // Add token to array
        }
        remainingInput = remainingInput.slice(match[0].length).trim(); // Remove token from input
        matched = true; // Set flag to true
        break; // Exit loop
      }
    }
    if (!matched) {
      // Throw error if no token is matched
      throw new SyntaxError(
        "Invalid token at position " + (input.length - remainingInput.length)
      );
    }
  }

  return tokens; // Return array of tokens
}

// Parses tokens into a JavaScript object
function parse(tokens) {
  let index = 0; // Index to track current token being processed

  // Function to parse a single value
  function parseValue() {
    const token = tokens[index]; // Get current token
    if (
      token.type === "String" ||
      token.type === "Number" ||
      token.type === "True" ||
      token.type === "False" ||
      token.type === "Null"
    ) {
      index++; // Move to next token
      // Return corresponding JavaScript value for token
      return token.value === "true"
        ? true
        : token.value === "false"
        ? false
        : token.value === "null"
        ? null
        : token.value;
    } else if (token.type === "BracketOpen") {
      return parseArray(); // Parse array
    } else if (token.type === "BraceOpen") {
      return parseObject(); // Parse object
    } else {
      // Throw error for unexpected token
      throw new SyntaxError("Unexpected token " + token.value);
    }
  }

  // Function to parse an array
  function parseArray() {
    const array = []; // Initialize empty array
    index++; // Consume '[' token
    while (tokens[index].type !== "BracketClose") {
      if (tokens[index].type === "Comma") {
        index++; // Consume ',' token
      } else {
        array.push(parseValue()); // Parse and add value to array
      }
    }
    index++; // Consume ']' token
    return array; // Return parsed array
  }

  // Function to parse an object
  function parseObject() {
    const obj = {}; // Initialize empty object
    index++; // Consume '{' token
    while (tokens[index].type !== "BraceClose") {
      if (tokens[index].type === "Comma") {
        index++; // Consume ',' token
      } else {
        const key = tokens[index].value; // Get object key
        index++; // Move to next token (should be ':')
        if (tokens[index].type !== "Colon") {
          // Throw error if ':' is missing after key
          throw new SyntaxError("Expected colon after key " + key);
        }
        index++; // Consume ':' token
        obj[key] = parseValue(); // Parse value and add to object
      }
    }
    index++; // Consume '}' token
    return obj; // Return parsed object
  }

  return parseValue(); // Start parsing from the top level
}

// This function takes a JSON-formatted string and returns a JavaScript object
function myJSONparse(string) {
  // Calls the parse function after tokenizing the input string
  return parse(tokenize(string));
}

// Define test JSON strings
const jsonString1 =
  '{"name": "John Doe", "age": 30, "isStudent": true, "grades": [85, 90, 78], "address": {"city": "New York", "zip": 10001}}';
const jsonString2 = '{"key": "value"}';
const jsonString3 = '{"array": [1, 2, 3, 4, 5]}';
const jsonString4 = '{"nested": {"inner": {"value": "nested value"}}}';
const jsonString5 = '{"booleanValue": true}';
const jsonString6 = '{"nullValue": null}';
const jsonString7 = '{"emptyObject": {}}';
const jsonString8 = '{"emptyArray": []}';
const jsonString9 = '{"escapedString": "\\"\'}\t\\n"}';

// Parse each JSON string using myJSONparse function
const parsedObject1 = myJSONparse(jsonString1);
const parsedObject2 = myJSONparse(jsonString2);
const parsedObject3 = myJSONparse(jsonString3);
const parsedObject4 = myJSONparse(jsonString4);
const parsedObject5 = myJSONparse(jsonString5);
const parsedObject6 = myJSONparse(jsonString6);
const parsedObject7 = myJSONparse(jsonString7);
const parsedObject8 = myJSONparse(jsonString8);
const parsedObject9 = myJSONparse(jsonString9);

console.log("===== Test Parsing JSON Strings =====");
console.log(parsedObject1);
console.log(parsedObject2);
console.log(parsedObject3);
console.log(parsedObject4);
console.log(parsedObject5);
console.log(parsedObject6);
console.log(parsedObject7);
console.log(parsedObject8);
