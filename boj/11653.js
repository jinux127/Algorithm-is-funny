// 소인수분해

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


const N = input[0];


const sol = (N) =>{
    let divisor = 2;
    while (N !== 1) {
        if(N%divisor === 0){
            console.log(divisor);
            N/=divisor;
        } else {
            divisor++;
        }
    }

}

sol(N);