// 스택

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const N = input.shift();

const sol = (N,input) =>{
    const stk = [];
    let result = "";
    for(let i=0; i<input.length; i++){
        if(input[i] === 'push'){
            i++;
            stk.push(input[i]);
        } else if(input[i] === 'pop'){
            if(stk.length > 0) result += `${stk.pop()}\n`;
            else result += `-1\n`;
        } else if(input[i] === 'size'){
            result += `${stk.length}\n`;
        } else if(input[i] === 'empty'){
            if(stk.length > 0) result += `0\n`;
            else result += `1\n`;
        } else if(input[i] === 'top'){
            if(stk.length > 0) result += `${stk[stk.length-1]}\n`;
            else result += `-1\n`;
        }
    }
    console.log(result);
}

sol(N,input);
