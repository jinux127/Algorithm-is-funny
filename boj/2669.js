// 십자카드 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const arr = input[0].split(' ').map(Number);
const sol = (arr) =>{
    let MIN = parseInt(arr.join(''));
    let numberOfClocks = [];

    for(let i=1111; i<= 9999; i++){
        if(((i%1000)%100)%10 === 0) continue;
        if(Math.floor(((i%1000) % 100) / 10) === 0) continue;
        if(Math.floor((i%1000)/100) === 0) continue;
        
        numberOfClocks.push(i);
    }

    for(let i=0; i<3; i++){
        arr.push(arr.shift());
        MIN = Math.min(MIN,parseInt(arr.join('')));
    }

    console.log(numberOfClocks.indexOf(MIN));
}

sol(arr);
