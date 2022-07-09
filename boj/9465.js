// 스티커

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const T = parseInt(input.shift());
const sol = (T, input) =>{
    for(let i=0; i<T; i++){
        const n = parseInt(input.shift());
        const arr = new Array(2);
        arr[0] = input.shift().split(' ').map(Number);
        arr[1] = input.shift().split(' ').map(Number);
        
        

    }
}

sol(T, input);
