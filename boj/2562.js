// 최댓값

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n').map(Number); // vscode 테스트용


function solution(numArr){
    let arr = JSON.parse(JSON.stringify(numArr));
    numArr.sort((a,b)=>b-a);
    console.log(numArr[0])
    console.log(arr.indexOf(numArr[0])+1);
}

solution(input);