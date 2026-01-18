// return statements
//difference between return and console.log
function add(a, b) {
    console.log(a + b);   
}   // shows result on screen but cannot reuse the value

function add(a, b) {
    return a + b;
}
//let result = add(2, 3);
//console.log(result);  //sends value back,can be reused 

//once javascript sees return, it stops the function immediately
//example
function test() {
    return "Done";
    console.log("This will not run");
}

function checkScore(score) {
    if (score >= 50) {
        return "Pass"
    } else {
        return "Fail"
    }
}

let result = checkScore(70);
console.log(result);

//practise task
function eligibleAge(age) {
    if (age >= 18) {
        return "Adult"
    } else {
        return "Minor"
    }
}
 let status = eligibleAge(16);
 console.log(status);
 