//  문자열 반복

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const T = parseInt(input.shift());
const testCase = input;

const sol = (T, testCase) =>{
    const result = [];
    for(const item of testCase){
        const [R, S] = item.split(' ');
        const temp = [];
        for(let i=0; i<S.length; i++){
            for(let j=0; j<parseInt(R); j++){
                temp.push(S[i]);
            }
        }
        result.push(temp.join(''));
    }

    console.log(result.join('\n'));
}

sol(T, testCase);
