const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n'); // vscode 테스트용

console.log(input);

const sol = (param) =>{
    
}

sol(param);
