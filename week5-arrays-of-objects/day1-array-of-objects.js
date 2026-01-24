let students = [
    { name: "Ayo", age: 10, score: 80 },
    { name: "Bola", age: 12, score: 60 },
    { name: "Tunde", age: 11, score: 90 }
];
 console.log(students);

 for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
 }
 
 let passedStudents = students.filter(function (student) {
    return student.score >= 50;
 });
 
 console.log(passedStudents);
 
 let boostedStudents = students.map(function (student) {
    return{
        name: student.name,
    score: student.score + 10
    };
 });

 console.log(boostedStudents);
 
 let passedAndBoosted = students
   .filter(function (student) {
    return student.score >= 50;
 })
  .map(function (student) {
    return {
        name: student.name,
        score: student.score + 5
    };
  });

  console.log(passedAndBoosted);
  
  let foundStudent = students.find(function (student) {
    return student.name === "John";
  });

  console.log(foundStudent);
  