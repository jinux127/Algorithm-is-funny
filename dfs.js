// dfs 구현
function dfs(graph, v, visited){
    visited[v] = true;
    console.log(v, );
    for (let index = 0; index < graph.length; index++) {
        if(!visited[index]) dfs(graph, index, visited);
    }
}

let graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

let visited = new Array(9).fill(false);

dfs(graph, 1, visited);