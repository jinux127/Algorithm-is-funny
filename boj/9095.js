// 1,2,3 더하기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const T = input.shift();

const sol = (input) =>{
    const dp = new Array(11);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    const result = [];
    
    
    for(let i=4; i<= 10; i++){
        dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
    }

    for(let item of input){
        console.log(dp[item]);
    }
}

sol(input);
