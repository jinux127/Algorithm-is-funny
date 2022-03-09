// 오등큰수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const size_A = input.shift();
const element_A = input;
const sol = (size_A,element_A) =>{
    const result = new Array(size_A).fill(-1);
    const count = {};
    for(let c in element_A){
        if(!count[element_A[c]]){
            count[element_A[c]] = 1;
        } else {
            count[element_A[c]]++;
        }
    }
    const stack = [];
    for(let i =0; i<size_A; i++){
        while(stack.length>0 && count[element_A[stack[stack.length-1]]] < count[element_A[i]]){
            result[stack.pop()] = element_A[i];
        }
        stack.push(i);
    }
    console.log(result.join(' '));
}

sol(size_A,element_A);
