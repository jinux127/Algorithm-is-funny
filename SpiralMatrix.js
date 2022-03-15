const sol = (n) =>{
    const result = Array.from(Array(n), ()=>new Array(n));

    let count = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn <= endColumn && startRow <= endRow){
        
        for(let i=startColumn; i<=endColumn;i++){
            result[startRow][i] = count;
            
            count++;
        }
        startRow++;

        for(let i=startRow; i<=endRow;i++){
            result[i][endColumn] = count;
            count++;
        }
        endColumn--;

        for(let i=endColumn; i >= startColumn; i--){
            result[endRow][i] = count;
            count++;
        }
        endRow--;

        for(let i=endRow; i>=startRow; i--){
            result[i][startColumn] = count;
            count++;
        }
        startColumn++;
    }
    for(let i=0; i<result.length;i++){
        console.log(result[i]);
    }
}

sol(12);