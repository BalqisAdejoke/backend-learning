function checkAge(age) {
    if (age >= 18) {
        return "Allowed"
    } else {
        return "Not allowed"
    }
}
console.log(checkAge(20));

function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login successful";
    } else {
        return "Invalid details"
    }
}
console.log(login("admin", "1234"));

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(5));

function gradeCheck(score) {
    if (score >= 70 ) {
        return "Excellent"
    } else if (score >= 50) {
        return "Pass"
    } else {
        return "Fail"
    }
}
console.log(gradeCheck(65));
