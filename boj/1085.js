// 직사각형에서 탈출

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const [x,y,w,h] = input[0].split(' ').map(Number);

// 왼쪽 아래 꼭짓점은 0,0 오른쪽 위 w,h
// 경계선까지의 최솟값 출력
const sol = (x,y,w,h) =>{
    const xMin = (x <= Math.abs(w-x) ? x : Math.abs(w-x));
    const yMin = (y <= Math.abs(y-h) ? y : Math.abs(y-h));
    console.log(Math.min(xMin,yMin));
}

sol(x,y,w,h);
