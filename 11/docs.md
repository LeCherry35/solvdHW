# JSON Parser

+ [Tokenize](#tokenize)
+ [Parse](#parse)
+ [myJSONparse](#myjsonparse)

## Tokenize <a name = "tokenize"></a>
The tokenize(input) function tokenizes the input string based on JSON syntax. It uses regular expressions to identify different token types such as strings, numbers, booleans, null, brackets, commas, and colons.

Parameters
input: The JSON-formatted string to tokenize.
Returns
An array of tokens representing the different parts of the JSON input.


```
const tokens = tokenize('{"key": "value"}');
console.log(tokens);
// Output: [{ type: 'BraceOpen', value: '{' }, { type: 'String', value: 'key' }, { type: 'Colon', value: ':' }, { type: 'String', value: 'value' }, { type: 'BraceClose', value: '}' }]
```

## Parse <a name = "parse"></a>
The parse(tokens) function parses an array of tokens into a JavaScript object following the JSON syntax. It recursively processes tokens to build nested objects and arrays as specified in the JSON input.

Parameters
tokens: An array of tokens generated by the tokenize function.
Returns
A JavaScript object representing the parsed JSON input.

```
const tokens = tokenize('{"key": "value"}');
const obj = parse(tokens);
console.log(obj);
// Output: { key: 'value' }
```

## myJSONparse <a name = "myjsonparse"></a>
The myJSONparse(string) function combines tokenization and parsing by first tokenizing the input string using tokenize and then parsing the tokens using parse. It provides a convenient way to directly parse JSON-formatted strings into JavaScript objects.

Parameters
string: The JSON-formatted string to parse.
Returns
A JavaScript object representing the parsed JSON input.

```
const jsonString = '{"key": "value"}';
const obj = myJSONparse(jsonString);
console.log(obj);
// Output: { key: 'value' }
```