const myName="John"
const age=30
console.log(myName+" "+age); //outdates way of concatenation

//string interpolation
console.log(`My name is ${myName} and I am ${age} years old`)
const gameName=new String('Mario') //String object

console.log(gameName[0])
console.log(gameName.__proto__) 
console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.toUpperCase())

const newString=gameName.substring(0,3) //cannot have negative values
console.log(newString)

const newString2=gameName.slice(-8,2) //can have negative values
console.log(newString2)

const newString3="       Mario      "
console.log(newString3)
console.log(newString3.trim()) //removes the white spaces

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) //(old,new)

console.log(url.includes('hitesh')) //true

const myString="Hello-World"
console.log(myString.split('-')) //splits the string into an array

//more methods available on MDN documentation

/*string.localeCompare()-> The string.localeCompare() is an inbuilt method in JavaScript that is used to compare any two elements and returns a positive number if the reference string is lexicographically greater than the compare string and a negative number if the reference string is lexicographically smaller than the compare string and zero (0) if the compare and reference strings are equivalent. */
let str1 = "apple";
let str2 = "banana";
let result = str1.localeCompare(str2);
console.log(result); // -1 because apple is lexicographically smaller than banana

//find the number of vowels in a string
function countVowels(str) {
    const count=str.match(/[aeiou]/gi); //g->global, i->case insensitive (both are flags)
    return count ? count.length : 0;
}
console.log(countVowels('Hello World')) //3


function countVowels2(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
        count++;
        }
    }
    return count;
}
