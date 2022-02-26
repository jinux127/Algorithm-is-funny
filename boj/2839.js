// 설탕배달

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용

const N = input[0];

// 3kg, 5kg 봉지가 있고 최대한 적은 봉지로 배달 정확하게 Nkg 나눠서 운반해야함, 정확하게 N을 만들 수 없다면 -1 출력

const sol = (a) => {
    let cnt = 0;
    while(true){
        if(a % 5 === 0){
            console.log(a / 5 + cnt);
            break;
        } else if(a<=0){
            console.log(-1);
            break;
        }
        a -= 3;
        cnt++;
    }
}

sol(N);

