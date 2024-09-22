const myName="John"
const age=30
console.log(myName+" "+age); //outdates way of concatenation

//string interpolation
console.log(`My name is ${myName} and I am ${age} years old`)
const gameName=new String('Mario') //String object

console.log(gameName[0])
console.log(gameName.__proto__) 
console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.toUpperCase())

const newString=gameName.substring(0,3) //cannot have negative values
console.log(newString)

const newString2=gameName.slice(-8,2) //can have negative values
console.log(newString2)

const newString3="       Mario      "
console.log(newString3)
console.log(newString3.trim()) //removes the white spaces

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) //(old,new)

console.log(url.includes('hitesh')) //true

const myString="Hello-World"
console.log(myString.split('-')) //splits the string into an array

//more methods available on MDN documentation