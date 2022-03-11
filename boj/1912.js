// 연속합

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = parseInt(input.shift());
const arr = [...input].map(Number);

const sol = (n,arr) =>{
    const dp = [];

    for(let i=0; i<arr.length; i++){
        arr[i] < dp[i-1]+arr[i] ? dp[i] = dp[i-1] + arr[i] : dp[i] = arr[i];
    }
    console.log(Math.max(...dp));


}

sol(n,arr);
 
