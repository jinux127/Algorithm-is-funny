
// 세로읽기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용

let max = Math.max(...input.map(i=> i.length));
let result ="";
for (let i = 0; i < max; i++) {
    for (let j = 0; j < input.length; j++) {
        result += input[j][i] || "";
    }
}

console.log(result);

