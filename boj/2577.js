// 숫자의 개수

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용

let num = String(input[0] * input[1] * input[2]);

function solution(arr){
    for(let i=0; i<10; i++){
        console.log(num.split(i + '').length - 1);
    }
}

solution(input)