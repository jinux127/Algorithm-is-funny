// 한수

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); // vscode 테스트용


function isOneNumber(n){
    let difference = 0;
    if(n<100) return true;
    else {
        difference = Number(String(n)[0]) - Number(String(n)[1])
        for(let i =1; i<String(n).length - 1;i++){
            if(difference != Number(String(n)[i]) - Number(String(n)[i+1])) return false;
            else return true;
        }
    }
}
let arr = new Array(input[0]+1).fill(false);

for(let i=1; i<= input[0];i++){
    if(isOneNumber(i)) arr[i] = true;
}

console.log(arr.filter(x=> x == true).length);