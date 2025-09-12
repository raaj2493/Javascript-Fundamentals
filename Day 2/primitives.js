// JavaScript Primitive Data Types
// Primitives are immutable data types and the building blocks of JS.

// 1. Number
// Represents both integers and floating-point numbers.
let age = 25;           // integer
let price = 99.99;      // floating point
let infinityValue = Infinity; // special numeric value
let notANumber = NaN;   // represents a computational error
console.log(typeof age); // Output: "number"

// 2. String
// Represents textual data enclosed in single, double, or backticks.
let firstName = 'Raj';
let greeting = "Hello, World!";
let template = `My name is ${firstName}`; // Template literals
console.log(typeof firstName); // Output: "string"

// 3. Boolean
// Represents logical values: true or false.
let isLoggedIn = true;
let hasPermission = false;
console.log(typeof isLoggedIn); // Output: "boolean"

// 4. Undefined
// A variable declared but not assigned a value has the value undefined.
let notAssigned;
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: "undefined"

// 5. Null
// Represents intentional absence of any object value.
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: "object" (this is a well-known JS quirk)

// 6. Symbol (ES6)
// Represents a unique identifier.
let uniqueId = Symbol('id');
let anotherId = Symbol('id');
console.log(uniqueId === anotherId); // Output: false (Symbols are always unique)
console.log(typeof uniqueId); // Output: "symbol"

// 7. BigInt (ES2020)
// Represents integers larger than Number.MAX_SAFE_INTEGER.
let bigNumber = 9007199254740991n; // Use 'n' at the end
console.log(typeof bigNumber); // Output: "bigint"

// ✅ Summary of primitive types:
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol
// - BigInt

// Primitives are compared by value:
let a = 10;
let b = 10;
console.log(a === b); // true (same value)

// Strings and numbers are immutable:
let text = "hello";
text[0] = "H"; // Won't change the string
console.log(text); // Output: "hello"
