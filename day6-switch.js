let day = "Monday"
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is close");
        break;
    default:
        console.log("Another day");
        
}
function CheckRole(role) {
    switch (role) {
        case "admin":
           return "Full access";
        case "user":
            return "Limited access";
        default:
            return "No access";
    }
}
console.log(CheckRole("admin"));

function trafficLight(color) {
    switch (color) {
        case "red":
            return "Stop";
        case "Yellow":
            return " Get Ready";
        case "green":
            return "Go";
        default:
            return "Invald color";
    }
}
console.log(trafficLight("green"));

function gradeLetter(letter) {
    switch (letter) {
        case "A":
            return "Excellent";
        case "B":
            return "Very good";
        case "C":
            return "Good";
        case  "D":
            return "Pass";
        case "F":
            return "Fail";          
        default:
            return "Invalid grade";
    }
}
console.log(gradeLetter("B"));

