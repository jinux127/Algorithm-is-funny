// 평균

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용


const N = input[0];
let sum = input[1].split(' ').map(Number);
let M = Math.max(...sum)

console.log(sum.reduce((acc,cur)=>acc += cur/M * 100 ,0)/N)
