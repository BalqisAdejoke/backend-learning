const config = require("./config");
const math = require("./math");

let score1 = 40;
let score2 = 35;

let totalScore = math.add(score1, score2);

console.log("Welcome to", config.appName);
console.log("Total Score:", totalScore);
console.log("Running on port", config.port );



