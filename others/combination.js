// 조합

const arr = [1,2,3,4,5];
const MAX = arr.length;
const visited = new Array(MAX).fill(false);
const result = [];

const dfs = (idx, cnt) =>{
    let str = "";
    if(cnt ===3){
        for(let i=0; i<MAX; i++){
            if(visited[i] === true){
                str += arr[i] + " ";
            }
        }
        result.push(str.trim());
        return;
    }

    for(let i= idx; i<MAX; i++){
        if(visited[i] === true) continue;
        visited[i] = true;

        dfs(i, cnt+1);
        visited[i] = false;
    }
}

dfs(0,0);
console.log(result);