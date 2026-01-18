//list of student ages
let ages = [12, 18, 25, 10, 30];

//step 1: keep only adults
let adults = ages.filter(function (age) {
    return age >= 18;
});
//step 2: add 2 years to each adult
let updatedAges = adults.map(function (age) {
    return age + 2;
});
console.log(updatedAges);

let scores = [30, 50, 70, 40, 90];
let passedScores = scores.filter(function (score) {
    return score >=50;
});
let updatedScores = passedScores.map(function(score) {
    return score + 5;
});
console.log(updatedScores);
