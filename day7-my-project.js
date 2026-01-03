let studentName = "Amirah"
let scrore = 60;
let isRegistered = true;
let attendance = "present";

if (studentName ){
    console.log("Student name is required");
} else if (score >= 55 && isRegistered || attendance === "present"){
    console.log("Student is eligible");
} else {
    console.log("Student is not eligible");
}