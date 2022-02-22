// 별 찍기 - 1

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용

let star = "";

for (let i = 0; i < input[0]; i++) {
    star += "*"
    console.log(star);
}