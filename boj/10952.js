// A+B - 5

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용
let i =0;
while(true){
    let numbers = input[i].split(' ');
    
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    if(num1 === 0 && num2 === 0) break;

    console.log(`${num1 + num2}`);
    i++;
}