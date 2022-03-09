// 오큰수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const size_A = input.shift();
const element_A = input;

const sol = (size_A,element_A) =>{
    const result = new Array(size_A).fill(-1);
    const stack =[];
    for(let i =0; i<size_A; i++){
        while(stack.length > 0 && element_A[stack[stack.length-1]] < element_A[i]){
            result[stack.pop()] = input[i];
        }
        stack.push(i);
    }
    console.log(result.join(' '));
}

sol(size_A,element_A);
