// 팩토리얼

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


const sol = (input) =>{
    console.log(factorial(input));
}

const factorial = (n) =>{
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

sol(input);
