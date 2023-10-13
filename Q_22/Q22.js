"use strict";
//Question 22 

let arry = ["Bags", "watches", "clothes", "shoes",];
console.log(arry[1], arry[2], arry[3], arry[4]); //compiler is showing undefined becz off index
//start with 0 Not from 1 that mean the index of shoes is 3 not 4 
console.log(arry[0], arry[1], arry[2], arry[3]); //Bags watches clothes shoes

//index error 

console.log(arry[0]); //Bags
console.log(arry[1]); //watches
console.log(arry[2]); //clothes
console.log(arry[3]); //shoes
console.error(arry[4]); //undefined

//print all element of an array 

for (let arry1 = 0; arry1 < arry.length; arry1++) {
    let arry2 = arry[arry1];
    console.log(arry2);
}
// Bags
// watches
// clothes
// shoes
