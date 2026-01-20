let student = {
    name: "Aisha",
    age: 12,
    passed: true
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

let car = {
    brand: "Toyota",
    year: 2020,
    isElectric: false
};
for (let key in car){
    console.log(key + ": " + car[key]);
}