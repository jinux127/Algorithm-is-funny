// 일곱 난쟁이

const { cursorTo } = require('readline');

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const sol = (input) =>{
    const heights = [...input].sort((a,b)=>a-b);
    const sum = heights.reduce((acc,cur)=>acc+cur);
    const minus = sum - 100;
    const result = [];

    let check1, check2;

    for (let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if(heights[i] + heights[j] === minus){
                [check1, check2] = [i, j];
            }
        }
    }

    for (let i=0; i<9; i++){
        if(i !== check1 && i !== check2){
            result.push(heights[i]);
        }
    }

    console.log(result.join('\n'));
    
}

sol(input);
