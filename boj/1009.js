// 분산처리

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const T = parseInt(input.shift());
const testCase = input;
const sol = (T,testCase) =>{
    const result = [];
    const pattern = [[10],
                    [1],
                    [2,4,6,8],
                    [3,9,7,1],
                    [4,6],
                    [5],
                    [6],
                    [7,9,3,1],
                    [8,4,2,6],
                    [9,1]];
    for(let i=0; i<T;i++){
        let [a,b] = testCase[i].split(' ');
        const index = b%pattern[a%10].length-1;
        result.push(pattern[a%10][index === -1? pattern[a%10].length-1:index]);
    }
    console.log(result.join('\n'));
}

sol(T,testCase);
