// 균형잡힌 세상

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    const result = [];
    const open = ["(", "["];
    const close = [")", "]"];

    while(input.length){
        const stk = [];
        const str = input.shift();
        
        if(str === "."){
            break;
        } else {
            let isYes = true;
            for(let i=0; i<str.length;i++){
                if(open.includes(str[i])){
                    stk.push(str[i]);
                } else if(close.includes(str[i])){
                    const closeIndex = close.indexOf(str[i]);
                    const openIndex = open.indexOf(stk.pop());
                    if(closeIndex !== openIndex){
                        result.push("no");
                        isYes = false;
                        break;
                    }
                }
            }
            if(isYes){
                if(stk.length === 0) result.push("yes");
                else result.push("no");
            }
        }
    }
    console.log(result.join('\n'));
}

sol(input);
