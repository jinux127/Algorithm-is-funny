// 연결 요소의 개수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1);
console.log(arr)

const sol = (N,M,arr) =>{
    const graph = Array.from(Array(N+1), () =>new Array());
    const visited = new Array(N+1).fill(false);
    let count = 0;

    for(const item of arr){
        const [node1, node2] = item.split(' ').map(Number);
        graph[node1].push(node2);
        graph[node2].push(node1);
    }

    const dfs = (v) =>{
        visited[v] = true;
        for(const node of graph[v]){
            !visited[node] ? dfs(node) : null;
        }
    }

    for(let i=1; i<=N; i++){
        if(!visited[i]){
            dfs(i);
            count++;
        }
    }
    console.log(count);
}

sol(N,M,arr);
