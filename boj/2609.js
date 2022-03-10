// 최대공약수와 최소공배수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);


const sol = (input) =>{
    let [A,B] = input;

    while(A%B>0){
        let n = A % B;
        if(n>0){
            A=B;
            B=n;
        }
    }
    console.log(B);
    console.log(input[0]*input[1]/B);
}

sol(input);
