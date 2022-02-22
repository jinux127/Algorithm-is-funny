// 주사위 세개

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용

let [A, B, C] = input[0].split(' ').sort();


if (A === B && B === C) {
    console.log(10000 + A * 1000);
} else if (A === B || B === C) {
    console.log(1000 + B * 100);
} else {
    console.log(C * 100);
}