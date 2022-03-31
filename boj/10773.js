// 제로
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input.map(Number);
const sol = (N, arr) =>{
    const stk = [];
    for(const item of arr){
        if(item === 0){
            stk.pop();
        } else {
            stk.push(item);
        }
    }
    console.log(stk.reduce((a,cur)=>a+cur,0));
}

sol(N, arr);
