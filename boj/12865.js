// 평벙한 배낭

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const [N, K] = input.shift().split(' ').map(Number);
const arr = input;

const sol = (N,K,arr) =>{
    const maxArr = Array.from(Array(N+1),()=>new Array(K+1).fill(0));
    const arr2 = arr.map(str => str.split(' ').map(Number));
    arr2.unshift(null);

    for(let i=1; i<=N; i++){
        const [weight, value] = arr2[i];
        for(let j=0; j<=K; j++){
            if(j<weight){
                maxArr[i][j] = maxArr[i-1][j];
            } else {
                maxArr[i][j] = Math.max(maxArr[i-1][j],maxArr[i-1][j-weight] + value);
            }
        }
    }
    console.log(maxArr[N][K]);
}

sol(N,K,arr);
