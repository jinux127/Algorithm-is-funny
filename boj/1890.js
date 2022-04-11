// 점프

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input;
const sol = (N,arr) =>{
    const map = Array.from(Array(N), () => new Array());
    let dp = Array.from(Array(N),() => new Array(N).fill(BigInt(0)));
    
    for(let i=0; i<N;i++){
        map[i] = arr[i].split(' ').map(Number);
    }
    
    dp[0][0] = 1;
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(dp[i][j] === 0 || (i === N-1 && j === N-1)) continue;
            else {
                let jump = map[i][j];
                let down = i + jump;
                let right = j + jump;

                if(down<N) dp[down][j] += BigInt(dp[i][j]);
                if(right<N) dp[i][right] += BigInt(dp[i][j]);
            }
        }
    }

    console.log(dp[N-1][N-1].toString());
}

sol(N,arr);
