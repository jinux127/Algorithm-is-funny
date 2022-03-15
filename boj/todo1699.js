// 제곱수의 합

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const N = parseInt(input.shift());

const sol = (N) =>{
    let count = 0;
    const arr = [];
    for(let i=0;i<=N;i++){
        arr.push(i);
    }

    for(let i=1;i<=N;i++){
        for(let j=1; j**2<=i;j++){
            arr[i]=Math.min(arr[i],arr[i-j**2]+1);
        }
    }
    
}

sol(N);
