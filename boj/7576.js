// 토마토

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);


const sol = (input) =>{
    // M: 가로, N: 세로
    const [M, N] = input.shift().split(' ').map(Number);
    const graph = Array.from(Array(N),() => new Array());
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    const needVisit = [];

    for(let i=0; i<N;i++){
        graph[i]= input.shift().split(' ').map(Number);
        // console.log(graph[i]);
        let idx = -1;
        while(graph[i].indexOf(1,idx + 1) !== -1){
            idx = graph[i].indexOf(1,idx + 1);
            needVisit.push([idx,i]);
        }
    }

    let days = 0;
    const bfs = () =>{
        let prev = 0;
        while(needVisit.length){
            let eveCounts = needVisit.length; // 전날 익은 토마토 개수
            let change = false;
            // for(const i of needVisit){
            //     console.log(i);
            // }
            // console.log('---')
            for(let i=prev; i<eveCounts; i++){ // 전날 익은 토마토 개수만큼 반복
                const [x,y] = needVisit[i];
                // console.log(x,y)
                for(let j=0; j<4; j++){
                    const nx = x + dx[j];
                    const ny = y + dy[j];
                    // console.log(`nx,ny:${nx},${ny}`)
                    if(nx<0 || ny < 0 || nx>=M || ny>=N) continue;
                    if(graph[ny][nx] === 0){
                        change = true;
                        graph[ny][nx] = days +1;
                        needVisit.push([nx,ny]);
                    }
                }
            }
            if(change) {
                days++;
                prev = eveCounts;
            } else {
                break
            }
        }

        for(let i=0; i<N; i++){
            if (graph[i].includes(0)) return -1;
        }
   
        return days;
    }

    console.log(bfs());
}

sol(input);
