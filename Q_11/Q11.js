"use strict";
// Question 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let Names = ["Sadiq", "Jabir", "Khurshed", "Jamshed", "Babar"];
console.log(Names); //[ 'Sadiq', 'Jabir', 'Khurshed', 'Jamshed', 'Babar' ]
console.log(Names[0]); //Sadiq
console.log(Names[1]); //Jabir
console.log(Names[2]); //Khurshed
console.log(Names[3]); //Jamshed
console.log(Names[4]); //Babar
// Question 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Czns = ["Sadiq", "Jabir", "Khurshed", "Jamshed", "Babar"];
for (let i = 0; i < Czns.length; i++) {
    let y = Czns[i];
    console.log(y, "Hello!");
}
let names1 = ["Sadiq  Assalam o Alaikum", "Jabir Assalam o Alaikum", "Khurshed Assalam o Alaikum", "Jamshed Assalam o Alaikum", "Babar Assalam o Alaikum"];
console.log(names1[0]); //Sadiq Assalam o Alaikum
console.log(names1[1]);
console.log(names1[2]);
console.log(names1[3]);
console.log(names1[4]);
