"use strict";
// Question 14
//Guest list
let friends = ["Sadiq", "Jabir", "Hamzah"];
console.log(friends[0]); //Sadiq
console.log(friends[1]); //Jabir
console.log(friends[2]); //Hamzah
//Invitition list
let invited = ["Sadiq", "Jabir", "Hamzah"];
for (let invite = 0; invite < invited.length; invite++) {
    let cards = invited[invite];
    console.log(cards, "You are invited at my Valima Ceremony.");
}
// Sadiq You are invited at my Valima Ceremony.
// Jabir You are invited at my Valima Ceremony.
// Hamzah You are invited at my Valima Ceremony.
//Question 15 
//changing guest list replacing one guest 
let invite1 = ["Sadiq", "Jabir", "Hamzah"];
invite1.splice(1, 1, "Khurshed");
console.log(invite1); //[ 'Sadiq', 'Khurshed', 'Hamzah' ]
//Print new invitation statement
let Newinvite = ["Sadiq", "Khurshed", "Hamzah"];
for (let newList = 0; newList < Newinvite.length; newList++) {
    let newGuests = Newinvite[newList];
    console.log(newGuests, "You are invited in my Wedding Valima at my hometown Umarkot.");
}
