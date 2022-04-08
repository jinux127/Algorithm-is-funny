// 숫자고르기
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = input.shift();
const arr = [0,...input.map(Number)]
const sol = (N,arr) =>{
    const visited = new Array(arr.length+1).fill(false);
    const result = [];
    const dfs = (cur,first_value) =>{
        if(!visited[cur]){
            visited[cur] = true;
            dfs(arr[cur],first_value);
            visited[cur] = false;
        } else {
            if(cur === first_value) {
                result.push(cur);
            }
        }
    }

    for(let i=1; i<=arr.length;i++){
        dfs(i,i);
    }
    console.log(result.length);
    console.log(result.join('\n'));

}

sol(N,arr);
