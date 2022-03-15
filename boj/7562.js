// 나이트의 이동

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const T = parseInt(input.shift());
const arr = input;
const sol = (T,arr) =>{
    const dx = [-2,-2,-1,-1,1,1,2,2];
    const dy = [1,-1,2,-2,2,-2,1,-1];
    const result =[];
    for(let i=0; i<T; i++){
        const I = parseInt(input.shift());
        const map = Array.from(Array(I), () =>new Array(I).fill(0));
        const queue = Array.from(Array(1),()=>input.shift().split(' ').map(Number));
        const [Tx,Ty] = input.shift().split(' ').map(Number);

        while(queue.length){
            const [x,y] = queue.shift();

            if(x===Tx && y===Ty) {
                result.push(map[y][x]);
                break;
            }

            for(let i=0; i<dx.length;i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx<0 || ny<0 || nx>=I || ny>=I) continue;
                if(map[ny][nx]===0){
                    map[ny][nx] = map[y][x]+1;
                    queue.push([nx,ny]);
                }
            }
        }
    }

    console.log(result.join('\n'));
}

sol(T,arr);
