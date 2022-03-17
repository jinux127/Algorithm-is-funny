// Two Dots

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    const [N,M] = input.shift().split(' ').map(Number);
    const visited = Array.from(Array(N),()=>new Array(M).fill(false));
    const map = [];
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    let start;
    let flag = false;
    for(let i=0; i<input.length; i++){
        map.push(input[i].split(''));
    }

    const dfs = (x,y,cnt,type) =>{
        if(flag) return;

        for(let i=0; i<4; i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
            if(cnt>=4 && start[0] === nx && start[1] === ny){
                flag = true;
                return;
            }

            if(nx<0||ny<0||nx>=M||ny>=N||type !== map[ny][nx] || visited[ny][nx] === true){
                continue;
            }
        
            visited[y][x] = true;
            dfs(nx,ny,cnt+1,type);
            visited[y][x] = false;

        }
    }
    Out:for(let y=0; y<N;y++){
        for(let x=0; x<M;x++){
            start = [x,y];
            const type = map[y][x];

            dfs(x,y,1,type);
            visited[y][x] = false;
            if(flag) break Out;
            
        }
    }

    flag ? console.log("Yes") : console.log("No");
}

sol(input);
