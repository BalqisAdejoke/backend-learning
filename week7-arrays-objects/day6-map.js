let students = [
    { name: "Bola", score: 45 },
    { name: "Tunde", score: 78 },
    { name: "Sade", score: 90 }
];

let updatedStudents = students.map(function (student) {
    return{
        name: student.name,
        score: student.score + 5
    };
});

console.log(updatedStudents);
