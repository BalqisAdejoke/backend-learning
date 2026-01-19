let student = {
    name: "Amir",
    score: 40,
    attendance: true,

    checkResult: function () {
        if (this.score >= 50 && this.attendance === true)  {
            return "Pass";
        } else {
            return "Fail";
        }
    } 
};
console.log(student.checkResult());

