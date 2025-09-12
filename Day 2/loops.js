// JavaScript Loops
// Loops repeat a block of code multiple times.

// 1. for loop
for (let i = 1; i <= 3; i++) {
  console.log(`for loop count: ${i}`);
}

// 2. while loop
let count = 1;
while (count <= 3) {
  console.log(`while loop count: ${count}`);
  count++;
}

// 3. do...while loop
let num = 1;
do {
  console.log(`do...while count: ${num}`);
  num++;
} while (num <= 3);

// 4. for...of loop (for arrays)
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// 5. for...in loop (for object keys)
let person = { name: "Raj", age: 20 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ✅ Summary:
// - for, while, do...while: basic looping
// - for...of: iterate arrays/iterables
// - for...in: iterate object keys
