// 분수찾기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


let x = input[0];
let group = 2;
let groupNo = 1;

// 짝수 그룹이면 분자가 오름차순 분모가 내림차순, 홀수면 그 반대
// 그룹의 개수 1번 그룹: 1, 2번 그룹 2 3번그룹이면 3...
for (; groupNo < x; group++) {
    groupNo += group
}

group -=1;

let beforeGroupCount = groupNo - group; //전그룹 카운트
let no = x - beforeGroupCount; // 해당 그룹에서 몇번짼지

group % 2 === 0 ? console.log(`${no}/${group-no+1}`) : console.log(`${group-no+1}/${no}`);


