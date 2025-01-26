function Person(name,age){
    this.age=age;
    this.name=name;
}

function Car(make,model){
    this.make=make;
    this.model=model;
}

let newPerson= new Person('John',25);
let newCar= new Car('Audi','R8');

console.log(newPerson);
console.log(newCar);

function Tea(type){
    this.type=type;
    this.describe=function(){
        return `This is a cup of ${this.type} `;
    }
}

let lemonTea=new Tea('lemon tea');
console.log(lemonTea);
console.log(lemonTea.describe());


function Animal(species){
    this.species=species;
}
Animal.prototype.sound=function(){ //here sound is user defined method (we can name it anything)
    return `${this.species} makes a sound`;
}

let dog= new Animal('dog');
console.log(dog.sound());

function Account(name,number){
    if(!new.target){
        throw new Error('Account must be called with new keyword');
    }
    this.name=name;
    this.number=number;
}

let newAccount= new Account('John',1234);
//let newAccount2= Account('John',1234); //throws error
