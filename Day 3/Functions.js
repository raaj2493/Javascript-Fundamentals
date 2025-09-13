
/* 

write a function called makeG\Tea that takes a parameter called teaType and 
returns a string that says "Making green tea with [teaType]"

*/

function makeGreenTea(teaType) {
  return `Making green tea with ${teaType}`;
}

// Example usage:
const myTea = makeGreenTea('loose-leaf');
console.log(myTea); // Expected output: "Making green tea with loose-leaf"


/* 

create a function "ordeertea" what takes parameter "tea type" inside tht function "confirmorder"and create another function inside it 
and return a message like order confimation from within order tea 

*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Your order for ${teaType} has been confirmed.`;
  }
  return confirmOrder();
}

/* 

write a arrow function "calculate tool" which takes two parameters price and quantity and 
returns the total cost of the tool

*/

function calculateTool(price, quantity) {
  return price * quantity;
}

// Example usage:
const toolCost = calculateTool(10, 5);
console.log(toolCost); // Expected output: 50