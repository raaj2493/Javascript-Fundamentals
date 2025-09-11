// This file demonstrates the use of logical operators in JavaScript.

// Let's declare two boolean variables for our examples.
let isUserLoggedIn = true;
let isPaymentMade = true;

/* --- The AND Operator (&&) --- */

// The && operator returns true only if both conditions on its left and right are true.
// If the first condition is false, the second one is not even checked (this is called "short-circuiting").
console.log(isUserLoggedIn && isPaymentMade); // Output: true, because both variables are true.
// If isUserLoggedIn was false, the output would be false, without checking isPaymentMade.

/* --- The OR Operator (||) --- */

// The || operator returns true if at least one of the conditions is true.
// It also "short-circuits": if the first condition is true, the second is not checked.
let hasEmail = true;
let hasGoogleAccount = false;
console.log(hasEmail || hasGoogleAccount); // Output: true, because hasEmail is true.

/* --- The NOT Operator (!) --- */

// The ! operator inverts the boolean value of a variable.
// It changes true to false and false to true.
console.log(!isUserLoggedIn); // Output: false, because isUserLoggedIn is true.
console.log(!hasGoogleAccount); // Output: true, because hasGoogleAccount is false.