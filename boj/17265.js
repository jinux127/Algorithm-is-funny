// 나의 인생에는 수학과 함께

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const calcOperation = {
    "+" : (num1,num2) => num1 + num2,
    "-" : (num1,num2) => num1 - num2,
    "*" : (num1,num2) => num1 * num2,
}
const sol = (N, input) =>{
    const map = Array.from(Array(N),() => new Array(N));
    for(let i=0; i<N;i++){
        map[i] = input[i].split(' ');
    }
    const [dx, dy] = [[0,1],[1,0]];
    const result =[-Number.MAX_VALUE, Number.MAX_VALUE];

    const dfs = (x,y,num,oper) =>{
        if(x === N-1 && y === N-1){
            result[0] = Math.max(result[0], num);
            result[1] = Math.min(result[1], num);
            return;
        }

        for(let i=0; i<2; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];

            if(nx<0 || ny<0 || nx>=N || ny>=N) continue;

            let isNumber = !isNaN(map[ny][nx]);
            if(isNumber){
                let calcResult = calcOperation[oper](num,parseInt(map[ny][nx]));
                dfs(nx,ny,calcResult,oper);
            } else {
                dfs(nx,ny,num,map[ny][nx]);
            }
        }
    }

    dfs(0, 0, parseInt(map[0][0]), '');

    console.log(result.join(' '));
}

sol(N, input);
