// 스택 수열

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const n = input.shift();

const sol = (input,n) =>{
    const stk = [];
    const answer = [];
    let i = 1;
    let isNo = false;
    for(const item of input){
        for( ; i<=item; i++){
            stk.push(i);
            answer.push('+');
        }
        if(stk[stk.length-1] == item){
            stk.pop();
            answer.push('-');
        } else {
            console.log("NO");
            isNo = true;
            break;
        }
    }

    !isNo ? console.log(answer.join('\n')): null;
}

sol(input,n);
