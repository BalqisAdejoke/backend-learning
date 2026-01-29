let students = [
    { name: "Bola", age: 12, score: 75 },
    { name: "Tunde", age: 14, score: 88 },
    { name: "Sade", age: 13, score: 92 }
];

students.forEach(function (student) {
    console.log(student.name + " scored " + student.score);
});
