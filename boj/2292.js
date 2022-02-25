// 벌집

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용

let range = 1;
let block = 1;
while(block < input){
    block += 6 * range;
    range ++;
}

console.log(range);