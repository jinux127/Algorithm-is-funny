// 가운데를 말해요

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input.map(Number);
const sol = (N,arr) =>{
    const result =[];
    const stk = [];
    for(let i=0; i<N; i++){
        stk.push(arr[i]);
        stk.sort((a,b)=> a-b);
        // console.log(stk)
        // console.log((stk.length/2).toFixed(0))
        result.push(stk[(stk.length/2).toFixed(0)-1]);
    }
    console.log(result.join('\n'));
}

sol(N,arr);
