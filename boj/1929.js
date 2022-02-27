// 소수 구하기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const [M,N] = input[0].split(' ').map(Number);

const sol = (M,N) =>{
    const primeArr = isPrime(N);
    for(let i = M; i<=N;i++){
        primeArr[i] ? console.log(i) : null;
    }
}

const isPrime = (num) =>{
    const arr = new Array(num+1).fill(true);
    arr.splice(0,2, false,false);
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(arr[i]){
            for(let j = i*i; j<=num; j+=i ){
                arr[j] = false;
            }
        }
    }

    return arr;
}

sol(M,N);