// 괄호

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const T = input.shift();

const sol = (input) =>{
    const result = [];
    for(const item of input){
        const stk = [];
        for(let i =0;i<item.length;i++){
            if(item[i] === '(') stk.push(item[i]);
            else {
                if(stk[stk.length-1] === '(') stk.pop();
                else stk.push(')');
            }
        }
        if(stk.length < 1) {
            result.push('YES');
        } else {
            result.push('NO');
        }
    }
    console.log(result.join('\n'));
}

sol(input);
