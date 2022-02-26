//소수

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


const sol = (M,N) => {
    let arr = [];
    for(let i = M; i<=N;i++){
        if(isPrime(i)) arr.push(i);
    }
    console.log(arr)
    if(arr.length > 0){
        console.log(arr.reduce((acc,cur)=>acc+cur,0));
        console.log(arr[0]);
    } else {
        console.log(-1);
    }
}


const isPrime = (num) =>{
    if(num <= 1) return false;
    if(num % 2 === 0){
        return num === 2 ? true : false;
    }
    for (let i = 3; i <= Math.sqrt(num); i++) {
        if(num% i ===0) return false;
    }
    return true;
}

sol(input[0],input[1])