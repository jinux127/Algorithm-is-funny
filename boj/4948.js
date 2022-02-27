// 베르트랑 공준

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


const sol = (input) =>{
    const primeArr = isPrime(Math.max(...input));

    console.log(primeArr);
    for(const iter of input){
        if (iter === 0) continue;

        let cnt = 0;

        for (let i = iter+1; i <= iter*2; i++) {
            primeArr[i] ? cnt++ : null;
        }

        console.log(cnt);
    }
}

const isPrime = (num) =>{
    const arr = new Array((num*2)+1).fill(true);

    arr.splice(0,2,false,false);

    for(let i = 2; i< Math.sqrt(num*2); i++){
        if(arr[i]){
            for(j=i*i; j<=num*2; j+=i){
                arr[j] = false;
            }
        }
    }

    return arr;

}

sol(input);
