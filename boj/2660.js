// 회장뽑기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const N = parseInt(input.shift());
const arr = input;

const sol = (N,arr) =>{
    const graph = Array.from(Array(N+1), ()=>new Array());
    const visited = new Array(N+1).fill(false);

    while(arr.length){
        const [node1, node2] = arr.shift().split(' ').map(Number);

        if(node1 === -1 && node2 === -1) break;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }

    const dfs = (idx, count) =>{
        count += 1;
        visited[idx] = true;
        for(const node of graph[v]){
            !visited_dfs[node] ? dfs(node) : null;
        }
    }

}

sol(N,arr);
