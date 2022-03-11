// 가장 긴 증가하는 부분 수열

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const size_A = parseInt(input.shift());
const arr_A = [...input].map(Number);
const sol = (size_A, arr_A) =>{
    const dp = new Array(size_A).fill(1);
    for(let i=0; i<size_A; i++){
        for(let j=i-1; j>=0;j--){
            if(arr_A[j]<arr_A[i]){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    console.log(Math.max(...dp));
}

sol(size_A, arr_A);
