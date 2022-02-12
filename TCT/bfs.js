//bfs 구현

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

function bfs(graph, start, visited){
    let queue = [start];

    visited[start] = true;

    while(queue.length){
        let v = queue.shift();
        console.log(v);

        for (const iterator of graph[v]) {
            if(!visited[iterator]){
                queue.push(iterator);
                visited[iterator] = true;
            }
        }
    }
}

let visited = new Array(9).fill(false);

bfs(graph, 1, visited);