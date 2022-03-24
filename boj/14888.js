// 연산자 끼워넣기
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const input_operator = input[2].split(' ');
const sol = (N, arr, input_operator) =>{
    const visited = new Array(N-1).fill(false);
    const vector = [];
    const operator = ["+","-","*","/"]
    const operatorArr = [];
    const result_arr = [];
    for(let i=0; i<input_operator.length;i++){
        for(let j=0; j<input_operator[i]; j++){
            operatorArr.push(operator[i]);
        }
    }

    const dfs = (cnt) =>{
        if(cnt === operatorArr.length){
            let result = arr[0];
            for(let i=0; i<vector.length;i++){
                if(vector[i] === operator[0]){
                    result += arr[i+1];
                } else if(vector[i] === operator[1]){
                    result -= arr[i+1];
                } else if(vector[i] === operator[2]){
                    result *= arr[i+1];
                } else {
                    if(result < 0){
                        result = -Math.floor(-result/arr[i+1]);
                    } else {
                        result = Math.floor(result/arr[i+1]);
                    }
                }
            }
            result_arr.push(result);
        }
        for(let i=0; i<N-1; i++){
            if(visited[i]) continue;
            visited[i] = true;
            vector.push(operatorArr[i]);
            dfs(cnt+1);
            vector.pop();
            visited[i] = false;
        }
    }

    dfs(0);
    const max = Math.max(...result_arr);
    const min = Math.min(...result_arr);
    console.log(max === -0 ? 0 : max);
    console.log(min === -0 ? 0 : min);
}

sol(N, arr, input_operator);
