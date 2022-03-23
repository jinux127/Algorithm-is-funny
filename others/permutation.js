// 순열

const arr = [1,2,3,4,5];
const MAX = arr.length;
const visited = new Array(MAX).fill(false);
const vector = [];
const result = [];

const dfs = (cnt) =>{
    let str ="";
    if(cnt === 2){
        for(let i=0; i<vector.length; i++){
            str += vector[i] + " ";
        }
        result.push(str.trim());
        return;
    }

    for(let i=0; i<MAX; i++){
        if(visited[i]) continue;
        visited[i] = true;
        vector.push(arr[i]);
        dfs(cnt+1);
        vector.pop();
        visited[i] = false;
    }

}

dfs(0);
console.log(result.join('\n'));
