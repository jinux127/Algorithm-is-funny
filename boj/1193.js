// 분수찾기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


let line = 0;
let x = input[0];

console.log(x)

while(x>0){
    line++;
    x = x - line;
}

console.log(x,line)

line % 2 === 0 ? console.log(`${line-x}`) : console.log(`${line+x}`);


