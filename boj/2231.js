//분해합

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number); // vscode 테스트용

const selfNumber = (N) =>{
    const num = N.toString().split('');

    return N + num.reduce((acc,cur)=>acc += Number(cur),0);
}

const sol = (N) =>{
    for (let i = 0; i <= N; i++) {
        if(selfNumber(i) === N) return i;
    }

    return 0;
}

console.log(sol(input[0]));
