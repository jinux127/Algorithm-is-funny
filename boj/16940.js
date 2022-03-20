// BFS 스페셜 저지

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const graph = Array.from(Array(N+1),()=>new Array());
const input_length = input.length;
for(let i=0;i<input_length - 1;i++){
    const [nodeA, nodeB] = input.shift().split(' ').map(Number);
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
}
const order_input = [0,...input.shift().split(' ').map(Number)];

const sol = (N, graph, order_input) =>{
    const visited = new Array(N+1).fill(false);
    const queue = [];

    const order = new Array(N+1);
    for(let i=1; i<=N;i++){
        order[order_input[i]] = i; 
    }

    for(const node_arr of graph){
        node_arr.sort((a,b)=>{
            if(order[a] < order[b]){
                return -1;
            } else if(order[a] === order[b]){
                return 0;
            } else {
                return 1;
            }
        })
    }

    const bfs = (i)=>{
        let idx =0;
        queue.push(i);

        while(queue.length){
            const node = queue.shift();
            idx++;
            
            if(order[idx] != node){
                return 0;
            }
            
            visited[node] = true;
            for(const child_node of graph[node]){
                if(!visited[child_node]){
                    queue.push(child_node);
                }
            }
        }
        return 1;
    }

    console.log(bfs(order_input[0]));

    
}

sol(N, graph, order_input);
