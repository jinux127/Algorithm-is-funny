// 섬의 개수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    let arr = input;
    // 123 
    // 456 , 5는 제외 가운데니깐!
    // 789
    const dx = [-1,0,1,-1,1,-1,0,1];
    const dy = [1,1,1,0,0,-1,-1,-1];
    const result = [];
    while(arr.length){
        const [w,h] = arr[0].split(' ').map(Number);

        if(w===0 && h===0) break;

        arr = arr.slice(1);
        const graph = Array.from(Array(h),() => new Array());

        for(let i=0; i<h; i++){
            graph[i] = arr[i].split(' ').map(Number);
        }

        // for(let i=0;i<h; i++){
        //     console.log(graph[i]);
        // }
        const dfs =(x,y) =>{
            if(x<0 || x>=w || y<0 || y>=h) return false;

            if(graph[y][x] === 1){
                graph[y][x] = 0;
                // console.log(`y: ${y}`);
                // console.log(`g: ${graph[y]}`)
                for(let i=0; i<8; i++){
                    dfs(x+dx[i], y+dy[i]);
                }
                return true;
            }
            return false;
        }
        let count = 0;
        for(let i=0; i<h;i++){
            for(let j=0; j<w; j++){
                dfs(j,i) ? count++ : null;
                // !(i===0 && j===0) ? result.push() : null;
            }
        }
        result.push(count);
        arr= arr.slice(h);
    }
    console.log(result.join('\n'));
}

sol(input);
