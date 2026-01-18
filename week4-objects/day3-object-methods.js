let student = {
    name: "Amir",
    age: 12,
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};
console.log(student.greet());

let student1 = {
    name: "Amir",
    age: 12,
    greet: function () {
        return "Hello, my name is " + this.name;
    },
    getAge: function () {
        return "I am " + this.age + " years old";
    }
};
console.log(student1.greet());
console.log(student1.getAge());


