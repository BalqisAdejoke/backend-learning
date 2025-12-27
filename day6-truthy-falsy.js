//Truthy and falsy values 
//falsy values; 0 "" null underfined NaN
//Examples 
let name = "";
if (name){
    console.log("Name exists");
} else {
    console.log("No name provided");
}
//truthy values; "Hello" 1 -5 true [] {}
//Example
let user = "Adejoke"
if (user){
    console.log("User exists");
}

let email;
if (!email){
    console.log("Email is required");
}
let username = 0;
if (username){
    console.log("Welcome user");
} else {
    console.log("Please enter username");
}