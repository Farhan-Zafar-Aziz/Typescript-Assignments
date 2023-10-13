//Question 16 


let Names = ["Sadiq","Jabir","Khurshed"];

for(let newList = 0; newList < Names.length; newList++){
    let cards = Names[newList];
console.log(cards,"You are invited at My Birthday Party.")
}
// Sadiq You are invited at My Birthday Party.
// Jabir You are invited at My Birthday Party.
// Khurshed You are invited at My Birthday Party.
console.log("Hello Friends I found a big round table for dinner");//Hello Friends I found a big round table for dinner

//Add one guest biginning of an arry
let arr1 =["Sadiq","Jabir","Hamzah"];

arr1.unshift("Jamshed");
console.log(arr1);//[ 'Jamshed', 'Sadiq', 'Jabir', 'Hamzah' ]

//add new one middle of an arry

arr1.splice(2,0,"Babar");
console.log(arr1);//[ 'Jamshed', 'Sadiq', 'Babar', 'Jabir', 'Hamzah' ]

//add an element in the last of an array
arr1.push("Faraz");
console.log(arr1);//[ 'Jamshed', 'Sadiq', 'Babar', 'Jabir', 'Hamzah', 'Faraz' ]

let names =['Jamshed', 'Sadiq', 'Babar', 'Jabir', 'Hamzah', 'Faraz' ];

for(let arr2 = 0; arr2 < names.length; arr2++){
    let b = names[arr2];
    console.log(b,"You are invited at my Birthday Party.");
     }
    // Jamshed You are invited at my Birthday Party.
    // Sadiq You are invited at my Birthday Party.
    // Babar You are invited at my Birthday Party.
    // Jabir You are invited at my Birthday Party.
    // Hamzah You are invited at my Birthday Party.
    // Faraz You are invited at my Birthday Party.
    
