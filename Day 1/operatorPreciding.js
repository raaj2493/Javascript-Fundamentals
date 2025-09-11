// operatorPrecedence.js

// We want to evaluate this expression step by step:
console.log(5 + 3 * 2 ** 3 / (4 - 2)); // Expected Output: 17

// Step 1: Parentheses () have the highest precedence.
// (4 - 2) = 2
// Now the expression becomes:
// 5 + 3 * 2 ** 3 / 2

// Step 2: Exponentiation (**) comes next.
// 2 ** 3 = 8
// Now the expression is:
// 5 + 3 * 8 / 2

// Step 3: Multiplication (*) and Division (/) share the same precedence.
// They are evaluated from LEFT to RIGHT.
// First, 3 * 8 = 24
// Expression becomes:
// 5 + 24 / 2

// Next, 24 / 2 = 12
// Expression becomes:
// 5 + 12

// Step 4: Addition (+) is last.
// 5 + 12 = 17

// Final Result:
// console prints: 17
