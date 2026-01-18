// A list of numbers 
let numbers = [5, 10, 15, 20, 25];

//we want only numbers greater than 15
let bigNumbers = numbers.filter(function (number) {
    return number > 15;
});
// show result
console.log(bigNumbers);

let scores = [30, 45, 50, 70, 90];
let passedStudents = scores.filter(function (score) {
    return score >= 50;
});
console.log(passedStudents);

let ages = [12, 18, 25, 10, 30];
let eligibleAge = ages.filter(function (age) {
    return age >=18;
});
console.log(eligibleAge);
