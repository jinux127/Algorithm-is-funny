// N과 M 3

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const [N,M] = input[0].split(' ').map(Number);
const sol = (N, M) =>{
    const visited = new Array(N).fill(false);
    const arr = [];
    const vector = [];
    const result = [];
    
    for(let i=1; i<=N;i++){
        arr.push(i);
    }

    const dfs = (cnt) =>{
        let str = "";
        if(cnt === M){
            for(let i=0; i<vector.length; i++){
                str += vector[i] +" ";
            }
            result.push(str.trim());
            return;
        }

        for(let i=0; i<N;i++){
            // if(visited[i])continue;
            visited[i]=true;
            vector.push(arr[i]);
            dfs(cnt+1);
            vector.pop();
            visited[i]=false;
        }
    }

    dfs(0);

    console.log(result.join('\n'));
}

sol(N, M);
