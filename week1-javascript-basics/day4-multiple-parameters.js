function login(username, password) {
    if (username === "admin" && password ==="1234") {
        return "Login successful"
    } else {
        return "Invalid login"
    }
}
console.log(login("admin", "1234"));

function fullName(firstName, lastName) {
    return firstName + " " +lastName
}
console.log(fullName("Adejoke", "Ojugbele"));

function studentRemark(score, attendance) {
    if (score >= 50 && attendance === true) {
        return "Pass"
    } else {
        return "Fail"
    }
}
console.log(studentRemark(60 , true));
