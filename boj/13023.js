// ABCDE

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const [N, M, arr] = [parseInt(input.shift()), parseInt(input.shift()), [...input].map(Number)];

const sol = (N, M, arr) =>{
    const graph = Array.from(Array(N), () => new Array());
    let isSuccess = false;

    while(arr.length){
        const index1 = arr.shift();
        const index2 = arr.shift();
        graph[index1].push(index2);
        graph[index2].push(index1);
    }
    
    const visited = new Array(N).fill(false);

    const dfs = (v, cnt) => {
        if (cnt >= 4){
            isSuccess = true;
            return;
        }
        // console.log(`v:${v}, cnt:${cnt}`);
        visited[v] = true;
        for(const node of graph[v]){
            !visited[node] ? dfs(node, cnt+1) : null;
            if(isSuccess){
                return;
            }
        }
        visited[v] = false;
    }

    for(let i=0; i<N; i++){
        dfs(i,0);
        if(isSuccess) break;
    }
    isSuccess ? console.log(1) : console.log(0);
}



sol(N, M, arr);
