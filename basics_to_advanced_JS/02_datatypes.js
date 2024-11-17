"use strict"; //treats all JS code as newer version

//alert(3+3) //we are using nodejs, not browser so this will not work

//int -> max is 2 power 53 - 1
//bigint -> max is 2 power 53
//string=""
//boolean=true/false
//null->standalone value
//undefined
//symbol -> unique value

let age=20
let name1="John"

console.log(typeof age)
console.log(typeof name1)
console.log(typeof null) //object
console.log(typeof undefined)
console.log(typeof true)

console.log(typeof typeof age) //string

//check if a variable is a number or string
function whatAmI(input) {
    let x=typeof input; //if input is a number, x will be 'number' and if input is a string, x will be 'string'
    if(x==='number'){  //'number'==='number' -> true
        return "I'm a number"
    }
    else{
        return "I'm a string"
    }
}

console.log(whatAmI(20))
console.log(whatAmI("John"))
console.log(whatAmI('123'));

/**Arrays */
let arr=[1,2,3,4,5]
console.log(arr)
console.log(typeof arr) //object
console.log(arr.length) //true

//array sorting
const arr2 = [ 10, 20, 25, 100 , 40]
console.log(arr2.sort()) //by default sorts the array in lexicographical order
//to avoid this we can use a compare function

console.log(arr2.sort((a,b)=>a-b)) //ascending order
console.log(arr2.sort((a,b)=>b-a)) //descending order;

let a = ["JS", "HTML", "CSS"];
console.log(a); // ["JS", "HTML", "CSS"]
a.sort((x, y) => x.localeCompare(y))
console.log(a); // ["CSS", "HTML", "JS"] according to lexicographical order

/** finding max and min values in an array using Math.max() and Math.min() */

/**The Math object’s Math.min() and Math.max() methods are static methods that return the minimum and maximum elements of a given array. The spread(…) operator could pass these functions into an array. The spread operator allows an iterable to expand in places where multiple arguments are expected. In this case, it automatically expands the array and gives the numbers to the functions.  */
let arr3=[1,2,3,4,5]
console.log(Math.max(...arr3)) //5
console.log(Math.min(...arr3)) //1

//finding unique values in an array
let arr4 = [10, 20, 20, 30, 40, 50, 50];

// Using filter with indexOf to find the repeated elements
let res = arr4.filter((item, index) => arr4.indexOf(item) === index);
console.log(res);

//flatten an array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); //it also takes an argument which specifies the depth of the array - by default it is 1
console.log(newArr);

const newArr2 = myArr.flat(2);
console.log(newArr2);
