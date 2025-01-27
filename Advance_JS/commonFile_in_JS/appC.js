
/**Common JS */
// CommonJS -> older version of JS designed to define a standard for JavaScript modules outside the browser, especially for server-side environments like Node.js.

const mathOperations=require("./mathOperationsC.js");

console.log(mathOperations.add(10,5));
console.log(mathOperations.sub(10,5));
console.log(mathOperations.multiply(10,5));