let student = {
    name: "Aisha",
    score: 65,
    attendance: true 
};

if (student.score >= 50 && student.attendance === true) {
    console.log("Student passed");
} else {
    console.log("Student failed");
}

for (let key in student) {
    console.log(key + ": " + student [key]);
}