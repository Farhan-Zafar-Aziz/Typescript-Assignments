"use strict";
//Question 18
//print non alphabatical array
let arry = ["Zafar", "Farhan", "Abid", "Tariq", "Jabir"];
//you can use for() loop for more shorthand code
console.log(arry[0]); //Zafar
console.log(arry[1]); //Farhan
console.log(arry[2]); //Abid
console.log(arry[3]); //Tariq               
//print array as alphabatical order
arry.sort();
console.log(arry); //[ 'Abid', 'Farhan', 'Jabir', 'Tariq', 'Zafar' ]
//print arry as reverse alphabatical order
arry.reverse();
console.log(arry); //[ 'Zafar', 'Tariq', 'Jabir', 'Farhan', 'Abid' ]
//print array reverse again to show it's original alphabatical order
arry.reverse();
console.log(arry); //[ 'Abid', 'Farhan', 'Jabir', 'Tariq', 'Zafar' ]
//sort again to show reverse alphabatical order
arry.sort();
console.log(arry); // [ 'Abid', 'Farhan', 'Jabir', 'Tariq', 'Zafar' ]
