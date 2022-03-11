// 이친수

// dp[i][0] + dp[i][1] = dp[i-1][0]*2 +dp[i-1[1]

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const N = input.shift();

const sol = (N) =>{
    const dp = Array.from(Array(91), () => new Array(2).fill(0));
    dp[1][1] = 1;
    dp[2][0] = 1;

    for(let i=3; i<=N; i++){
        dp[i][0] = BigInt(dp[i-1][0]) + BigInt(dp[i-1][1]);
        dp[i][1] = BigInt(dp[i-1][0]);
    }

    console.log((dp[N][0] + dp[N][1]).toString());


}

sol(N);
