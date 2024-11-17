"use strict"; //treats all JS code as newer version

//alert(3+3) //we are using nodejs, not browser so this will not work

//int -> max is 2 power 53 - 1
//bigint -> max is 2 power 53
//string=""
//boolean=true/false
//null->standalone value
//undefined
//symbol -> unique value

let age=20
let name1="John"

console.log(typeof age)
console.log(typeof name1)
console.log(typeof null) //object
console.log(typeof undefined)
console.log(typeof true)

console.log(typeof typeof age) //string

//check if a variable is a number or string
function whatAmI(input) {
    let x=typeof input; //if input is a number, x will be 'number' and if input is a string, x will be 'string'
    if(x==='number'){  //'number'==='number' -> true
        return "I'm a number"
    }
    else{
        return "I'm a string"
    }
}

console.log(whatAmI(20))
console.log(whatAmI("John"))
console.log(whatAmI('123'));
