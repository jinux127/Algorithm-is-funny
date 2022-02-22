// 나머지

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n').map(Number); // vscode 테스트용

let result = input.map(x=>x % 42);
let stack = [];

result.forEach(ele => {
    if(stack.indexOf(ele) === -1) stack.push(ele)
});

console.log(stack.length)