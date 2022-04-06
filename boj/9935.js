// 폭발 문자열
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const str = input[0];
const target_str = input[1];
const CLEARTEXT = "FRULA";
const sol = (str, target_str) =>{
    let arr = str.split('');
    let stk1 = [];
    
    for(let j=0; j<arr.length; j++){
        stk1.push(arr[j]);
        if(stk1.length>= target_str.length){
            let isBomb = true;
            for(let i=1; i<=target_str.length;i++){
                if(stk1[stk1.length-i] !== target_str[target_str.length - i]){
                    isBomb = false;
                }
            }
            if(isBomb){
                for(let i=0;i<target_str.length;i++){
                    stk1.pop();
                }
            }
        }
    }

    stk1.length ===0 ? console.log(CLEARTEXT) : console.log(stk1.join(''));
}

sol(str, target_str);
