// 소트인사이드

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const sol = (input) =>{
    const arr = [];

    for(let i =0; i< input[0].length; i++){
        arr.push(input[0][i]);
    }

    console.log(arr.sort((a,b)=>b-a).join(''));
}

sol(input);
