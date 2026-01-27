let student = {
    name: "Bola",
    score: 45
}

function checkStudentResult(student) {
    if (student.score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkStudentResult(student));

function addBonus(student) {
    student.score = student.score + 10;
    return student;
}

let updatedStudent = addBonus(student);
console.log(updatedStudent);
