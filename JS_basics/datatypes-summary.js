//primitive

//7 types: String,Number,boolean,null,undefined,symbol,BigInt
//Reference(Non-primitive): Object, Array, Function

const score=100
const scoreValue=100.4
 
const id=Symbol('123')
const id2=Symbol('123')

console.log(id===id2); //false

const heroes=['Ironman','Thor','Hulk']
const myObj={name:'John',age:30}
const myFunc=function(){
    console.log('Hello')
}
console.log(typeof myFunc) 

// ***Stack and Heap memory****
// Stack(Primitive), Heap(Reference or Non-primitive)

let name1='John'
let name2=name1
name2='John Wick'
console.log(name1) //John 
console.log(name2) //John Wick


let userOne={
    email:"john23@email.com",
    name:"John"
}
let userTwo=userOne
userTwo.name="John Wick" //changing the value of userTwo will also change the value of userOne
//because both userOne and userTwo are pointing to the same memory location
console.log(userOne) 