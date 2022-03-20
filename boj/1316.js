// 그룹 단어 체커

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input;
const sol = (N, arr) =>{
    let count = 0;
    for(let i=0; i<arr.length; i++){
        const stk =[];
        const str = arr[i].split(['']);
        let flag = true; // 그룹 단어 true;
        for(let j=0; j< str.length; j++){
            if(stk.indexOf(str[j]) === -1){ // 새로운 값
                stk.push(str[j]);
            } else { 
                if(stk.indexOf(str[j]) !== stk.length - 1) { // 새로운 값이 아닐 경우
                    flag = false;
                    break;
                }
            }

        }
        flag ? count ++ : null;
    }

    console.log(count)
}

sol(N, arr);
