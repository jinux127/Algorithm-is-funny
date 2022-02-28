// 네 번째 점

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const arr = input.map(item=>item.split(' ').map(Number));

const sol = (arr) =>{
    let x = arr.map(item=>item[0]).sort((a,b)=>a-b);
    let y = arr.map(item=>item[1]).sort((a,b)=>a-b);
    let resultX = [];
    let resultY = [];

    for(let i =0; i<arr.length; i++){
        resultX[0] === x[i] ? resultX.pop(): resultX.push(x[i]);
        resultY[0] === y[i] ? resultY.pop(): resultY.push(y[i]);
    }

    console.log(resultX[0],resultY[0]);


}

sol(arr);
