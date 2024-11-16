function greet(name){
    console.log(`Hello ${name}`);
    
}
greet('John')

//nested function
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for tea`;
    }
    //confirmOrder() //calling the nested function
    return confirmOrder()
}
let orderConfirmation=orderTea('chai')
console.log(orderConfirmation)

const calculateTotal=(price,quantity)=>{
    total=price*quantity
    return total 
}
let totalPrice=calculateTotal(20,5)
console.log(totalPrice)

//if you execute this in browser, you will get the window object
function testOne(){
    console.log(this);
}

// arrow functions -> this will also give window object but this is not preferred in browser mode instead classical function is preferred 
const testTwo=()=>{
    console.log(this);
}

/** Higher Order functions **/

/** Higher order function(also known as first class function) -> A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. */

//question -> write a function named 'processTeaOrder' that takes another function 'makeTea' as an argument and calls it with the argument 'earl grey' and return the result of calling 'makeTea'

function makeTea(teaType){
    return `Tea type is ${teaType}`
}

//the parameter teaFunction is a function 
function processTeaOrder(teaFunction){
    return teaFunction('Earl Grey')
}

let teaOrder=processTeaOrder(makeTea) //here makeTea is the function call
console.log(teaOrder)

//some examples where first class functions are used normally
let worldCities=['Berlin','Paris','London','New York']
let travelledCities=[]

worldCities.forEach(function(city){
    if(city=='New York'){
        travelledCities.push(city)
    }
})
console.log(worldCities)
console.log(travelledCities)
 
//unique behaviour of javascript (often asked in interviews)

/**Question -> write a function named `createTeaMaker` that returns another function. The returned function should take one pararmeter,'teaType' and return a message like "Making green tea". Store the returned function in a variable named 'teamaker' and call it with 'green tea' */

function createTeaMaker(name){
    //this variable is accessible to the inner function
    let rating=10;
    return function(teaType){
        return `Making ${teaType} ${name} ${rating}`; //closure -> inner function has access to the outer function's variable
    };
}

let teaMaker = createTeaMaker();
console.log(teaMaker); //[Function (anonymous)]

console.log('-----------------');

let result=teaMaker('Green Tea'); //Making Green Tea undefined
console.log(result);


let teaMaker2 = createTeaMaker('Jackson');
let result2=teaMaker2('Black Tea'); //Making Black Tea Jackson
console.log(result2);  //NOTE -> name is passed as an argument and the inner function also has access to the outer function's variable

/*what are ananymous functions? -> functions without a name. These functions are often used in situations where you don’t need to reuse the function outside its immediate context. */

let greet2 = function (platform) {
    console.log("Welcome to ", platform);
};

greet2("GeeksforGeeks!"); //anonymous function

/** Closures -> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time. */

//example of closure from MDN 
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
  