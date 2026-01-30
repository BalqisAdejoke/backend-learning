//function greet(name) {
  //  return "Hello " + name;
//}

//export the function
//module.exports = greet;


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

//export many things 
module.exports = {
    add,
    multiply
};