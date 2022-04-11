// 플로이드 와샬 알고리즘

const graph = [
    [0,5,Infinity,8],
    [7,0,9,Infinity],
    [2,Infinity,0,4],
    [Infinity,Infinity,3,0]
];

const floydWarshall= (N,graph) =>{
    const result_graph = Array.from(Array(N),() =>new Array());

    for(let i=0 ;i<N;i++){
        for(let j=0; j<N;j++){
            result_graph[i][j] = graph[i][j]; 
        }
    }

    for(let i=0; i<N;i++){
        for(let j=0; j<N; j++){
            for(let k=0; k<N; k++){
                if(result_graph[j][i] + result_graph[i][k] < result_graph[j][k]) {
                    result_graph[j][k] = result_graph[j][i] + result_graph[i][k];
                }
            }
        }
    }

    for(let i =0; i< N;i++){
        console.log(result_graph[i]);
    }
}

floydWarshall(4, graph);