// 부녀회장이 될테야

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용

const T = input.shift();
const k = []; //층
const n = []; // 호

while(input.length>0){
    k.push(input.shift());
    n.push(input.shift());
}


function sol(k,n){
    const house = Array.from({length:k+1},()=>new Array(n).fill(0));
    for (let i = 1; i <= n; i++) {
        house[0][i] = i;
    }
    for (let i = 1; i <= k; i++) {
        for(let j=1; j<=n;j++){
            house[i][j] = house[i-1][j]+house[i][j-1];
        }
    }
    console.log(house[k][n]);
}

for (let i = 0; i < T; i++) {
    sol(k.shift(),n.shift());
}
