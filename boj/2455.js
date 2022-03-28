// 지능형 기차

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    const arr = new Array(input.length);

    for(let i=0; i<input.length; i++){
        arr[i] = input[i].split(' ').map(Number);
    }
    const dp = [];
    dp[0] = arr[0][1];

    for(let i=1; i<arr.length; i++){
        dp[i] = dp[i-1] + arr[i][1] - arr[i][0]
    }

    console.log(Math.max(...dp));
}

sol(input);
