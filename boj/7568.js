// 덩치

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n'); // vscode 테스트용

const N = Number(input.shift());
const xyArr = input.map(item => item.split(' ').map(Number));
const sol = (xyArr) =>{
    let result = [];
    for(let i =0; i<xyArr.length; i++){
        let count = 1;
        for(let j =0; j<xyArr.length; j++){
            if(i===j) continue;
            if(xyArr[i][0]<xyArr[j][0] && xyArr[i][1]<xyArr[j][1]) count++;
        }
        result.push(count);
    }
    console.log(result.join(' '));
}

sol(xyArr);
