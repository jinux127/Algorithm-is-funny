// 오븐 시계

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용


let h = parseInt(input[0].split(' ')[0]);
let mm = parseInt(input[0].split(' ')[1]);
let time = parseInt(input[1])

h = parseInt((h*60 + mm + time)/60);
mm = parseInt((h*60 + mm + time)%60);

console.log(h >= 24 ? h - 24 : h, mm);