// dfs

// 노드 연결 정보
const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
];

const visited = new Array(9).fill(false);

const dfs = (graph, node, visited) =>{
    visited[node] = true; // 방문함
    console.log(node);
    for(const n of graph[node]){
        !visited[n] ? dfs(graph, n, visited) : null;
    }
}

dfs(graph, 1, visited);