// 음료수 얼려 먹기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용

console.log(input);

let N = input[0].split(' ')[0];
let M = input[0].split(' ')[1];
let graph = [];
for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split(''));
}

function dfs(x,y){
    // 범위 벗어나는경우 제외
    if(x <= -1 || x >= N || y <= -1 || y >= M) return false;

    if(graph[x][y]==0){ // 현재 노드를 방문하지않았다면
        graph[x][y] = 1;
        // 상하좌우 검사
        dfs(x - 1, y);
        dfs(x, y - 1);
        dfs(x + 1, y);
        dfs(x, y + 1);
        return true;
    }
    return false;
}

let result = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if(dfs(i, j) == true) result++;
    }
}

console.log(result);