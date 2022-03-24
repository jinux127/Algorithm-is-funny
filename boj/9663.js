// N-Queen

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input[0]);
const sol = (N) =>{
    const arr = new Array(N);
    const visited = new Array(N).fill(false);
    let result = 0;
    const dfs = (idx) =>{

        if(idx === N){
            result++;
            return;
        }

        for(let i=0; i<N; i++){
            let flag = true;
            arr[idx] = i;
            for(let j=0; j<idx; j++){
                if(arr[idx] === arr[j] || idx - j === Math.abs(arr[idx]-arr[j])){
                    flag = false;
                }
            }
            if(flag) dfs(idx + 1);
            
        }
    }

    dfs(0);

    console.log(result);
}

sol(N);
