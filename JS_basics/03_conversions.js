let score="33"
let score2="44aca"

console.log(score)
console.log(typeof score)

let valueInNumber=Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

let num=Number(score2)
console.log(num) //NaN
console.log(typeof num)

let loggedIn=1
let booleanVal=Boolean(loggedIn)
console.log(booleanVal)

let str="Hello"
let boolValue=Boolean(str)
console.log(boolValue)

let str2="" 
let boolValue2=Boolean(str2) 
console.log(boolValue2)

//1->true, 0->false
//"hello"->true, ""->false

//**** Operations ****/

let value=3
let negValue=-value
console.log(negValue)

let strValue="Hello"
let string2=" World"
let concatValue=strValue+string2
console.log(concatValue)

console.log("1"+2) //12
console.log(1+"2")  //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

//Note-> in javascript adding string to number will result in string 
// "1"+2+2 -> 122 because the first thing is "1" so it will convert the whole thing to string
// 1+2+"2" -> 32 because the first thing is number so it will add the first two numbers and then convert the result to string and then add the last string

/** Truthy and falsy */

/**In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
  Truthy values -> all values except  false, 0, -0, 0n, "", null, undefined, NaN and document.all
    Falsy values -> false, 0, -0, 0n, "", null, undefined, NaN and document.all
 */

if(true){
  console.log("This is true")
}

console.log(true && "dog") //If the first operand is truthy, the logical AND operator returns the second operand:
// returns "dog"

/** Falsy -> A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context. */
if(false){
  //not reachable
  console.log("This is false")
}

