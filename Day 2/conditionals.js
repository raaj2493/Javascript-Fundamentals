// JavaScript Conditionals
// Conditionals let your code make decisions and execute blocks based on conditions.

// 1. if Statement
// Runs a block of code if the condition is true.
let age = 18;

if (age >= 18) {
  console.log("You are an adult."); // Runs because age is 18
}

// 2. if...else Statement
// Adds an alternative block if the condition is false.
let isRaining = false;

if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("Enjoy the sunshine!"); // Runs because isRaining is false
}

// 3. if...else if...else Statement
// Check multiple conditions in order.
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B"); // Runs because score is 75
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. Ternary Operator (? :)
// A shorthand for if...else. Good for simple conditions.
let isMember = true;
let discount = isMember ? 10 : 0; // If true -> 10, else -> 0
console.log(`Discount: ${discount}%`);

// 5. switch Statement
// Useful for checking multiple cases of a single value.
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Midweek day!");
}

// 6. Logical Operators with Conditionals
// && (AND) - both conditions must be true
// || (OR) - at least one condition is true
// ! (NOT) - reverses the condition
let hasTicket = true;
let isVIP = false;

if (hasTicket && isVIP) {
  console.log("Welcome to the VIP lounge!");
} else if (hasTicket || isVIP) {
  console.log("Welcome to the event!"); // Runs because hasTicket is true
} else {
  console.log("You cannot enter.");
}

// ✅ Summary:
// - Use `if`, `if...else`, and `else if` for basic decision making.
// - Use the ternary operator for quick, simple choices.
// - Use `switch` for checking multiple exact matches.
// - Combine with logical operators (&&, ||, !) for complex conditions.
