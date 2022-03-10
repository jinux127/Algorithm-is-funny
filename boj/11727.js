// 2xn 타일링 2

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = parseInt(input.shift());

const sol = (n) =>{
    const dp = new Array(1001);
    dp[1] = 1;
    dp[2] = 3;
    for(let i =3; i<=n; i++){
        dp[i] = (dp[i-1]+ 2*dp[i-2]) % 10007;
    }
    console.log(dp[n]);
}

sol(n);
