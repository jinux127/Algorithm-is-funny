// 큰 수 A+B

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const A = BigInt(input[0].split(' ')[0]);
const B = BigInt(input[0].split(' ')[1]);

console.log(String(A+B));