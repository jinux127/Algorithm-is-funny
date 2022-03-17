// 서울 지하철 2호선

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input;

const sol = (N,arr) =>{
    const graph = Array.from(Array(N+1),()=>new Array());
    const visited = new Array(N+1).fill(false);
    let cycle;
    let flag = false;
    let start;
    for(let i=0; i<arr.length; i++){
        const nodeA = parseInt(arr[i].split(' ')[0]);
        const nodeB = parseInt(arr[i].split(' ')[1]);
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }
    
    const dfs = (cnt, idx) =>{
        if(flag) return;

        for(let item of graph[idx]){
            if(!visited[item]){
                visited[item] = true;
                dfs(cnt + 1, item);
                visited[item] = false;
            } else if(cnt >= 3 && item === start){
                flag = true;
                cycle = visited.slice();
                return;
            }
        }
    }

    const bfs = (index) =>{
        const queue = [];
        queue.push(index);
        let dist =0;
        const visited_bfs = new Array(N+1).fill(false);
        visited_bfs[index] = true;
        while(true){
            dist++;
            const queue_length = queue.length;
            for(let i=0; i<queue_length; i++){
                const target = queue.shift();
                for(const node of graph[target]){
                    if(cycle[node]){
                        return dist;
                    }
                    if(!visited_bfs[node]){
                        visited_bfs[node] = true;
                        queue.push(node);
                    }
                }
            }
            
        }
    }
    for(let i = 1; i<=N; i++){
        start = i;
        visited[i] = true;
        dfs(1, i);
        visited[i] = false;
        if(flag) break;
    }

    const result = [];
    for(let i=1; i<=N;i++){
        if(cycle[i]){
            result.push(0);
        } else {
            result.push(bfs(i));
        }
    }
    console.log(result.join(" "));
}

sol(N,arr);
