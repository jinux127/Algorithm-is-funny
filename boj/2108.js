// 통계학

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number); // vscode 테스트용

const N = input.shift();

const frequencyArr = input.reduce((acc, curr) => { 
    acc[curr] = (acc[curr] || 0)+1; 
    return acc;
  }, {});

const maxFrequency = Math.max.apply(null, Object.values(frequencyArr));

let mode = [];
Object.keys(frequencyArr).forEach(key=>{
    if(frequencyArr[key] === maxFrequency) mode.push(Number(key));
});

const sol = (N, input) =>{
    console.log(Math.round((input.reduce((acc,cur)=>acc+cur,0)/N))+0);
    console.log(input.sort((a,b)=>a-b)[Math.floor(N/2)]);
    if(mode.length > 1){
        mode.sort((a,b)=>a-b);
        console.log(mode[1]);
    } else {
        console.log(mode[0]);
    }
    console.log(Math.max(...input) - Math.min(...input));
}

sol(N, input);
