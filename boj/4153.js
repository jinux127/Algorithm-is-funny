// 직각삼각형

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

const arr = input.map(item=>item.split(' ').map(Number));

const sol = (arr) =>{
    for(const item of arr){
        item.sort((a,b)=>a-b);
        if(item[0] === 0) break;
        const x = Math.pow(item[0],2);
        const y = Math.pow(item[1],2);
        const z = Math.pow(item[2],2);
        x + y === z ? console.log('right') : console.log('wrong');
    }
}

sol(arr);
