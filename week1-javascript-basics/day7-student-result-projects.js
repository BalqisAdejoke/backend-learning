function studentResult(score, attendance, gradeLetter) {
    if (attendance === false) {
        return "Disqualified due to poor attendance";
}
    if (score < 50) {
        return "Failed due to low score";
    } 

    switch (gradeLetter) {
         case "A":
             return "Excellent performance";
         case "B":
            return "Very good performance";
        case "C":
            return "Good perfomance";
        case "D":
            return "Passed";        
        default:
            return "Passed, but grade unclear";
            
        }
    } 
    
        
    
console.log(studentResult(65, true, "B"));

//in backend ,we usually check disqualifying conditions first
