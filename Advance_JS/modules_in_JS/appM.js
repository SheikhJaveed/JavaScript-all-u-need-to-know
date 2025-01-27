
/**Module import file */

//moduleJS -> newer version of JS designed to be a modern, native module system for JavaScript, working seamlessly both in browsers and server-side environments (like Node.js).

//default import 
import multiply from "./mathOperationsM.js";

//named import
import {add, sub} from "./mathOperationsM.js";

console.log(multiply(10,5));
console.log(add(10,5));
console.log(sub(10,5));
