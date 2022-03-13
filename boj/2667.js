// 단지번호붙이기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const map = [];
for(let i=0; i<N; i++){
    map.push(input[i].split('').map(Number));
}
const sol = (N,map) =>{
    // 상하좌우
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    const countHome = [];
    let count = 0;
    let home = 0;
    const dfs = (x,y) =>{
        if(x<0 || y<0 || x>=N || y>=N) return false;

        if(map[x][y] === 1){
            map[x][y] = 0;
            home++;
            for(let i=0; i<4; i++){
                dfs(x+dx[i], y+dy[i]);
            }
            return true;
        }
        return false;
    }

    for(let i=0; i< N; i++){
        for(let j=0; j<N; j++){
            if(dfs(i,j)){
                count++;
                countHome.push(home);
                home = 0;
            }
        }
    }
    console.log(count);
    console.log(countHome.sort((a,b)=>a-b).join('\n'));
}

sol(N,map);
