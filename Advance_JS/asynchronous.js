/**Asnchronous nature of JS */

console.log("Hello World");

setTimeout(() => {
    console.log("This is a message from setTimeout");
}, 4000);

for(let index = 0; index < 10; index++){
    console.log(index);
}

//Note that this code does not follow the order of execution. The setTimeout function is executed after 4 seconds.This is because JS is asynchronous in nature. The setTimeout function is executed after the for loop.