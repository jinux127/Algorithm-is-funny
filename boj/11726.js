// 2xn 타일링

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = parseInt(input.shift());

const sol = (n) =>{
    const dp = new Array(1001);
    dp[1] = 1;
    dp[2] = dp[1]+1;
    for(let i =3; i<=n;i++){
        dp[i] = (dp[i-2] + dp[i-1]) % 10007;
    }
    console.log(dp[n]);
}

sol(n);
