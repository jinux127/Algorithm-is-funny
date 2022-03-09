// 요세푸스 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const N = input.shift();
const K = input.shift();

const sol = (N,K) =>{
    const arr = new Array(N);
    const result =[];
    for(let i =1; i<=N;i++){
        arr[i-1] = i;
    }
    while(arr.length){
        for(let i=0; i<K; i++){
            arr.push(arr.shift());
        }
        result.push(arr.pop());
        
    }
    console.log(`<${result.join(', ')}>`)

}

sol(N,K);
