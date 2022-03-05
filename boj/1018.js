// 체스판 다시 칠하기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/); // vscode 테스트용

[N,M, ...board] = input;

const checkBoard = ['WBWBWBWB','BWBWBWBW'];
let min = 64;
const sol = (N,M,board) =>{
    for(let i =0; i <= N-8; i++){
        for(let j=0; j<= M-8; j++){
            for(let k=0; k<2; k++){
                let cnt = 0;
                for(let x=i; x<i+8;x++){
                    for(let y=j; y<j+8;y++){
                        if(board[x][y] !== checkBoard[(x+k)%2][y-j]) cnt++;
                    }
                }
                if(min>cnt) min = cnt;
            }

        }
    }
    console.log(min);
}

sol(N,M,board);
