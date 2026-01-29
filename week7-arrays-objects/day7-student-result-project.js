let students = [
    { name: "Bola", score: 45 },
    { name: "Tunde", score: 78 },
    { name: "Sade", score: 90 },
    { name: "Kune", score: 30}
];

//pick students who passed
let passedStudents = students.filter(function (student) {
    return student.score >= 50;
});

// Add bonus marks to passed dtudents
let finalStudents = passedStudents.map(function (student) {
    return{
            name: student.name,
            score: student.score + 5
        };
});

console.log(finalStudents);
