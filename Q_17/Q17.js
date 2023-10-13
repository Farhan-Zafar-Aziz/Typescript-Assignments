"use strict";
//Question 17
//print a message that 'you can invite only two people....
let names = ['Jamshed', 'Sadiq', 'Babar', 'Jabir', 'Hamzah'];
// remove guest from an array untill remain only two names
console.log("I can invite only two people."); //I can invite only two people.
names.pop();
names.pop();
names.pop();
console.log(names); //[ 'Jamshed', 'Sadiq' ]
//print message you are sorry you can`t invite them
console.log("I am so sorry that, I could not invite you yesterday in my Party.");
//I am so sorry that, I could not invite you yesterday in my Party.
//print message to each two people to let know you untill invited them
let arr1 = ['Jamshed', 'Sadiq'];
for (let arr2 = 0; arr2 < arr1.length; arr2++) {
    let arr3 = arr1[arr2];
    console.log(arr3, "You are untill invited at My Valima Ceremony.");
}
// Jamshed You are untill invited at My Valima Ceremony.
// Sadiq You are untill invited at My Valima Ceremony.
//remove two last names from list to have an ampty array
arr1.shift();
arr1.shift();
console.log(arr1); //[] empty array
