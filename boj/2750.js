const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number); // vscode 테스트용

const sol = (input) =>{
    let result = [];
    input.shift();
    input.sort((a,b)=>a-b);
    for(let i=0;i<input.length;i++){
        result.push(input[i]);
    }
    console.log(result.join('\n'));
}

sol(input);

