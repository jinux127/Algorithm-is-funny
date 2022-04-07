// 직사각형 네개의 합집합의 면적 구하기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    const graph = Array.from(Array(100), ()=>new Array(100).fill(0));
    let result = 0;
    while(input.length){
        const [x1, y1, x2, y2] = input.shift().split(' ').map(Number);

        for(let i=x1; i<x2;i++){
            for(let j=y1; j<y2;j++){
                if(graph[j][i] === 1) continue;

                graph[j][i] = 1;
                result++;
            }
        }
    }

    console.log(result);

}

sol(input);
