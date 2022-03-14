// 미로 탐색

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const [N,M] = input.shift().split(' ').map(Number);
const arr = input;
const sol = (N,M,arr) =>{
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    const graph = Array.from(Array(N),() => new Array());
    
    for(let i=0; i<N; i++){
        graph[i] = arr[i].split('').map(Number);
    }
    // for(let i=0;i<N;i++){
    //     console.log(graph[i]);
    // }

    const bfs = (x,y) =>{
        let needVisit =[];
        needVisit.push([x,y]);

        while(needVisit.length){
            [x,y] = needVisit.shift();
            for(let i=0; i<4; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
    
                if(nx<0 || nx>=M || ny<0 || ny>=N) continue;
    
                if(graph[ny][nx] !== 1) continue;

                if(graph[ny][nx] === 1){
                    graph[ny][nx] = graph[y][x] + 1;
                    // for(let d=0; d<N;d++){
                    //     console.log(graph[d]);
                    // }
                    // console.log('---');
                    needVisit.push([nx,ny]);
                }
            }
        }
    }

    bfs(0,0);

    console.log(graph[N-1][M-1]);
}

sol(N,M,arr);
