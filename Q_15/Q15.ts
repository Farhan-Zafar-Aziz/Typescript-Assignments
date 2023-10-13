//Question 15 

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//changing guest list replacing one guest 

let invite1 = ["Sadiq","Jabir","Hamzah"];
invite1.splice(1,1,"Khurshed");
console.log(invite1);//[ 'Sadiq', 'Khurshed', 'Hamzah' ]
 
//Print new invitition statement

let Newinvite = ["Sadiq","Khurshed","Hamzah"];

for(let newList = 0; newList<Newinvite.length; newList++){
    let newGuests = Newinvite[newList];
    console.log(newGuests,"You are invited in my Wedding Valima at my hometown Umarkot.")
}
// Sadiq You are invited in my Wedding Valima at my hometown Umarkot.        
// Khurshed You are invited in my Wedding Valima at my hometown Umarkot.     
// Hamzah You are invited in my Wedding Valima at my hometown Umarkot.



    






