// 계단 오르기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input.map(Number);

const sol = (N, arr) =>{
    // dp[0] = arr[0]
    // dp[1] = max (arr[0]+arr[1],arr[1])
    // dp[2] = max(arr[1] +arr[2], arr[0]+arr[2])
    const dp = [];

    dp[0] = arr[0];
    dp[1] = Math.max(arr[0] + arr[1], arr[1]);
    dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);

    for(let i=3; i<=N; i++){
        dp[i] = Math.max(arr[i] + dp[i-2], arr[i] + arr[i-1] + dp[i-3]);
    }

    console.log(dp[N-1]);
}

sol(N, arr);
