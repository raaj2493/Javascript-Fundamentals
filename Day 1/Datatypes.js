

// JavaScript Data Types Examples

// 1. String
let myString = "Hello, Raj!";
console.log(myString, "=>", typeof myString);

// 2. Number
let myNumber = 42;
console.log(myNumber, "=>", typeof myNumber);

// 3. Boolean
let myBoolean = true;
console.log(myBoolean, "=>", typeof myBoolean);

// 4. Undefined
let myUndefined;
console.log(myUndefined, "=>", typeof myUndefined);

// 5. Null (special case: typeof returns 'object')
let myNull = null;
console.log(myNull, "=>", typeof myNull);

// 6. Object
let myObject = { name: "Raj", age: 20 };
console.log(myObject, "=>", typeof myObject);

// 7. Array (arrays are a type of object)
let myArray = [1, 2, 3, 4];
console.log(myArray, "=>", typeof myArray);

// 8. Function
function myFunction() {
  return "I am a function!";
}
console.log(myFunction, "=>", typeof myFunction);

// 9. Symbol (unique value)
let mySymbol = Symbol("id");
console.log(mySymbol, "=>", typeof mySymbol);

// 10. BigInt (for very large integers)
let myBigInt = 1234567890123456789012345678901234567890n;
console.log(myBigInt, "=>", typeof myBigInt);
