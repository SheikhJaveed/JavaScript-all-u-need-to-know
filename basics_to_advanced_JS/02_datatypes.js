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

/**LOOPS */
//for loop

console.log("for loop")
for(let i=0;i<5;i++){
    console.log(i)
}
console.log("while loop")
//while loop
let i=0
while(i<5){
    console.log(i)
    i++
}

console.log("do while loop")
//do while loop
let j=0
do{
    console.log(j)
    j++
}while(j<5)

console.log("for in loop")
//for of loop -> The JavaScript for of statement loops through the values of an iterable object.
const arr5 = [10, 20, 30, 40, 50];
for (let value of arr5) {
    console.log(value);
}

//for each loop -> The forEach() method calls a function once for each element in an array, in order.
//syntax -> array.forEach(function(currentValue, index, arr), thisValue)

let sum1=0;
arr5.forEach(myFunc);

function myFunc(value){
    sum1+=value;
}
console.log(sum1);

const numbers = [65, 44, 12, 4];
numbers.forEach((item,index,arr)=>{
    arr[index]=item*5;
})
console.log(numbers); //in this case, the original array is modified

//for in loop -> The JavaScript for in statement loops through the properties of an object.
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

/**MAP function => 1. creates a new array from calling a function for every array element.
                   2. does not execute the function for empty elements.
                   3. does not change the original array. */
const numbers1 = [4, 9, 16, 25]; 
const newArr3 = numbers1.map(Math.sqrt); //returns a new array with square root of each element
console.log(newArr3);

const newArr4 = numbers.map(mapFunc);
function mapFunc(value){
    return value*2;
}
console.log(newArr4);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterable
const list = fruits.keys();

// fruits.keys() returns an iterable object
let text1 = "";
for (let x of list) {
  text1 += x+" "; //0,1,2,3 i.e index of each element
}
console.log(text1);

/**reduce() method -> The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result. */

/*SYNTAX -> array.reduce( function(total, currentValue, currentIndex, arr), initialValue)
    where total -> required. The initialValue, or the previously returned value of the function,
          currentValue -> required. The value of the current element,
          currentIndex -> optional. The array index of the current element,
          arr -> optional. The array object the current element belongs to,
          initialValue -> optional. A value to be passed to the function as the initial value
*/

// Input array
let arr6 = [10, 20, 30, 40, 50, 60];

// Callback function for reduce method
//sum is the initial value i.e 10 and num is the next value of initial value i.e 20 
/**
  first iter -> sum=10, num=20 -> sum+num=30
 second iter -> sum=30, num=30 -> sum+num=60 (here num=30 because it is the next value of sum)
 */
function sumofArray(sum, num) { 
    return sum + num;
}

function reduceFunc(item) {
    console.log(arr6.reduce(sumofArray));
}
reduceFunc(arr6);

//find the longest word in an array of strings
const findLongestWord = (arr) => {
    return arr.reduce(function(a, b) {
        return a.length > b.length ? a : b;
    }, ''); // Provide an initial value -> In your case, if the array is empty, the reduce function would throw an error because there's nothing to compare.
//To fix this, you can provide an initial value, like an empty string ''
};

const words = ["apple", "banana", "strawberry", "kiwi", "orange"];
console.log(findLongestWord(words)); // Output: strawberry