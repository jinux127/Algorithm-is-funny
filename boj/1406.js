// 에디터
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const str = input.shift();
const M = parseInt(input.shift());

const sol = (str, M, input) =>{
    const stk = str.split('');
    const stk2 = [];
    for(let i = 0; i<input.length;i++){
        // console.log(input[i]);
        if (input[i] === 'P') {
            i++;
            // console.log(input[i]);
            stk.push(input[i]);
        } else if (input[i] === 'L'){
            if(stk[stk.length-1] !== undefined) stk2.push(stk.pop());
        } else if (input[i] === 'D'){
            if(stk2[stk2.length-1] !== undefined) stk.push(stk2.pop());
        } else if (input[i] === 'B'){
            stk.pop();
        }
        // console.log(`stk:${stk}, stk2:${stk2}`);
    }
    // console.log(stk2.length)
    while(stk2.length){
        stk.push(stk2.pop());
    }

    console.log(stk.join(''));
}

sol(str, M, input);
