// JavaScript Non-Primitive (Reference) Data Types
// Non-primitives are stored and compared by reference, not by value.

// 1. Object
// Objects store key-value pairs and can contain various data types.
let person = {
  name: "Raj",
  age: 20,
  isStudent: true
};
console.log(person.name); // Accessing property: Output -> "Raj"
console.log(typeof person); // Output -> "object"

// Objects are mutable:
person.age = 21; // Modify property
console.log(person.age); // Output -> 21

// 2. Array
// Arrays are special objects for storing ordered collections.
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Accessing by index: Output -> "Apple"
fruits.push("Orange"); // Adding element
console.log(fruits); // Output -> ["Apple", "Banana", "Mango", "Orange"]
console.log(typeof fruits); // Output -> "object" (arrays are objects in JS)

// 3. Function
// Functions are objects too, but callable.
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Raj")); // Output -> "Hello, Raj!"
console.log(typeof greet); // Output -> "function"

// 4. Date
// Date is a built-in object for handling dates and times.
let today = new Date();
console.log(today); // Prints current date and time
console.log(typeof today); // Output -> "object"

// 5. RegExp (Regular Expression)
// Used for pattern matching in strings.
let pattern = /hello/i; // Case-insensitive match for "hello"
console.log(pattern.test("Hello world")); // Output -> true
console.log(typeof pattern); // Output -> "object"

// ✅ Key Concepts about Non-Primitives:
// - Non-primitives are mutable (can be changed after creation).
// - They are stored and compared by reference, not value.
let obj1 = { value: 10 };
let obj2 = { value: 10 };
console.log(obj1 === obj2); // Output -> false (different references)

let obj3 = obj1; // obj3 points to the same reference as obj1
obj3.value = 20;
console.log(obj1.value); // Output -> 20 (changing obj3 affects obj1)

// ✅ Summary of non-primitive types:
// - Object
// - Array
// - Function
// - Date
// - RegExp
// - Any user-defined objects or classes
