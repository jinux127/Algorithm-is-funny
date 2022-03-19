// 바이러스

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const K = parseInt(input.shift());
const arr = input;
const sol = (N, K, arr) =>{
    const graph = Array.from(Array(N+1),() => new Array());
    const visited = new Array(N+1).fill(false);
    for(const item of arr){
        const [A, B] = item.split(' ').map(Number);
        graph[A].push(B);
        graph[B].push(A);
    }
    let count = 0;
    const dfs = (i) =>{
        const stk = [];
        visited[i] = true;
        stk.push(i);
        while(stk.length){
            const node = stk.pop();
            for(const child of graph[node]){
                if (visited[child] === false) {
                    dfs(child)
                    count++;
                }
            }
        }
    }

    dfs(1);
    console.log(count);

}

sol(N, K, arr);
