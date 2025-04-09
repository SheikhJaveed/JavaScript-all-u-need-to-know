/*
    Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compilation phase (before code execution).
 */

//Javascript declarations are hoisted 
x=5
console.log(x) 
var x //declaration

/*
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.  
*/

carName1 = "Volvo";
// let carName1; //ReferenceError: Cannot access 'carName1' before initialization

carName2 = "Volvo";
// const carName2; //SyntaxError: Missing initializer in const declaration

//NOTE: JavaScript only hoists declarations, not initializations.
// So, if you try to use a variable before it is declared, it will be undefined.

//Normal execution
var x=5
var y=7
console.log(x) //5
console.log(y) //7

var a=10
console.log(b); //undefined
var b=20
/*
Does it make sense that y is undefined in the last example?

This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
 */

var c = 15; // Initialize x
var z;     // Declare y
console.log(z);

z = 7;    // Assign 7 to y

//this above code is equivalent to previous code