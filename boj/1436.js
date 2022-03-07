// 영화감독 숌

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/); // vscode 테스트용

const sol = (input) =>{
    let number666 = 665;
    for(let i =input[0]; i>0; ){
        number666++;
        if(number666.toString().includes('666')) i--;
    }
    console.log(number666);
}

sol(input);
