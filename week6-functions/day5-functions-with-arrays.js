function sumNumbers(numbers) {
    let total = 0; 

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

let result = sumNumbers([10, 20, 30]);
console.log(result);

function countPassed(scores) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 50) {
            count++;
        }
        
    }
    return count;
}

console.log(countPassed([40, 60, 80, 30, 90]));
