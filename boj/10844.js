// 쉬운 계단 수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);


const N = input.shift();
const MODNUM = 1000000000;
const sol = (N) =>{
    const dp = Array.from(Array(101),() => new Array(11).fill(0));
    // dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]

    let result = 0;
    for(let i=1; i<10; i++){
        dp[1][i] = 1;
    }

    for(let i=2; i<=N; i++){
        for(let j=0; j<=9; j++){
            if(j==0) dp[i][j] = dp[i-1][j+1] % MODNUM;
            else if(j==9) dp[i][j] = dp[i-1][j-1] % MODNUM;
            else dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1]) % MODNUM;
        }
    }

    for(let i=0; i<10; i++){
        result += dp[N][i];
    }

    console.log(result % MODNUM);
}

sol(N);
