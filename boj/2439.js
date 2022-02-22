// 별 찍기 - 2

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용



for (let i = 0; i < input[0]; i++) {
    let star = "";
    for(let j =input[0]-1; j>=0;j--){
        star += j <= i ? '*' : ' ';
    }
    console.log(star);
}