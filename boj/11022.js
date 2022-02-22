// A+B - 8

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용


for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ').map(Number);
    console.log(`Case #${i}: ${numbers[0]} + ${numbers[1]} = ${numbers[0]+numbers[1]}`);
}

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}