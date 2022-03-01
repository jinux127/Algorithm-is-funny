// 터렛

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용



const T = Number(input.shift());

const sol = (input) =>{
    for(const item of input){
        const arr = item.split(' ').map(Number);
        const [x1,y1,r1,x2,y2,r2] = arr;
        const dx = x1 - x2;
        const dy = y1 - y2;

        const rSum = Math.pow((r1 + r2),2);
        const rSub = Math.pow((r1 - r2),2);
        const d = Math.pow(dx,2) + Math.pow(dy,2);

        if(d < rSum && d > rSub) {
            console.log(2);
        } else if (d === rSum || (d=== rSub && d !==0)) {
            console.log(1);
        } else if (d < rSub || d > rSum){
            console.log(0);
        } else if (d === 0){
            if (r1 === r2){
                console.log(-1);
            } else {
                console.log(0);
            }
        }
    }
}

sol(input);
