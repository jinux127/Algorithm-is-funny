// 후위 표기식2

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const N = Number(input.shift());
const expression = input.shift();
const numArr = input.map(Number);

const sol = (N,expression,numArr) =>{
    const alphabetObj = {};
    const stk = [];
    const command = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };      
    
    for(let i=0;i<numArr.length;i++){
        alphabetObj[String.fromCharCode(65+i)] = numArr[i];
    }

    for(let i=0; i<expression.length;i++){
        if (expression[i] >= 'A') stk.push(alphabetObj[expression[i]]);
        else {
            const b = stk.pop();
            const a = stk.pop();
            stk.push(command[expression[i]](a,b));
        }
    }

    console.log(stk[0].toFixed(2));
}

sol(N,expression,numArr);