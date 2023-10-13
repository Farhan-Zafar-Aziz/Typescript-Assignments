"use strict";
// Question 5
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_Name = "        Farhan          ";
console.log(person_Name); //         Farhan           
let Person_name = "\nFarhan";
console.log(Person_name); //Farhan
let Person_Name = "        \nFarhan        ";
console.log(Person_Name); //Farhan
let person_name = "\tFarhan";
console.log(person_name); //         Farhan
let persoN_name = "          \tFarhan           ";
console.log(persoN_name); //           Farhan 
