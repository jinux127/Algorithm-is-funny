// 골드바흐의 추측

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용

const T = input.shift();
const arr = [...input];
const sol = (T,arr) =>{
    const resultArr = [];
    for(let i =0; i<arr.length; i++){
        const n = arr[i] // 주어진 n
        const nPrimeArr = isPrime(n); // n까지의 소수
        const primeNumArr = [];

        for(let j = 0; j<nPrimeArr.length; j++){
            if(nPrimeArr[j]) primeNumArr.push(j);
        }

        let tempArr = [];
        for(let j = 0; j<primeNumArr.length; j++){
            let difference = 10000;
            for(let k = j; k<primeNumArr.length; k++){
                if(primeNumArr[j] + primeNumArr[k] == n){
                    if(difference > Math.abs(primeNumArr[j]-primeNumArr[k])){
                        difference = Math.abs(primeNumArr[j]-primeNumArr[k]);
                        tempArr = [primeNumArr[j], primeNumArr[k]];
                    }
                }
            }
        }
        resultArr.push(tempArr);
    }

    for (const result of resultArr) {
        console.log(result[0], result[1]);
    }
}

const isPrime = (num) =>{
    const nPrimeArr = new Array(num+1).fill(true);
    nPrimeArr.splice(0,2,false,false);
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(nPrimeArr[i]){
            for(let j = i*i; j<=num; j+=i){
                nPrimeArr[j] = false;
            }
        }
    }

    return nPrimeArr;
}

sol(T,arr);
