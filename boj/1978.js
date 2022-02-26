// 소수 찾기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용


const N =  Number(input[0]);
const arr =  input[1].split(' ').map(Number);

const sol = (N,arr) =>{
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])) cnt++;
    }
    console.log(cnt);
}

const isPrime = (n) =>{
    if(n <= 1) return false; // 음수와 1은 소수가 아니다
    if(n % 2 === 0 ){ // 2로 나누어지는 경우
        return n === 2 ? true : false; // 2는 짝수 중 유일한 소수
    }

    for (let i = 3; i <= Math.sqrt(n); i++) {
        if(n%i === 0) return false;
    }
    return true;
}

sol(N, arr);