let students = [
    { name: "Bola", score: 65},
    { name: "Tunde", score: 95},
    { name: "Ayo", score: 45},
    { name: "Zainab", score: 80},
];

let passedStudents = students.filter(function (student) {
    return student.score >= 50;
});

console.log("Passed students:", passedStudents);

let updatedScores = students.map(function (student) {
  return {
    name: student.name,
    score: student.score + 5
  };
});

console.log("Updated scores:", updatedScores);

let foundStudent = students.find(function (student) {
  return student.name === "Tunde";
});

console.log("Found student:", foundStudent);


