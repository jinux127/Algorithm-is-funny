// 달팽이는 올라가고 싶다

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split(' '); // vscode 테스트용

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil((V - B) / (A-B)));

// let arr = input[0].split(' ').map(Number)

// let A = arr[0];
// let B = arr[1];
// let V = arr[2];

// let cnt = 1;
// let height = 0;

// while(true){
//     height += A;
//     if(height>=V) break;
//     height -= B;
//     cnt++;
// }

// console.log(cnt);