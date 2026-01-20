let student = {
    name: "Amir",
    score: 70,

    greet: function () {
        return "Helllo, my name is " + this.name;
    },

    checkScore: function() {
        if (this.score >= 50) {
            return "I passed";
        } else {
            return "I failed";
        }
    }
};

console.log(student.greet());
console.log(student.checkScore());

