const person={
    name:'Tony',
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();

const greetFunc=person.greet; //here the context of this is lost
greetFunc(); //Hello, my name is undefined

const greetFunc2=person.greet.bind({name:'Steve'}); //here the context of this is bound to the object passed as an argument
greetFunc2(); //Hello, my name is Steve