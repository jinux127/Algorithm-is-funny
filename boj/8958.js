// OX퀴즈

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

console.log(input)
let stack = [];
let sum = 0;
for (let i = 1; i <= input[0]; i++) {
    for(let j =0; j<=input[i].length; j++){
        input[i][j] == 'O' ? stack.push('O') : stack = [];
        sum += stack.length;
    }
    console.log(sum);
    sum = 0;
    stack = [];
}