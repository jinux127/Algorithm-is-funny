// 알파벳 찾기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

let str = '';
for (let i = 97; i <= 122; i++) {
    if(i==97) str += input[0].indexOf(String.fromCharCode(i));
    else str += " " + input[0].indexOf(String.fromCharCode(i));
}
console.log(str);