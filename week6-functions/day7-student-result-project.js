//create the data(array of objects)
let students = [
    { name: "Bola", score: 45 },
    { name: "Tunde", score: 70 },
    { name: "Ayo", score: 55 },
    { name: "Zainab", score: 30 }
];

//function to check pass or fail
function getResult(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

//function to add bonus
function addBonus(student) {
    student.score = student.score + 10;
    return student;
}

//process all students
for (let i = 0; i < students.length; i++) {
    let student = students[i];

    if (getResult(student.score) === "Fail") {
        addBonus(student);
    }

    console.log(
        student.name +
        " - " +
        student.score +
        " (" + getResult(student.score) + ")"
   );

}
