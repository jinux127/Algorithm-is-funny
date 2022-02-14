// 미로 탈출

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().split('\n'); // vscode 테스트용

let N = input[0].split(' ')[0];
let M = input[0].split(' ')[1];
let nx = 0;
let ny = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let graph = [];

for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split('').map(Number));
}

function bfs(x,y){
    let queue = [];
    queue.push([x,y]);
    while(queue.length != 0){
        [x,y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            nx = x + dx[i];
            ny = y + dy[i];
            
            if(nx<=-1 || nx>=N || ny <= -1 || ny >= M) {
                console.log(`nx: ${nx}, ny: ${ny} 공간밖무시`);
                continue; // 공간 밖 무시
            }
            if(graph[nx][ny] == 0) {
                console.log(`nx: ${nx}, ny: ${ny}, 벽인 경우 무시`);
                continue; // 벽인 경우 무시
            }
            if(graph[nx][ny] == 1){ // 해당 노드를 처음 방문하는 경우 최단거리 기록
                console.log(`nx: ${nx}, ny: ${ny}, 처음 방문`);
                graph[nx][ny] = graph[x][y] + 1;
                queue.push([nx,ny]);
                console.log(`graph[nx][ny]:${graph[nx][ny]}`);
            }
        }
    }

    return graph[N - 1][M - 1]
}

console.log(bfs(0,0))
