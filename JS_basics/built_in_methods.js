
//Array.reduce() method -> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
(accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

//split() method -> The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); //slice(0,2) -> 0 to 2 (2 excluded) and  Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]

//splice() ->The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

/**
syntax: splice(start)
        splice(start, deleteCount)
        splice(start, deleteCount, item1)
 */


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // (1,0,'Feb') -> 1 is the index where we want to add 'Feb' and 0 is the number of elements to be removed
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



//filter() -> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);


// map() ->The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array2 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array2.map((x) => x * 2);

console.log(map1);// Expected output: Array [2, 8, 18, 32]

//join() -> The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // Expected output: "Fire,Air,Water"

console.log(elements.join(''));// Expected output: "FireAirWater"

console.log(elements.join('-')); // Expected output: "Fire-Air-Water"


//sort() -> The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

/**
    syntax: sort()
            sort(compareFn)

 */
const months2 = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months2);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array3 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array3);
// Expected output: Array [1, 100000, 21, 30, 4]

const numArray=[40,1,5,200,1000,10]

function compareNum(a,b){
    return a-b
}

console.log(numArray.sort()) // Expected output: Array [1, 10, 1000, 200, 40, 5];

/**
  By default, .sort() converts elements to strings and sorts them lexicographically (dictionary order).
This means:
"1" comes before "10", because "1" is smaller than "10" in string comparison.
"1000" comes before "200" because "1" (first character of "1000") is smaller than "2" (first character of "200").
"40" comes after "200" because "4" (from "40") is greater than "2" (from "200").
 */


console.log(numArray.sort(compareNum)) // Expected output: Array [1, 5, 10, 40, 200, 1000];

//working of compareNum function
/*
    If a - b is negative, a is placed before b.
    If a - b is positive, b is placed before a.
    If a - b is 0, their order remains unchanged.

    example: compareNum(40, 1) → 40 - 1 = 39 (positive)  so 1 comes before 40
 */


//for other methods refer to mdn web docs