function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let tony=new Person('Tony');
tony.greet(); //Hello, my name is Tony