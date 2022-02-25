//ACM 호텔

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const T = Number(input[0]);
const arr = [];

for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(' ').map(Number))
}

function sol(T,arr){
    for (const iter of arr) {
        const H = iter[0];
        const W = iter[1];
        const N = iter[2];
        let floor = 1;
        let room = 1;

        room = Math.ceil(N / H);
        floor = N % H === 0 ? H : N % H;

        console.log(String(floor) + String(room).padStart(2,'0'));
    }
    
}

sol(T,arr);