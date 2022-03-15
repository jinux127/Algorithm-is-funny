// 1, 2, 3 더하기 5
// todo: 시간초과 해결
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const T = input.shift();
const arr = [...input].map(Number);

const dp = Array.from(Array(100001), ()=>new Array(4).fill(0));
const MODNUM = 1000000009;

dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

const dpFunc = (num) =>{

    for(let i=4; i<=num; i++){
        dp[i][1] = (dp[i-1][2] + dp[i-1][3]) % MODNUM;
        dp[i][2] = (dp[i-2][1] + dp[i-2][3]) % MODNUM;
        dp[i][3] = (dp[i-3][1] + dp[i-3][2]) % MODNUM;
    }

    return (dp[num][1] + dp[num][2] + dp[num][3])% MODNUM;
}

const sol = (T,arr) =>{

    const result = [];

    for(let i =0; i<arr.length; i++){
        result.push(dpFunc(arr[i]));
    }

    console.log(result.join('\n'));
    
}

sol(T,arr);
