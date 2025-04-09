/**
 Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

    Block scope
    Function scope
    Global scope
 */

//1. Block scope
{
    let x = 2;
}
// x can NOT be used here


//Variables declared with the var keyword can NOT have block scope.
//Variables declared inside a { } block can be accessed from outside the block.
{
    var x = 2;
}
// x CAN be used here

//EXAMPLE
for(var i=1;i<10;i++){
    console.log(i);
}
console.log("using var")
console.log(i) // 10

for(let j=1;j<10;j++){
    console.log(j);
}
console.log("using let")
// console.log(j) //reference error

//2. Local scope/ Function scope

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
// code here can NOT use carName
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
function myFunction1() {
    let carName = "BMW";   // Function Scope
}

let carName = "Volvo";//global scope
// code here can use carName

function myFunction() {
// code here can also use carName
}

// Automatically global variables
/*When you assign a value to a variable without declaring it (no var, let, or const), JavaScript automatically creates it as a global variable, even if that happens inside a function. This is called an "automatic global" — but it's not recommended because it can lead to bugs and unintended behavior. */

myFunction2();
console.log(word) //hello -> because inside function we have declared the variable without let or var or const;

// code here can use carName

function myFunction2() {
  word = "Hello";
}
console.log(word) // Hello;

//Global variables in HTML

/* In HTML, the global scope is the window object.

Global variables defined with the var keyword belong to the window object */

var carCompany1 = "Volvo";
// console.log(window.carCompany1) //Volvo;
// code here can use window.carName

let carCompany2 = "Toyota";
// console.log(window.carCompany2) //reference error;
// code here can use window.carName

/*
The Lifetime of JavaScript Variables

    The lifetime of a JavaScript variable starts when it is declared.

    Function (local) variables are deleted when the function is completed.

    In a web browser, global variables are deleted when you close the browser window (or tab).
 */