"use strict";
//Question 32
//Print an array with five usernames
let current_users = ["Sadiq", "Khurshed", "Babar", "Jabir", "Abid"];
let new_users = ["Jamshed", "Faraz", "Allahrakhyo", "Jabir", "Abid"];
//The logic i used is that I am checking new user name one by one through nested loop
//to solve the problem of case senstive I used lowercase method to change user name into lowercase
for (let arry = 0; arry < new_users.length; arry++) {
    let flag = false;
    for (let arry1 = 0; arry1 < current_users.length; arry1++) {
        if (new_users[arry].toLowerCase() == current_users[arry1].toLowerCase()) {
            flag = true;
        }
    }
    if (flag) {
        console.log(`The username '${new_users[arry]}' is already taken.Please enter a new username.`);
    }
    else {
        console.log(`The usename '${new_users[arry]}' is available.`);
    }
}
