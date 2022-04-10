// 십자카드 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const arr = input[0].split(' ').map(Number);
const sol = (arr) =>{
    let MIN = 0;
    let cnt = 0;
    const numberCross = (x) =>{
        let temp = parseInt(x.join(''));
        for(let i=0; i<3; i++){
            x.push(x.shift());
            temp = Math.min(temp,parseInt(x.join('')));
        }
        return temp;
    }
    
    MIN = numberCross(arr);

    for(let i=1111; i<= MIN; i++){
        if(numberCross(String(i).split('')) === i ){
            cnt++;
        }
    }
    
    // console.log(MIN);
    console.log(cnt);
}

sol(arr);
