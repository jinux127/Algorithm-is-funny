// 다각형그리기
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const N = parseInt(input.shift());
const specimenShapeArr = input.shift().split(' ').map(Number);
const shapeArrCount = input.shift();
const shapeArr = input;

const sol = (N, specimenShapeArr, shapeArrCount, shapeArr) =>{
    const result = [];
    for(let i=0; i< shapeArrCount; i++){
        const arr = specimenShapeArr;
        const shape = shapeArr[i].split(' ').map(Number);
        let flag = false;
        for(let k=0; k<N;k++){
            if(flag){
                result.push(shapeArr[i]);
                break;
            } else {
                arr.push(arr.shift());
            }
            for(let j=0; j<N;j++){
                if(shape[j] === specimenShapeArr[j]) flag = true;
            }
        }
    }
    console.log(result);
}

sol(N, specimenShapeArr, shapeArrCount, shapeArr);
