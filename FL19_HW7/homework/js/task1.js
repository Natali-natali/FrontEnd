

let firstNumber = prompt();
let secondNumber = prompt();
let numbers;
let arr;
let i;


if(isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Invalid input data');
} else if (firstNumber > secondNumber) {
    alert('Invalid input data');
}


numbers = [];
for (i = firstNumber; i <= secondNumber; i++) {
    numbers.push(i);
}
alert(
    `First number: ${firstNumber} 
    Second number: ${secondNumber}
    Numbers between: ${numbers} `
    );
    
