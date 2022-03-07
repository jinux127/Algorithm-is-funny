// 수 정렬하기 3

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number); // vscode 테스트용

const N = input.shift();
const arr = new Array(Math.max(...input)+1).fill(0)
const sol = (input) =>{
    for(const item of input){
        arr[item]++;
    }

    for(let i =0; i<arr.length; i++){
        if(arr[i]){
            for(let j=0; j<arr[i];j++){
                console.log(i);
            }
        }
    }
}

sol(input);
