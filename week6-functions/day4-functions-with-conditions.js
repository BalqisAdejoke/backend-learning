function checkResult(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(70));
console.log(checkResult(40));

function canVote(age) {
    if (age >= 18) {
        return "Can vote";
    } else {
        return "Too young to vote";
    }
}

console.log(canVote(20));
console.log(canVote(15));

