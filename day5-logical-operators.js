//logical operators(&&,||)
//let age = 20;
//let hasID = true;

//if (age >= 18 && hasID === true){
  //  console.log("Access granted");
//} else {
  //  console.log("Access denied");
//}
let isStudent = false;
let isStaff = true;

if (isStudent || isStaff){
    console.log("You can enter");
} else {
    console.log("You cannot enter");
}
let age = 17;
let hasPermission = true;

if (age >= 18 || hasPermission === true){
    console.log("You are allowed");
} else {
    console.log("You are not allowed");
}