// 이분 그래프

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    const K = parseInt(input[0]);
    input = input.slice(1);

    
    
    // K개의 테스트 케이스 수행
    for(let i=0; i<K; i++){
        let [V,E] = input[0].split(' ').map(Number);
        input = input.slice(1);
        const graph = Array.from(Array(V+1),() => new Array());
        let visited = new Array(V+1).fill(0);
        
        for(let j=0; j<E;j++){ // 그래프 생성 
            const [node1,node2] = input[j].split(' ').map(Number); 
            graph[node1].push(node2);
            graph[node2].push(node1);
        }
        const dfs = (v, group) =>{ // dfs
            visited[v] = group;
            for(const node of graph[v]){
                visited[node] === 0 ? dfs(node, 3 - group) : null;
            }
        }

        for(let i=1; i<=V;i++){
            visited[i] === 0 ? dfs(i,1) : null;
        }

        let flag = true;
        out : for(let i=0; i<=V; i++){
            for(const group of graph[i]){
                if(visited[i] === visited[group]){
                    flag = false;
                    break out;
                }
            }
        }
        flag ? console.log("YES") : console.log("NO");

        input = input.slice(E);
    }
}

sol(input);
