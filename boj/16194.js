// 카드 구매하기2

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const numArr = input[0].split(' ').map(Number);

const sol = (N, numArr) =>{
    let dp = [0,...numArr];

    for(let i=2; i<=N; i++){
        for(let j=1; j<i; j++){
            dp[i] = Math.min(dp[i], (dp[i-j]+dp[j]));
        }
    }
    
    console.log(dp[N]);
}

sol(N, numArr);
