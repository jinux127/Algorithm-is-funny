// 단어 뒤집기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();

const sol = (input) =>{
    const result = [];
    
    for(let i =0; i<input.length; i++){
        const str = input[i].split(/\s/);
        const strStk = [];
        for(let j=0; j<str.length; j++){
            let temp = "";
            for(let k =str[j].length-1; k>=0;k--){
                temp += str[j][k];
            }
            strStk.push(temp);
        }
        result.push(strStk.join(' '));
    }
    console.log(result.join('\n'));
}

sol(input);
