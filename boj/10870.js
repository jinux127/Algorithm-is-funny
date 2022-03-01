// 피보나치 수5

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용

const sol = (input) =>{
    console.log(fibo(input[0]));
}

const fibo = (n) => {
    if(n ===0 )return 0;
    else if (n===1) return 1;
    else return  fibo(n-1) + fibo(n-2);
}

sol(input);
