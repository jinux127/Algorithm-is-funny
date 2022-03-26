// 스도쿠

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (input) =>{
    const sudoku = new Array(9);
    
    for(let i=0; i<input.length;i++){
        sudoku[i] = input[i-1].split(' ').map(Number);
    }

    const findZero = ()=>{
        const zeros = [];
        for(let i=0; i<sudoku.length; i++){
            for(let j=0; j<sudoku[i].length; j++){
                if(sudoku[i][j] === 0) zeros.push([j,i]);
            }
        }
        return zeros;
    }
    const zero = findZero();
    const n = zero.length;

    const isUniq = (x,y,val) =>{
        if(sudoku[y].includes(val)){
            return false;
        }
        
        for(let row=1; row<=9; row++){
            if(sudoku[row][x] === val){
                return false;
            }
        }

        let x_range = Math.floor(x / 3) * 3;
        let y_range = Math.floor(y / 3) * 3;
        for(let i = y_range; i<=y_range+3; i++){
            for(let j = x_range; j<=x_range+3;j++){
                if(sudoku[i][j] === val){
                    return false;
                }
            }
        }
        
        return true;
    }

    const sudokuSolve =(cnt) =>{

        if(cnt === n) {
            for(let i=0; i<9;i++){
                for(let j=0; j<9;j++){

                }
                if(isUniq(x,y,i)){
                    sudoku[y][x] = i;
                    break;
                }
            }
        }

        let nx = zero[cnt][0];
        let ny = zero[cnt][1];

        for(let i=1; i<=sudoku.length; i++){
            if(isUniq(nx,))
        }
    }

    
    sudokuSolve(1,1);

    for(let i=0; i<input.length;i++){
        console.log(sudoku[i]);
    }
}

sol(input);
