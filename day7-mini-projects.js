let age = 21;
let hasPermission = true;
let name = "Adejoke";

if (!name){
    console.log("Name is required");
} else if (age >= 18 && hasPermission){
    console.log("Access granted");
} else if (age <18 && hasPermission){
    console.log("Permission granted, but age resriction applies");
} else {
    console.log("Access denied");
}

