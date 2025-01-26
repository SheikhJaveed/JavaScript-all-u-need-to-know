//In JavaScript, prototype-based programming is a style of object-oriented programming where objects are created and inherit directly from other objects, rather than using classes as in classical object-oriented languages.

//older way of prototypal inheritance

let computer={cpu:12}; //object
let lenovo={
    screen:"HD",
    __proto__:computer
}

console.log('computer',computer.__proto__) //default proto 
console.log('lenovo',lenovo.__proto__); //lenovo has prototye of computer now
console.log('\n')

//new way of prototypal inheritance
let car={'tyres':4}
let tesla ={
    'driver':'AI'
}

Object.setPrototypeOf(tesla,car); //set prototype of tesla to car
console.log('car',Object.getPrototypeOf(car));
console.log('tesla',Object.getPrototypeOf(tesla)); //tesla has prototype of car now

