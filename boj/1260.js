// DFS와 BFS 

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const [N, M, V, arr] = [parseInt(input.shift()), parseInt(input.shift()), parseInt(input.shift()), [...input]];

const sol = (N, M, V, arr) =>{
    const graph = Array.from(Array(N+1), ()=>new Array());
    const visited_dfs = new Array(N+1).fill(false);
    const result_dfs = [];
    while(arr.length){
        const node1 = arr.shift();
        const node2 = arr.shift();
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    
    for(let i=0; i<graph.length; i++){
        graph[i].sort((a,b) => a-b);
    }

    const dfs = (v) =>{
        visited_dfs[v] = true;
        result_dfs.push(v);
        for(const node of graph[v]){
            !visited_dfs[node] ? dfs(node) : null;
        }
    }

    const bfs = (v) =>{
        const visited = [];
        let needVisit = [];

        needVisit.push(v);

        while(needVisit.length){
            const node = needVisit.shift();
            if(!visited.includes(node)){
                visited.push(node);
                needVisit = [...needVisit, ...graph[node]];
            }
        }
        return visited;
    }

    dfs(V);

    console.log(result_dfs.join(' '));
    console.log((bfs(V)).join(' '));
}

sol(N, M, V, arr);
