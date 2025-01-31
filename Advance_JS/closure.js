function outer() {
    let counter = 4; // Counter is defined in the outer function's scope
    return function () {
        counter++; // Inner function modifies the outer function's variable
        return counter; // Inner function can still access counter
    };
}


console.log("Closure");
let increment = outer(); // `increment` is assigned the inner function
console.log(increment()); // 5
console.log(increment()); // 6


/**In a normal function, variables declared inside the function exist only during the execution of that function. Once the function finishes, the variables are destroyed, and they cannot be accessed or modified anymore. */

function normalFunction() {
    let counter = 4;
    counter++;
    return counter;
}

console.log("Normal Function");
console.log(normalFunction()); // 5
console.log(normalFunction()); // 5
