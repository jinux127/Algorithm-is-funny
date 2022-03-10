// 접미사 배열

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const S = input.shift();
const sol = (S) =>{
    const strArr = S.split('');
    const answer = [];
    const tmp =[];
    for(let i =0; i<S.length; i++){
        tmp.unshift(strArr.pop());
        answer.push(tmp.join(''));
    }

    console.log(answer.sort().join('\n').trim());
}

sol(S);
