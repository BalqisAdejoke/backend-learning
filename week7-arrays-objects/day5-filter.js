let students = [
    { name: "Bola", score: 45 },
    { name: "Tunde", score: 78 },
    { name: "Sade", score: 90 },
    { name: "Kune", score: 30}
];
let passedStudents = students.filter(function (student) {
    return student.score >= 50;
});

console.log(passedStudents);
