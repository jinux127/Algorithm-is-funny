const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

console.log(input);

const sol = (param) =>{
    
}

sol(param);
