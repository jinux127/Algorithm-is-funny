// 블랙잭

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const [N,M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ') .map(Number);

const sol = (N,M,arr) =>{
    let max = 0;
    for(let i = 0; i<N-2;i++){
        for (let j = i+1; j < N-1; j++) {
            for (let k = j+1; k < N; k++) {
                let sum = arr[i] + arr[j] + arr[k];
                if(sum > max && sum <= M) max = sum;
            }
        }
    }
    console.log(max);
}

sol(N,M,arr);
