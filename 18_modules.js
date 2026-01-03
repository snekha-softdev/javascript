// Exporting  

export let a = 10;

export function add(x, y) {
  return x + y;
}
// Importing Functions

import { a, add } from "./math.js";

console.log(add(5, 3));
// exporting and importing variable

  // constants.js
  const PI = 3.14159;
  const EULER = 2.71828;
  
  export default{ PI, EULER };
  
  // main.js
  const { PI, EULER } = require("./constants.js");
  
  console.log(PI); // Output: 3.14159
  console.log(EULER); // Output: 2.71828
  
//   default export and import

  
  
  // main.js
  const addNumbers = require("./math.js");
  
  const result = addNumbers(5, 3);
  console.log(result); // Output: 8
  
  

