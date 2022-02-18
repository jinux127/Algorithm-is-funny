// 네트워크

function solution(n, computers) {
    var answer = 0;
    const visited = [];

    function dfs(node, visited, computers){
        visited[node] = true;
        for(let i =0; i< computers.length; i++){
            if(computers[node][i] === 1 && !visited[i]) dfs(i,visited,computers);
        }
    }

    for (let i = 0; i < n; i++) {
        if(!visited[i]){
            dfs(i,visited,computers);
            answer++;
        }
    }
    return answer;
}

console.log(solution(4,[[1, 1, 0, 1], [1, 1, 0, 0], [0, 0, 1, 0],[0, 0, 1, 0]]))