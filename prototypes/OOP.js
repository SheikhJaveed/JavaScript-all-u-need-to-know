function Animal(type) {
  this.type = type;
}

Animal.prototype.sound = function () {
  return `${this.type} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound()); // "Dog makes a sound"
//sound() is not found directly on the dog object, so JavaScript looks up the chain to Animal.prototype where sound() is defined.
//This is the prototype chain in action.

Array.prototype.custom_method = function () {
  return `${this} This is a custom method`;
};

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.custom_method());
let newArray = [6, 7, 8, 9, 10];
console.log(newArray.custom_method());

//Note: whenver a function is created inside a class it is called as a method

//classes and objects

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} is a car from ${this.model}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} is driving`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehicle1 = new Vehicle("Honda", "Civic");
console.log(vehicle1.start());

//Encapsulation

class BankAccount {
  #balance = 0; //# is used to make the property private
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let myAccount = new BankAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.getBalance());

//Abstraction

class CoffeMachine {
  start() {
    //call DB
    //filte values
    return "Starting the coffee machine... ";
  }
  brewCoffee() {
    //complex logic
    return "Brewing coffee";
  }
  pressStartButton() {
    let p1 = this.start();
    let p2 = this.brewCoffee();
    return `${p1} and ${p2}`;
  }
}
let myCoffeeMachine = new CoffeMachine();
console.log(myCoffeeMachine.pressStartButton());

//Polymorphism

class Bird{
    fly(){
        return "Bird is flying";
    }
}
class Penguin extends Bird{
    fly(){
        return "Penguin can't fly";
    }
}
let myBird = new Bird();
console.log(myBird.fly());
let myPenguin = new Penguin();
console.log(myPenguin.fly());

class Calculator{
    static add(a,b){
        return a+b;
    }
}

let myCalc= new Calculator();
// console.log(myCalc.add(2,3)); //Error -> because static methods cannot by anyone except the class itself
console.log(Calculator.add(2,3)); //called by the class itself 

//getters and setters

class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary can't be negative");
        }
        this.name=name;
        this.#salary=salary;
    }
    get salary(){
        return `You are not allowed to see the salary`;
    }
    set salary(value){
        if(value<0){
            throw new Error("Salary can't be negative");
        }
        this.#salary=value;
    }
    //public method to access actual salary
    getActualSalary(){
        return this.#salary;
    }
}
let emp=new Employee("Alice",10000);
console.log(emp.salary); //getting salary
emp.salary=20000;//setting salary
console.log(emp.getActualSalary());


