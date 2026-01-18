//function is a reuseable block of code
function greet() {
    console.log("Hello, welcome!");
}
greet();

//function with parameters
function greetUser(name) {
    console.log("Hello " + name);
} 
greetUser("Adejoke")
function sayHello() {
    console.log("Hello, welcome to backend learning!");
}
sayHello();

function checkAge(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}
checkAge(20);